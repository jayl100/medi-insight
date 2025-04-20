
import { MainTitleWrapper, MainTitle, Table } from '../components/StyledText'; // styled-components 가져오기

const Hospitals = () => {
    return (
        <section className='hospitals-filter'>
            <MainTitleWrapper>
                <MainTitle>Hospitals</MainTitle>
            </MainTitleWrapper>
            <Table>
                <div className='total-wrapper'>
                    <p className='total'>총 110개</p>
                    <p>필터링 버튼</p>
                </div>             
            </Table>
        </section>
    )
}

export default Hospitals;