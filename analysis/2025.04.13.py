import pandas as pd
from pandas import ExcelWriter

# 파일 경로 설정
equipment_path = '7.의료기관별상세정보서비스_05_의료장비정보 2024.12.xlsx'
hospital_path = '1.병원정보서비스 2024.12.xlsx'
output_path = '병원유형별_장비추천_통합.xlsx'  # 결과 저장 파일

# 엑셀 파일 로드
equipment_df = pd.read_excel(equipment_path, sheet_name='Sheet1')
hospital_df = pd.read_excel(hospital_path, sheet_name='Sheet1')

# 컬럼명 정리
equipment_df = equipment_df.rename(columns={
    "요양기관명": "병원명",
    "장비코드명": "장비명",
    "장비대수": "장비수량"
})
hospital_df = hospital_df.rename(columns={
    "요양기관명": "병원명",
    "종별코드명": "병원유형"
})

# 병원과 장비 정보 병합
merged_df = pd.merge(
    equipment_df,
    hospital_df[["병원명", "병원유형"]],
    on="병원명",
    how="left"
)

# 병원유형 목록 정렬
hospital_types = merged_df["병원유형"].dropna().unique().tolist()
hospital_types.sort()

# 병원유형별 장비 추천 결과 저장
with ExcelWriter(output_path, engine='openpyxl') as writer:
    for hospital_type in hospital_types:
        # 벤치마킹 기준: 해당 병원유형의 장비 평균 수량
        benchmark_df = merged_df[merged_df["병원유형"] == hospital_type]
        benchmark_avg = benchmark_df.groupby("장비명")["장비수량"].mean().reset_index()
        benchmark_avg.columns = ["장비명", "벤치마킹_평균수량"]

        # 비교 대상: 동일 병원유형의 병원들만
        target_df = benchmark_df[["병원명", "장비명", "장비수량"]].drop_duplicates()

        # 벤치마크 평균과 실제 보유 수량 비교
        compare_df = pd.merge(benchmark_avg, target_df, on="장비명", how="left")
        compare_df["장비수량"] = compare_df["장비수량"].fillna(0)
        compare_df["수량_차이"] = compare_df["벤치마킹_평균수량"] - compare_df["장비수량"]

        # 평균보다 적게 보유한 장비만 필터링
        compare_df = compare_df[compare_df["수량_차이"] > 0]
        compare_df = compare_df.sort_values(by=["병원명", "수량_차이"], ascending=[True, False])

        # 시트명은 31자 제한 (엑셀 규칙)
        sheet_name = hospital_type[:31]
        compare_df.to_excel(writer, sheet_name=sheet_name, index=False)

print(f"✅ 저장 완료: {output_path}")
