import React from 'react';
import styled from 'styled-components';
import Cluster from '../components/Cluster'; 
import Filter from '../components/Filter'; 
import { MainTitleWrapper, MainSubTitle, MainTitle, Text } from '../components/StyledText'; // styled-components 가져오기

const clusters = [
    {
        title: "클러스터 1",
        items: ["병원 규모 큼", "기기 보유 대수 많음", "의사 수 많음"]
    }, {
        title: "클러스터 2",
        items: ["병원 규모 중간", "기기 보유 대수 중간", "의사 수 중간"]
    },{
        title: "클러스터 3",
        items: ["병원 규모 적음", "기기 보유 대수 적음", "의사 수 적음"]
    }
];

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

const Home = () => {
    return (
        <section className='main'>
            <MainTitleWrapper>
                <MainSubTitle>전국 병원 특수기기 현황 서비스</MainSubTitle>
                <MainTitle>Medi-Insight</MainTitle>
            </MainTitleWrapper>
            <div className='main-option'>
                <Text>클러스터별로 병원보기</Text>
                <div className='inner'>
                    {clusters.map((c, i) => (<Cluster key={i} title={c.title} items={c.items}/>))}
                </div>
            </div>
            <div className='filter'>
                <Text>일반필터링</Text>
                {filters.map((c, i) => (<Filter key={i} title={c.title} items={c.items}/>))}
            </div>
            <btn>검색</btn>
        </section>
    );
};

export default Home;
