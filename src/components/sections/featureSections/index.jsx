import {Wrapper} from "./landingSection.styles";
import SectionItem from "./sectionItem";

import img1 from "../../../assets/img/delivery.jpg"
import img2 from "../../../assets/img/milk.jpg"
import img3 from "../../../assets/img/coffee.jpg"

function FeatureSections(){
    return (
        <Wrapper>
            <SectionItem
                src={img1}
                alt="Delivery"
                align="left"
                num="1"
                title="Free delivery to your door."
                desc="Fresh coffee delivered directly to your door, at schedule that suits you. Free guaranteed on all products."
            />
            <SectionItem
                src={img2}
                alt="Cancel anytime"
                align="right"
                num="2"
                title="Cancel anytime"
                desc="You can cancel anytime, no charges applied."
            />
            <SectionItem
                src={img3}
                alt="Coffee brands"
                align="left"
                num="3"
                title="20+ Coffee brands"
                desc="We bring fresh coffee from all over the world and have a wide range of brands, over 20+"
            />

        </Wrapper>
    )
}

export default FeatureSections;