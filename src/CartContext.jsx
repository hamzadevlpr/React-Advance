import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [item, setItem] = useState([]);


    const addtoCart = (name, disc, price, pImage) => {
        setItem((prevState) => [...prevState, { name, disc, price, pImage }])
    }
    return (
        <CartContext.Provider value={{ addtoCart, item}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
