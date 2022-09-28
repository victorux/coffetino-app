import styled from 'styled-components';
import {device} from '../../styles/breakpoints';


export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`
export const Title = styled.h1`
  font-family: ${({theme}) => theme.fonts.sans};
  text-align: center;
  margin-top: 120px;
  letter-spacing: 1.5px;
  padding: 0 20px;
  
  @media ${device.tablet}{
    font-size: ${({theme}) => theme.fontSizes._800};
    margin-top: 50px;
    letter-spacing: 0.5px;
    max-width: 420px !important;
  }

  @media ${device.laptop}{
    max-width: 530px;
    margin-top: 80px;
    font-size: ${({theme}) => theme.fontSizes._900};
  }
`
export const Subtitle = styled.p`
  font-family: ${({theme}) => theme.fonts.ubuntu};
  font-weight: 400;
  letter-spacing: 0.25px;
  text-align: center;
  color: ${({theme}) => theme.colors.regular};
  font-size: 1rem;
  line-height: 1.8;
  max-width: 450px;
  padding: 0 20px;
`
export const ImagesContainer=styled.div`
  margin-top: 120px;
  width: 100%;
`