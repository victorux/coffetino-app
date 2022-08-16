import styled from "styled-components";
import globalVariables from "../../styles/globalVariables";


export const Wrapper = styled.div`
  max-width: ${globalVariables.maxWidth};
  margin: 160px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 120px;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  
  flex-direction: ${({align}) =>
    (align === 'left' && 'row') || (align === "right" && "row-reverse") || "row"};
  
`

export const ImageContainer = styled.div`
  img {
    padding: 0;
    margin: 0;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

export const Bubble = styled.div`
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
`

export const SectionTitle = styled.h2`
  font-family: ${({theme}) => theme.fonts.sans};
  font-size: ${({theme}) => theme.fontSizes._900};
  max-width: 600px;
`

export const SectionDescription = styled.p`
  font-family: ${({theme}) => theme.fonts.ubuntu};
  font-weight: 300;
  font-size: ${({theme}) => theme.fontSizes._400};
  max-width: 500px;
  margin-top: 20px;
  letter-spacing: 0.25px;
  line-height: 1.75;
`