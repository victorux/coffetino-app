import {FooterBlock, InputContainer, ListLink, ListTitle} from "./footer.styles.js";

function Blocks() {
    return (
        <>
            <FooterBlock>
                <ListTitle>Contacts</ListTitle>
                <ListLink href="" title="">hello@coff.com</ListLink>
                <ListLink href="" title="">+1 916 277 4912</ListLink>
                <ListLink href="" title="">1879 Pearl Street, CA, 95817</ListLink>
            </FooterBlock>
            <FooterBlock>
                <ListTitle>Company</ListTitle>
                <ListLink href="" title="">Our story</ListLink>
                <ListLink href="" title="">Shipping</ListLink>
                <ListLink href="" title="">Privacy policy</ListLink>
            </FooterBlock>
            <FooterBlock>
                <ListTitle>Follow Us</ListTitle>
                <ListLink href="" title="">Facebook</ListLink>
                <ListLink href="" title="">Instagram</ListLink>
                <ListLink href="" title="">Twitter</ListLink>
            </FooterBlock>
            <FooterBlock>
                <ListTitle>Subscribe to newsletter</ListTitle>
                <NewsLetter />
            </FooterBlock>
        </>
    );
}

function NewsLetter(){
    return (
        <InputContainer>
            <input type="email" placeholder="Your email address" />
            <button onClick={() => console.log('Signup Clicked')}>Sign Up</button>
        </InputContainer>
    )
}

export default Blocks;