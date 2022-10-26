import React, { useState, useEffect } from 'react'
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
  Button,
  CardSubscription,
  Cards,
  Discount,
  CardDesc,
  Period,
  PeriodPrice,
  Summary,
  CartButton,
  SummaryInfo,
  SummaryPrice,
  SummaryDetails,
  Description
} from './productInfo.styled'
import star from '../../../assets/icons/star.png'
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

  const handleClick = () => {
    // update cart
    dispatch(
      addProduct({
        ...product,
        quantity,
        sub: sub,
        typeSelected: type
      }
      )
    )
  };

  return (
    <>
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
            <Button name="inc" onClick={handleIncrease}>+</Button>
            <Button name="dec" onClick={handleIncrease}>-</Button>
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
          <CartButton onClick={handleClick}><img src={cartIcon} alt='' /><span>Add to Cart</span></CartButton>
          <SummaryInfo>
            <SummaryPrice>${product.price} / One-time</SummaryPrice>
            <SummaryDetails>Whole Bean, 2 packs,  One-time delivery</SummaryDetails>
          </SummaryInfo>
        </Summary>
      </ProductDetails>
    </MainContainer>
    <TitleOfSection align="left" label="Description" />
    <Description>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Description>
    <PopularSection align="left" />
    </>
  )
}

export default ProductInfo