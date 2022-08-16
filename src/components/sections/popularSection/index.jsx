import TitleOfSection from "../titleOfSection";
import ProductCard from "../../ui/productCard";
import styled from "styled-components";

import img1 from "../../../assets/products/popular/starbucks.jpg"
import img2 from "../../../assets/products/popular/earlybird.jpg"
import img3 from "../../../assets/products/popular/lavaza.jpg"
import img4 from "../../../assets/products/popular/mincoffe.jpg"

const CardsWrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  gap: 40px;

`

function PopularSection() {
    return (
        <CardsWrapper>
            <TitleOfSection align="center" />
            <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
            <ProductCard imgUrl={img2} alt="" title="Earlybird - filter caffe" price="30.99" avgRating="4.88" reviews="18" />
            <ProductCard imgUrl={img3} alt="" title="LavAza - eco caps" price="30.99" avgRating="4.88" reviews="18" />
            <ProductCard imgUrl={img4} alt="" title="Mint - coffee" price="30.99" avgRating="4.88" reviews="18" />
        </CardsWrapper>
    );
}

export default PopularSection;