

import styled from 'styled-components';
import Button from "../../button";

import img1 from '../../../assets/products/001.jpg'
import img2 from '../../../assets/products/002.jpg'
import img3 from '../../../assets/products/003.jpg'
import img4 from '../../../assets/products/004.jpg'
import img5 from '../../../assets/products/005.jpg'
import img6 from '../../../assets/products/006.jpg'

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
const ImagesContainer=styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  overflow: hidden;
`

function HeroSection() {
  return (
     <>
        <Container>
          <Title>Your favorite coffee to you door</Title>
          <Subtitle>Scrambled it to make a type specimen book. It has survived not only five centuries</Subtitle>
          <Button label="Browse coffee now" />
        </Container>
        <ImagesContainer>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
        </ImagesContainer>
     </>
  )
}

export default HeroSection