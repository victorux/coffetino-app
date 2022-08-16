import {Container, Title, Subtitle, ImagesContainer} from  "./hero.styles.js";
import Button from "../../button";
import img1 from '../../../assets/products/001.jpg'
import img2 from '../../../assets/products/002.jpg'
import img3 from '../../../assets/products/003.jpg'
import img4 from '../../../assets/products/004.jpg'
import img5 from '../../../assets/products/005.jpg'
import img6 from '../../../assets/products/006.jpg'


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