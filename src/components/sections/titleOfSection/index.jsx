import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({align}) =>
          (align === 'left' && 'flex-start') ||
          (align === 'center' && 'center')
};
  margin: 0 auto;
  width: 100%;
`

const TitleLabel = styled.h2`
    font-size: ${props => props.theme.fontSizes._900};
    font-family: ${props => props.theme.fonts.sans};
    display: block;
    position: relative;
    font-weight: 400;

    @media ${device.tablet} {
        font-size: ${({theme}) => theme.fontSizes._700};
    }
  
    &:after{
        content: "";
        display: block;
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.gray300};
    }
`

function TitleOfSection({align, label}) {
    return (
        <TitleContainer align={align}>
           <TitleLabel>{label}</TitleLabel>
        </TitleContainer>
    );
}

export default TitleOfSection;