import {
    FooterBody,
    FooterStyled
} from "./footer.styles.js";
import Blocks from "./blocks.jsx";

function FooterComponent() {
    return (
        <FooterStyled>
            <FooterBody>
                <Blocks />
            </FooterBody>
        </FooterStyled>
    );
}

export default FooterComponent;