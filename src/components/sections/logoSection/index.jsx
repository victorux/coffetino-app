import TitleOfSection from "../titleOfSection";
import styled from "styled-components";

import logo1 from "../../../assets/logos/01.svg";
import logo2 from "../../../assets/logos/02.svg";
import logo3 from "../../../assets/logos/03.svg";
import logo4 from "../../../assets/logos/04.svg";
import logo5 from "../../../assets/logos/05.svg";
// import logo6 from "../../../assets/logos/06.svg";
import logo7 from "../../../assets/logos/07.svg";
import {device} from "../../styles/breakpoints";

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 0 20px;
  margin: 120px auto;
`

const StyledLogosGrid = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: 100px;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 1rem;
  
  @media ${device.laptopL}{
    justify-content: space-evenly;
    grid-template-columns: auto auto auto auto;
  }

  @media ${device.laptop}{
    grid-template-columns: auto auto auto;
  }

  @media ${device.tablet}{
    grid-template-columns: auto auto;
  }

  > div {
    padding: 1rem;
    display: grid;
    place-items: center;
    &:hover {
      opacity: 0.7;
      transition: all 0.33s ease-in-out;
    }
    &::before {
      content: "";
      display: block;
      padding-bottom: 100%;
      grid-area: 1 / 1 / 2 / 2;
    }

    img {
      user-select: none;
      max-width: 170px;
      grid-area: 1 / 1 / 2 / 2;
    }
    
  }
`

function LogoSection() {
    return (
        <Wrapper>
            <TitleOfSection align="center" label="Our suppliers" />
            <StyledLogosGrid>
                <div><img src={logo1} alt=""/></div>
                <div><img src={logo2} alt=""/></div>
                <div><img src={logo3} alt=""/></div>
                <div><img src={logo4} alt=""/></div>
                <div><img src={logo5} alt=""/></div>
                <div><img src={logo7} alt=""/></div>
            </StyledLogosGrid>
        </Wrapper>
    );
}

export default LogoSection;