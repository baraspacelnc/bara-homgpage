import Layout from 'components/common/Layout'
import styled from 'styled-components'

const ExpertPage = () => (
  <Layout title="전문가 모집" description="심바 전문가 모집">
    <Container>
      <h1>전문가 모집</h1>
      {/* 여기에 전문가 모집 페이지 내용을 추가하세요 */}
    </Container>
  </Layout>
)

export default ExpertPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1296px;
  min-width: 360px;
  width: 100%;
  margin: 0 auto;
  padding: 60px;
`