import styled from "styled-components";
import globalVariables from "../../styles/globalVariables";
import {device} from "../../styles/breakpoints";


export const Wrapper = styled.div`
  max-width: ${globalVariables.maxWidth};
  margin: 160px auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 120px;
  
  @media ${device.tablet}{
    gap: 60px;
    align-items: flex-start;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 60px;
  
  flex-direction: ${({align}) =>
    (align === 'left' && 'row') || (align === "right" && "row-reverse") || "row"};

  @media ${device.tablet}{
    flex-direction: column;
    gap: 20px;
  }

  @media ${device.laptop}{
    align-items: center;
    gap: 40px;
  }
  
`

export const ImageContainer = styled.div`
  img {
    padding: 0;
    margin: 0;
    
    @media ${device.tablet}{
      display: none;
    }

    @media ${device.laptop}{
      max-height: 400px;
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  
  @media ${device.tablet}{
    gap: 20px;
  }
`

export const Bubble = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes._500};
  font-weight: 700;
  color: #fff;
  
  @media ${device.laptop}{
    width: 40px;
    height: 40px;
  }
`

export const SectionTitle = styled.h2`
  font-family: ${({theme}) => theme.fonts.sans};
  font-size: ${({theme}) => theme.fontSizes._900};
  max-width: 600px;

  @media ${device.tablet}{
    max-width: 100%;
  }
  
`

export const SectionDescription = styled.p`
  font-family: ${({theme}) => theme.fonts.ubuntu};
  font-weight: 300;
  font-size: ${({theme}) => theme.fontSizes._400};
  max-width: 500px;
  margin-top: 20px;
  letter-spacing: 0.25px;
  line-height: 1.75;

  @media ${device.tablet}{
    width: 95%;
  }

  @media ${device.laptopL}{
    width: unset;
  }
`