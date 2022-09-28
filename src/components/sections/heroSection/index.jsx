import {Container, Title, Subtitle, ImagesContainer} from  "./hero.styles.js";
import { motion } from "framer-motion"
import Button from "../../button";
import img1 from '../../../assets/products/001.jpg'
import img2 from '../../../assets/products/002.jpg'
import img3 from '../../../assets/products/003.jpg'
import img4 from '../../../assets/products/004.jpg'
import img5 from '../../../assets/products/005.jpg'
import img6 from '../../../assets/products/006.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';


function HeroSection() {
  return (
     <> 
        <motion.div
          initial={{ opacity: 0, translateY: -70 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <Title>Your favorite coffee to you door</Title>
            <Subtitle>Scrambled it to make a type specimen book. It has survived not only five centuries</Subtitle>
            <Button label="Browse coffee now" />
          </Container>
        </motion.div>
        <ImagesContainer>
          <Swiper
            speed={9000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            spaceBetween={40}
            loop= {true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                speed: 8000
              },
              760: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4
              }
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>

          </Swiper>
  
        </ImagesContainer>
     </>
  )
}

export default HeroSection