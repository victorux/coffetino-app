import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        qty: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const itemInCart = state.products.find((item) => item._id === action.payload._id);
            if(itemInCart){
                itemInCart.quantity += action.payload.quantity;
                itemInCart.total = itemInCart.quantity * itemInCart.price;
                itemInCart.sub = action.payload.sub;
                itemInCart.typeSelected = action.payload.typeSelected;
            } else {
                state.qty += 1;
                state.products.push({
                    ...action.payload, 
                    total: action.payload.quantity * action.payload.price,
                    typeSelected: action.payload.typeSelected,
                });
            }
        },

        removeProduct: (state, action) => {
            const removeProduct = state.products.filter((product) => product._id !== action.payload);
            state.products = removeProduct;
            state.qty -= 1;
        },

        changeSelectedType: (state, action) => {
            const itemInCart = state.products.find((item) => item._id === action.payload.id);
            if(itemInCart) {
                itemInCart.typeSelected = action.payload.type;
            }
        },

        changeDeliveryType: (state, action) => {
            const itemInCart = state.products.find((item) => item._id === action.payload.id);
            if(itemInCart) {
                itemInCart.sub = action.payload.sub;
            }
        },

        changeQuantity: (state, action) => {
            const itemInCart = state.products.find((item) => item._id === action.payload.id);
            if(itemInCart) {
                itemInCart.quantity = action.payload.qty;
                itemInCart.total = itemInCart.quantity * itemInCart.price;
            }
        }
    }
});


export const { 
    addProduct, 
    removeProduct, 
    changeSelectedType,
    changeDeliveryType,
    changeQuantity
} = cartSlice.actions;

export default cartSlice.reducer;