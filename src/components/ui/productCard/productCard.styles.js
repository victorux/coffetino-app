import styled from "styled-components";


export const CardContainer = styled.div`
  margin-top: 40px;
`

export const CardImage = styled.div`
    
`

export const CardBody = styled.div`
  font-family: ${props => props.theme.fonts.ubuntu};
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`

export const CardTitle = styled.h3`
    font-size: ${props => props.theme.fontSizes._500};
    font-family: ${props => props.theme.fonts.ubuntu};
`

export const CardRating = styled.div`
  font-size: ${props => props.theme.fontSizes._400};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`

export const CardPrice = styled.div`
  font-size: ${props => props.theme.fontSizes._400};
  color: ${props => props.theme.colors.gray500};
`

export const Price = styled.span`
  color: ${props => props.theme.colors.black};
  font-weight: 800;
  font-size: ${props => props.theme.fontSizes._500};
  margin-left: 4px;
`