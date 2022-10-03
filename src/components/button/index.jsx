import {
    StyledButton
} from "./button.styles";
import {useNavigate} from "react-router-dom";

function Button({label, to}){
    const navigate = useNavigate();
    return(
        <StyledButton onClick={() => navigate(to)}>{label}</StyledButton>
    )
}

export default Button;