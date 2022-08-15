import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`
const Title = styled.h1`
  font-family: ${({theme}) => theme.fonts.sans};
  text-align: center;
  margin-top: 120px;
  letter-spacing: 1.5px;
  padding: 0 20px;
`

const Subtitle = styled.p`
  font-family: ${({theme}) => theme.fonts.ubuntu};
  font-weight: 400;
  letter-spacing: 0.25px;
  text-align: center;
  color: ${({theme}) => theme.colors.regular};
  font-size: 1rem;
  line-height: 1.8;
  max-width: 450px;
  padding: 0 20px;
`

function HeroSection() {
  return (
    <Container>
      <Title>Your Favorite Coffe to Your Door</Title>
      <Subtitle>Scrambled it to make a type specimen book. It has survived not only five centuries</Subtitle>
    </Container>
  )
}

export default HeroSection