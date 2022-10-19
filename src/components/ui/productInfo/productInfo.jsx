import React, { useState } from 'react'
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

function ProductInfo() {
  const [qtyPacks, setQtyPacks] = useState(1);
  const [sub, setSub] = useState('onetime');

  const handleIncrease = (e) => {
    const current = Number(qtyPacks);
    if (e.target.name === "inc") {
      if(qtyPacks >= 99){
        setQtyPacks(99)
      } else {
        setQtyPacks(current + 1)
      }
    } else {
      if(qtyPacks > 1) {
        setQtyPacks(current - 1)
      } else {
        setQtyPacks(1)
      }
    }
  }

  const handleQtyChange = e => {
    if(e.target.value.length > 2) {
      setQtyPacks(e.target.value.slice(0, 2))
    } else if(e.target.value.charAt(0) === '0'){
      setQtyPacks(e.target.value.substring(1));
    } else {
      setQtyPacks(e.target.value)
    }
  }

  const handleSubscription = e => {
    setSub(e.currentTarget.id)
  }

  return (
    <>
    <MainContainer>
      <ImageContainer>
        <img src="https://i.ibb.co/T84BYrd/cb-lavazza-1000g-tierra-planet-0001-1.jpg" alt="" />
      </ImageContainer>
      <ProductDetails>
        <ProductTitle>Tierra Organic - Lavazza</ProductTitle>
        <ProductRating>Rating <img src={star} alt="" /><span>4.68</span></ProductRating>
        <StyledSection>
          <LabelStyled>Coffe Type</LabelStyled>
          <Select>
            <option value="beans">Whole Beans</option>
            <option value="pouder">Pouder</option>
          </Select>
        </StyledSection>
        <StyledSection>
          <LabelStyled>Packs per shipment</LabelStyled>
          <QtyPacks>
            <Input name="qty" value={qtyPacks} type="number" onChange={handleQtyChange}  min="1" max="99" />
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
              <PeriodPrice>$34.99</PeriodPrice>
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
          <CartButton><img src={cartIcon} alt='' /><span>Add to Cart</span></CartButton>
          <SummaryInfo>
            <SummaryPrice>$70.99 / One-time</SummaryPrice>
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