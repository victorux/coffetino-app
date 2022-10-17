import styled from "styled-components";
import { device } from "../../styles/breakpoints";


export const CardContainer = styled.div`
  margin-top: 40px;
`

export const CardImage = styled.div`
  width: 100%;
  height: 300px;
  background: ${props => `url("${props.img}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  
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

    @media ${device.tablet}{
      font-size: ${props => props.theme.fontSizes._400};
    }
`

export const CardRating = styled.div`
  font-size: ${props => props.theme.fontSizes._400};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  @media ${device.tablet}{
      font-size: ${props => props.theme.fontSizes._300};
    }
`

export const CardPrice = styled.div`
  font-size: ${props => props.theme.fontSizes._400};
  color: ${props => props.theme.colors.gray500};

  @media ${device.tablet}{
      font-size: ${props => props.theme.fontSizes._300};
    }
`

export const Price = styled.span`
  color: ${props => props.theme.colors.black};
  font-weight: 800;
  font-size: ${props => props.theme.fontSizes._500};
  margin-left: 4px;

  @media ${device.tablet}{
      font-size: ${props => props.theme.fontSizes._400};
    }
`