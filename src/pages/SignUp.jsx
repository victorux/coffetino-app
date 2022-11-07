import React from 'react'
import styled from 'styled-components';
import Input from '../components/ui/auth/Input';
// Components
import UserAuth from '../components/ui/auth/UserAuth';
import Button from '../components/button/index'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const P = styled.p`
    color: ${({theme}) => theme.colors.gray400};
    text-align: center;
`
const Link = styled.a`
    color: ${({theme}) => theme.colors.primary};
`

function SignUp() {
  return (
    <UserAuth label="Sign Up">
      <Container>
        <Input defValue="user2022" label="Your Username" type="username" />
        <Input defValue="user2022@gmail.com" label="Your Email" type="email" />
        <Input defValue="user2022@gmail.com" label="Enter Password" type="password" />
        <Button label="Sign Up" />
        <P>Are you have an account already? <Link href='/signin'>Sign In</Link></P>
      </Container>
    </UserAuth>
  )
}

export default SignUp