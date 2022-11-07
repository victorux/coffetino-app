import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import axios from "axios";
import styled from "styled-components"
import globalVariables from "../../styles/globalVariables";
import {device} from "../../styles/breakpoints";
import ProductItem from './ProductItem';

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

function ProductsItems({ sort, cat }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://coffetino-server-oruo.vercel.app/api/products/")
        setProducts(res.data);
        setLoading(false)
      } catch (error) {
        setLoading(false);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if(sort === "new"){
      setProducts(
        (prev) => [...prev].sort(function(a, b) {
          return (a.createdAt > b.createdAt) ? -1 : ((a.createdAt < b.createdAt) ? 1 : 0);
      })
      )
    } else if(sort === "asc"){
      setProducts((prev) =>
        [...prev].slice().sort((a,b) => a.price - b.price)
      )
    } else {
      setProducts((prev) =>
        [...prev].sort((a,b) => b.price - a.price)
      )
    }
  }, [sort])

  return (
    <div>
      <motion.div
          initial={{ opacity: 0,}}
          animate={{ opacity: 1,}}
          transition={{ duration: 1 }}
      >
      <StyledProducts>
      
      { loading 
        ? "Loading"
        : products.map(product =>
          
          <ProductItem 
            img={product.img} 
            key={product._id} 
            id={product._id} 
            title={product.title} 
            price={product.price} 
            rating={product.rating} 
          />
          
          )
      }
      
      </StyledProducts>
      </motion.div>
    </div>
  )
}

export default ProductsItems