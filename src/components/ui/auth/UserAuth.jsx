import React from 'react'
import styled from 'styled-components'
import globalVariables from "../../styles/globalVariables"
import bg from "../../../assets/img/coffe-background.svg"

const Wrapper = styled.div`
  max-width: ${globalVariables.maxWidth};
  padding: 30px 20px 30px 20px;
  margin: 0 auto;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 50px white;
`

const Card = styled.div`
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 10px 19px 35px 0 rgba(224,224,224,0.50);
  border-radius: 30px;
  max-width: 500px;
  padding: 70px;
`

const CardTitle = styled.h1`
  font-size: ${({theme}) => theme.fontSizes._800};
  font-family: ${({theme}) => theme.fonts.sans};
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 40px;
`

function UserAuth(props) {
  return (
    <Wrapper>
      <Card>
        <CardTitle>{props.label}</CardTitle>
        {props.children}
      </Card>
    </Wrapper>
  )
}

export default UserAuth