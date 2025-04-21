import Filter from '../components/Filter'; 
import { MainTitleWrapper, MainSubTitle, MainTitle, Text, Btn } from '../components/StyledText'; // styled-components 가져오기

const filters = [
    {
        title: "지역",
        items: ["병원 규모 큼", "기기 보유 대수 많음", "의사 수 많음"]
    }, {
        title: "보유기기",
        items: ["MRI", "CT", "혈관", "투석", "뇌"]
    },{
        title: "병원종류",
        items: ["상급병원", "종합병원"]
    },{
        title: "클러스터",
        items: ["1", "2", "3"]
    }
];

const HospitalsFilter = () => {
    return (
        <section className='hospitals-filter'>
            <MainTitleWrapper>
                <MainTitle>Hospitals Filter</MainTitle>
            </MainTitleWrapper>
            <div className='filter'>
                {filters.map((c, i) => (<Filter key={i} title={c.title} items={c.items}/>))}
            </div>
            <Btn>확인</Btn>
        </section>
    )
}

export default HospitalsFilter;