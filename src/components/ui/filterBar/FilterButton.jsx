import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.div`
  padding: 12px 20px;
  border: 1px solid ${({theme}) => theme.colors.gray300};
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`

const FilterButton = ({label, icon}) => {
    return (
        <StyledButton>
            { icon ? <><img src={icon} alt={label} width="16px" /> {label}</> : label}
        </StyledButton>
    );
};

export default FilterButton;
