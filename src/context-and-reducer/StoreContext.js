import { createContext, useReducer } from "react";
import reducer, {initialState} from "./reducer"

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToBasket = (product) => {
        const isProductInBasket = state.products.some(item => item.id === product.id);
        
        if (!isProductInBasket) {
            const updatedBasket = [...state.products, product];
            updatePrice(updatedBasket);
            dispatch({
                type: "add",
                payload: updatedBasket
            });
        }
    }

    const removeFromBasket = (product) => {
                const updateBasket = state.products.filter
                ((currentProduct) => currentProduct.id !== product.id);
        
                updatePrice(updateBasket);
        
                dispatch({
                    type: "remove",
                    payload: updateBasket
                })
            } 

    const updatePrice = (products) => {
                let total = 0;
                products.forEach(product => {
                    total += product.price
                })
        
                dispatch({
                    type: "update price",
                    payload: total
                })
            }

    const value = {
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket,
    }

    return <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
}

export const StoreContext = createContext();
