import TitleOfSection from "../titleOfSection";
import styled from "styled-components";

import logo1 from "../../../assets/logos/01.svg";
import logo2 from "../../../assets/logos/02.svg";
import logo3 from "../../../assets/logos/03.svg";
import logo4 from "../../../assets/logos/04.svg";
import logo5 from "../../../assets/logos/05.svg";
import logo6 from "../../../assets/logos/06.svg";
import logo7 from "../../../assets/logos/07.svg";

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 0 20px;
  margin: 120px auto;
`

const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-top: 100px;
  overflow: hidden;
  
  img {
    opacity: 0.4;
    transition: all 0.22s ease;
    
    &:hover {
      opacity: 1;
    }
  }
`

function LogoSection() {
    return (
        <Wrapper>
            <TitleOfSection align="center" label="Our suppliers" />
            <LogosContainer>
                <img src={logo1} alt=""/>
                <img src={logo2} alt=""/>
                <img src={logo3} alt=""/>
                <img src={logo4} alt=""/>
                <img src={logo5} alt=""/>
                <img src={logo6} alt=""/>
                <img src={logo7} alt=""/>
            </LogosContainer>
        </Wrapper>
    );
}

export default LogoSection;