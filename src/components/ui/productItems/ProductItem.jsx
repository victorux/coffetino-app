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
import { Link } from "react-router-dom"


function ProductItem({id, img, title, price, rating}) {


    return (
        <>
            <Link to={`/product/${id}`}>
            <CardContainer key={id}>
                <CardImage img={img} />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardRating><img src={star} alt="" />{rating}</CardRating>
                    <CardPrice>From: <Price>€{price}</Price></CardPrice>
                </CardBody>
            </CardContainer>
            </Link>
        </>
    );
}

export default ProductItem;