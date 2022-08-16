import styled from 'styled-components';


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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  overflow: hidden;
`