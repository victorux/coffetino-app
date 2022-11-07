import React, { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { cleanCart } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const KEY = "pk_test_51IpKzeJ15susIN9droJU9AQkFpKKJZdurGImzLbCRwzdkdxDPz5TnRrSt3ckLuVdT1uAOaf3hjcHKFaK7eXsQ6Qe00a5Hviybe"


function PayWithStripe({children, amount}) {
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSuccess = () => {
        dispatch(cleanCart());
        navigate("/success", { state: { id: 7, color: 'green' }});
    }
    
    const onToken = (token) => {
        setStripeToken(token)
    } 
    
    const amountPay = Number((amount * 100).toFixed());

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:4000/api/checkout/payment", 
                    {
                        tokenId: stripeToken.id,
                        amount: amountPay,
                    });
                console.log(res.data)
                handleSuccess();
                
                // *** Later I can access state/props thorght useLocation hook *** ///

            } catch (error) {
                console.log(error)
            }
        };
        stripeToken && makeRequest()
    });
    // stripeToken include if payment dont works.

  return (
    <>
        { stripeToken ? (<span>Processing. Please wait...</span>) : (   
            <StripeCheckout
                name="Coffetion Shop"
                billingAddress
                description={`Your Total is ${amount}`}
                amount={amountPay}
                token={onToken}
                stripeKey={KEY}
            >
                {children}
            </StripeCheckout>)
        }
        
    </>
  )
}

export default PayWithStripe
