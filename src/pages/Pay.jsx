import React, { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const KEY = "pk_test_51IpKzeJ15susIN9droJU9AQkFpKKJZdurGImzLbCRwzdkdxDPz5TnRrSt3ckLuVdT1uAOaf3hjcHKFaK7eXsQ6Qe00a5Hviybe"


function Pay() {
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token)
    } 

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:4000/api/checkout/payment", 
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    });
                console.log(res.data)
                navigate("/success", { state: { id: 7, color: 'green' }});
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
                description="Your Total is $20"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button>Pay</button>
            </StripeCheckout>)
        }
        
    </>
  )
}

export default Pay
