# 메디인사이트 : 의료기기 현황 서비스

![main_video](/client/public/medi-insight-gif.gif)

---

# 프로젝트 소개
의료 기기 영업이나 현황 파악을 위한 서비스 입니다.
<br/>
각 병원의 의료기기 현황을 제공하며 병원의 크기(타입) 별 의료기기 개수의 평균을 기준으로 해당 병원의 의료 기기가 부족할 경우 해당 차이를 안내합니다.

![main_video](/client/public/medi-detail-table.png)

## 팀원 구성

|                                    김명호                                     |                                    이주현                                    |                                    진수정                                    |
|:--------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|
|                                    데이터                                     |                                    백엔드                                    |                                   프론트엔드                                   |
| <img src="https://avatars.githubusercontent.com/hans0928" width="200px" /> | <img src="https://avatars.githubusercontent.com/jayl100" width="200px" /> | <img src="https://avatars.githubusercontent.com/jin-lab-x" width="200px" /> |
|                  [@hans0928](https://github.com/hans0928)                  |                  [@jayl100](https://github.com/jayl100)                   |                [@jin-lab-x](https://github.com/jin-lab-x)                 |


---


# 기능 정의

**병원 리스트업**
- 병원 리스트 : 병원명, 병원 종류, 지역, 의료 기기 종류
  - 병원 종류 : 병원의 진료과 and 규모에 따른 분류
  - 의료 기기 : 병원이 보유하고 있는 의료 기기 파악

**병원 상세페이지**
- 병원 상세 정보
- 의료 기기의 현황
- 의료 기기의 현황과 병원 종류에 따른 평균 의료기기의 차이값을 계산하여 부족한 의료기기를 표시