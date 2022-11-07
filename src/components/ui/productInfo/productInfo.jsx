import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { ProductDetails, 
  ImageContainer, 
  MainContainer, 
  ProductTitle,
  ProductRating,
  LabelStyled,
  StyledSection,
  Select,
  QtyPacks,
  Input,
  StyledButton,
  CardSubscription,
  Cards,
  Discount,
  CardDesc,
  Period,
  PeriodPrice,
  Summary,
  SummaryInfo,
  SummaryPrice,
  SummaryDetails,
  Description
} from './productInfo.styled'
import star from '../../../assets/icons/star.png';
import Button from '../../button/index';
import cartIcon from '../../../assets/icons/shopping-cart-white.svg'
import TitleOfSection from '../../sections/titleOfSection'
import PopularSection from '../../sections/popularSection'
import { addProduct } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';

function ProductInfo() {

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState(null);
  const [sub, setSub] = useState('onetime');

  
  const location = useLocation();
  const id =  location.pathname.split('/')[2];
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get('/api/products/find/' + id)
        setProduct(res.data);
        setType(res.data.type[0])
      } catch(err) {}}
    getProduct();
  }, [id]);


  const handleIncrease = (e) => {
    const current = Number(quantity);
    if (e.target.name === "inc") {
      if(quantity >= 99){
        setQuantity(99)
      } else {
        setQuantity(current + 1)
      }
    } else {
      if(quantity > 1) {
        setQuantity(current - 1)
      } else {
        setQuantity(1)
      }
    }
  }

  const handleQtyChange = e => {
    if(e.target.value.length > 2) {
      setQuantity(e.target.value.slice(0, 2))
    } else if(e.target.value.charAt(0) === '0'){
      setQuantity(e.target.value.substring(1));
    } else {
      setQuantity(e.target.value)
    }
  }

  const handleSubscription = e => {
    setSub(e.currentTarget.id)
  }

  const handleClick = async () => {
    // update cart
    dispatch(
      addProduct({
        ...product,
        quantity,
        sub: sub,
        typeSelected: type
      }
      )
    );
    // then navigate to cart
    navigate("/cart")
  };

  return (
    <>
    <motion.div
      initial={{ opacity: 0, translateY: -70 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8 }}
    >
    <MainContainer>
      <ImageContainer>
        <img src={product.img} alt="" />
      </ImageContainer>
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductRating>Rating <img src={star} alt="" /><span>{product.rating}</span></ProductRating>
        <StyledSection>
          <LabelStyled>Coffe Type</LabelStyled>
          <Select onChange={(e) => setType(e.target.value)}>
              {
                product.type?.map(t => <option key={t} value={t}>{t}</option>)
              }
          </Select>
        </StyledSection>
        <StyledSection>
          <LabelStyled>Packs per shipment</LabelStyled>
          <QtyPacks>
            <Input name="qty" value={quantity} type="number" onChange={handleQtyChange}  min="1" max="99" />
            <StyledButton name="inc" onClick={handleIncrease}>+</StyledButton>
            <StyledButton name="dec" onClick={handleIncrease}>-</StyledButton>
          </QtyPacks>
        </StyledSection>
        <StyledSection>
          <LabelStyled>How often should the deliveries come?</LabelStyled>
          <Cards>
          <CardSubscription id="onetime" onClick={handleSubscription} sub={sub}>
            <CardDesc>
              <Period>One Time</Period>
              <PeriodPrice>{product.price}</PeriodPrice>
            </CardDesc>
          </CardSubscription>
          <CardSubscription id="quarterly" onClick={handleSubscription} sub={sub}>
            <CardDesc>
              <Period>Quarterly</Period>
              <PeriodPrice>$31.99</PeriodPrice>
            </CardDesc>
              <Discount><span>-10% discount</span></Discount>
          </CardSubscription>
          <CardSubscription id="monthly" onClick={handleSubscription} sub={sub}>
            <CardDesc>
              <Period>Monthly</Period>
              <PeriodPrice>$27.99</PeriodPrice>
            </CardDesc>
              <Discount><span>-20% discount</span></Discount>
          </CardSubscription>
          </Cards>
        </StyledSection>
        <hr  style={{height:'1px',borderWidth:0, color:'gray',backgroundColor:'#DFDFDF', margin: '30px 0'}} />
        <Summary>
          <Button runFunc={handleClick} label="Add to Cart" icon={cartIcon} />
          <SummaryInfo>
            <SummaryPrice>${Number(product.price * quantity).toFixed(2)} / {sub}</SummaryPrice>
            <SummaryDetails>{`${type}, ${quantity} packs,  ${sub} delivery`}</SummaryDetails>
          </SummaryInfo>
        </Summary>
      </ProductDetails>
    </MainContainer>
    <TitleOfSection align="left" label="Description" />
    <Description>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Description>
    <PopularSection align="left" />
    </motion.div>
    </>
  )
}

export default ProductInfo