import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { device } from '../../styles/breakpoints'
// import { ProductDetails } from '../productInfo/productInfo.styled'
import { removeProduct, changeSelectedType, changeDeliveryType, changeQuantity } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';


const Item = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray200};
    margin-top: 40px;
`

const ItemImage = styled.div`
    max-width: 84px;
    flex-shrink: 0;

    img {
        width: 100%;
        height: auto;
    }
`

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

const DescItems = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-end;

    select {
        text-transform: capitalize;
    }


    @media ${ device.laptopL} {
        gap: 20px;
        flex-wrap: wrap;
    }

    @media ${ device.tablet} {
        gap: 10px;
        flex-wrap: wrap;
    }
`

const DescItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    select,
    input {
        padding: 0.4rem 0.2rem;
        border-radius: 7px;
        border: 1px solid ${({theme}) => theme.colors.gray400};
        font-size: ${({theme}) => theme.fontSizes._400};
        color: ${({theme}) => theme.colors.black};
        cursor: pointer;
        background-color: #fff;
    }

    input {
        max-width: 50px;
    }

    @media ${device.mobileL}{
        flex: 1 1 100%;
    }
`

const Title = styled.h3`
    font-size: ${({theme}) => theme.fontSizes._500};
    font-weight: 500;
    letter-spacing: 0.04rem;
`

const Subtitle = styled.span`
    font-size: ${({theme}) => theme.fontSizes._300};
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray400};
    letter-spacing: 0.025rem;
`

const DeleteButton = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    border: none;
    padding: 0.6rem 1.2rem;
    color: #fff;
    border-radius: 7px;
    font-size: ${({theme}) => theme.fontSizes._400};
    cursor: pointer;
    transition: .22s all ease;

    :hover {
        background-color: ${({theme}) => theme.colors.gray600};
    }

    @media ${device.mobileL}{
        flex: 1 1 100%;
        text-align: center;
    }

`

const ItemPrice = styled.span`
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fontSizes._500};
    margin-left: 7px;
`


function CartItem({product}) {

const [quantity, setQuantity] = useState(null);

useEffect(()=> {
    setQuantity(product.quantity);
}, [product]);

const dispatch = useDispatch();

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

const handleClickAndDelete = () => {
    dispatch(
        removeProduct(product._id)
    );
}

const handleTypeChange = (e) => {
    dispatch(
        changeSelectedType(
            {
                id: product._id,
                type: e.target.value
            }
    ))
}

const handleDeliveryChange = (e) => {
    dispatch(
        changeDeliveryType(
            {
                id: product._id,
                sub: e.target.value
            }
    ))
}

const handleQtyChange = (e) => {
    
    const value = Number(e.target.value);
    console.log(value)

    if(value <= 0 ) {
        setQuantity(1)
        e.target.value = 1;
        dispatch(
            changeQuantity(
                {
                    id: product._id,
                    qty: 1
                }
        ))
    } else {
        setQuantity(value)
        dispatch(
            changeQuantity(
                {
                    id: product._id,
                    qty: value
                }
        ))
    }

    
}

  return (
    <Item>
        <ItemImage>
            <img alt="" src={product.img} />
        </ItemImage>
        <ItemContent>
            <Title>{product.title}</Title>
            <DescItems>
                <DescItem>
                    <Subtitle>Type</Subtitle>
                    <select defaultValue={product.typeSelected} onChange={handleTypeChange}>
                        {
                            product.type.map((type, i) =>  
                                <option 
                                    key={'type'+ i} 
                                    value={type}
                                >
                                    {type}
                                </option>)
                        }                       
                    </select>
                </DescItem>
                <DescItem>
                    <Subtitle>Delivery</Subtitle>
                    <select defaultValue={product.sub} onChange={handleDeliveryChange}>
                        {
                            ['onetime', 'quarterly', 'monthly'].map((item, i) =>  
                                <option 
                                    key={'sub'+ i} 
                                    value={item}
                                >
                                    {item}
                                </option>)
                        }                       
                    </select>
                </DescItem>
                <DescItem>
                    <Subtitle>Qty</Subtitle>
                    <input onChange={handleQtyChange} type="number" placeholder="qty" defaultValue={quantity} />
                </DescItem>
                <DeleteButton onClick={handleClickAndDelete}>Delete</DeleteButton>
            </DescItems>
            <div><Subtitle>Price:</Subtitle><ItemPrice>{formatter.format(product.price)}</ItemPrice></div>
        </ItemContent>
    </Item>
  )
}

export default CartItem