import React from 'react';
import {useNavigate} from "react-router-dom"

function Shop() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Shopping Page</p>
            <button onClick={() => navigate("/")}>Go To Homepage</button>
        </div>
    );
}

export default Shop;