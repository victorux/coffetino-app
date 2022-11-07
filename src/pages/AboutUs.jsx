import React from 'react'
import styled from 'styled-components'
import globalVariables from "../components/styles/globalVariables"
import img1 from "../assets/img/coffe-break.jpg"
import Button from '../components/button'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`

    max-width: ${globalVariables.maxWidth};
    padding: 30px 20px 0 20px;
    margin: 0 auto;

    h1 {
        margin-bottom: 20px;
        text-align: center;
    }

    h2 {
        margin-top: 40px;
        margin-bottom: 10px;
    }

    p {
        line-height: 1.7;
        max-width: 900px;
        margin-bottom: 40px;
    }
    ul {
        margin-top: 10px;
    }
    ul li{
        margin-left: 20px;
        line-height: 1.7;
    }
    img {
        width: 100%;
        margin: 40px 0;
    }
`

function AboutUs() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products")
    };

    return (
    <Wrapper>
        <h1>About Us</h1>
        <img src={img1} alt="" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Button label="Go to shopping" runFunc={handleClick} />
    </Wrapper>
    )
}

export default AboutUs;