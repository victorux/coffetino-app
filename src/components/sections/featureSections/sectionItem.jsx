import {
    ItemContainer,
    ImageContainer,
    ContentContainer,
    SectionTitle,
    Bubble,
    SectionDescription,

} from "./landingSection.styles"

function SectionItem({src, alt, align, num, title, desc}) {
    return (
        <ItemContainer align={align}>
            <ImageContainer>
                <img src={src} alt={alt} />
            </ImageContainer>
            <ContentContainer>
                <Bubble>{num}</Bubble>
                <div>
                    <SectionTitle>{title}</SectionTitle>
                    <SectionDescription>{desc}</SectionDescription>
                </div>
            </ContentContainer>
        </ItemContainer>
    );
}

export default SectionItem;