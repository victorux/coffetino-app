import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`

const InputStyled = styled.input`
    width: 100%;
    padding: 20px;
    border: 1px solid ${({theme}) => theme.colors.gray200};
    border-radius: 7px;
    font-size: ${({theme}) => theme.fontSizes._400};
    letter-spacing: 0.75px;
    font-weight: 500;

    :focus {
        outline-color: ${({theme}) => theme.colors.black};
    }
`

const LabelStyled = styled.div`
    width: 100%;
    margin-bottom: 7px;
    color: ${({theme}) => theme.colors.gray400};
    font-size: ${({theme}) => theme.fontSizes._400};
`

function Input({defValue, label, type, handleChange}) {

const [value, setValue] = useState(defValue);

const handleInputChange = (e) => {
    handleChange(e.target.value);
    setValue(e.target.value)
}

  return (
    <Container>
        <div>
            <LabelStyled htmlFor={label}>{label}</LabelStyled>
            <InputStyled 
                id={label}
                value={value}
                maxLength={30}
                type={type}
                onChange={handleInputChange}
            />
        </div>
    </Container>
  )
}

export default Input