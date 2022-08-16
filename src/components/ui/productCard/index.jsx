import {
    CardContainer,
    CardImage,
    CardBody,
    CardTitle,
    CardRating,
    CardPrice,
    Price
} from "./productCard.styles.js";
import star from "../../../assets/icons/star.png"


function ProductCard({title, avgRating, reviews, price, imgUrl, alt}) {
    return (
        <CardContainer>
            <CardImage><img src={imgUrl} alt={alt} /></CardImage>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardRating><img src={star} alt="" />{avgRating} ({reviews})</CardRating>
                <CardPrice>From: <Price>€{price}</Price></CardPrice>
            </CardBody>
        </CardContainer>
    );
}

export default ProductCard;