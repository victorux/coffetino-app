import React, {useState, useEffect } from "react";
import axios from "axios";

import TitleOfSection from "../titleOfSection";
import ProductItem from "../../ui/productItems/ProductItem";
import styled from "styled-components";
import {device} from "../../styles/breakpoints";

const CardsWrapper = styled.div`
  
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px;
  gap: 40px;

  @media ${device.tablet}{

  }
  
  @media ${device.laptopL}{
    justify-content: space-around;
    align-content: center;
    gap: 50px;
  }

`

function PopularSection({align}) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data.slice(0,5));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    getProducts();
  }, []);

  console.log(products);

    return (
        <div>
            <TitleOfSection align={align} label="Most popular this week"/>
            <CardsWrapper>
                {
                  products.map(product => <ProductItem img={product.img} key={product._id} id={product._id} title={product.title} price={product.price} rating={product.rating} />)
                }
            </CardsWrapper>
        </div>

    );
}

export default PopularSection;