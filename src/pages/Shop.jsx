import React from 'react';
import FilterBar from "../components/ui/filterBar";
import styled from "styled-components"
import globalVariables from "../components/styles/globalVariables";
import ProductCard from "../components/ui/productCard";
import img1 from "../assets/products/popular/starbucks.jpg";
import {device} from "../components/styles/breakpoints";

const StyledProducts = styled.div`
  max-width: ${globalVariables.maxWidth};
  padding: 0 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  grid-gap: 60px;
  
  @media ${device.laptopL}{
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptop}{
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.tablet}{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  @media ${device.mobileL}{
    grid-template-columns: repeat(1, 1fr);
  }
`

function Shop() {
    return (
        <div>
            <FilterBar />
            <StyledProducts>
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
                <ProductCard imgUrl={img1} alt="" title="Starbucks - Costa Rica" price="30.99" avgRating="4.88" reviews="18" />
            </StyledProducts>
        </div>
    );
}

export default Shop;