import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Input from '../components/ui/auth/Input';
// Components
import UserAuth from '../components/ui/auth/UserAuth';
import Button from '../components/button/index'
import { login } from '../redux/apiCalls';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    span {
        color: ${({theme}) => theme.colors.primary};
        cursor: pointer;
    }
`
const P = styled.p`
    color: ${({theme}) => theme.colors.gray400};
    text-align: center;
`
const Link = styled.a`
    color: ${({theme}) => theme.colors.primary};
`

const StyledError = styled.p`
    color: red;
    text-align: center;
`

function SignIn() {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("123456");

    const dispatch = useDispatch();

    const handleUsername = (usr) => {
        setUsername(usr);
    };

    const handlePassword = (pw) => {
        setPassword(pw);
    };

const handleClick = (e) => {
    login(dispatch, {username, password});
}

const error = useSelector((state) => state.user.error)

  return (
    <UserAuth label="Sign In">
        <Container>
            <Input handleChange={handleUsername} defValue={username} label="Email" type="email" />
            <InputWrapper>
                <Input handleChange={handlePassword} defValue={password} label="Password" type="password" />
                <span>Forgot your password?</span>
            </InputWrapper>
            <Button runFunc={handleClick} label="Sign In" />
            {error && <StyledError>Something went wrong...</StyledError>}
            <P>Don't have an account? <Link href='/signup'>Sign Up</Link></P>
        </Container>
    </UserAuth>
  )
}

export default SignIn