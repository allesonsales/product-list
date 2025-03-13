import { useState, useEffect, useContext, createContext } from "react";


export const combinedContext = createContext()

const Provider = ({children}) => {
    const [item, setItem] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [countItem, setCountItem] = useState(1);
    const [buy, setBuy] = useState(false);

    useEffect(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const formated = data.map(item => ({
                ...item,
                name: item.name,
                category: item.category,
                price: Number(item.price).toFixed(2).replace('.', ','),
                thumbnail: item.image.thumbnail,
                mobile: item.image.mobile,
                desktop: item.image.desktop,
                tablet: item.image.tablet
            }))
            setItem(formated)
        })
        .catch(error => console.error("Erro ao carregar:", error ))
    }, [])

    const addCart = (newItem) => {
        const onCart = cartItems.some(cartItem => cartItem.name === newItem.name);
        
        if(onCart) {
            setCartItems(prevCartItems => 
                prevCartItems.map(item => 
                    item.name === newItem.name 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ))
        } else {
            setCartItems(prevCartItems => [
                ...prevCartItems, 
                { ...newItem, quantity: 1 }
            ]);
        }
        setCartCount(cartCount + 1);
    }
    
    const removeItem = (name) => {
        const itemToRemove = cartItems.find(item => item.name === name);
        if(itemToRemove.quantity === 1) {
            setCartItems(prevCartItems => prevCartItems.filter(item =>item.name !== name))
        } else {
            setCartItems(prevCartItems => prevCartItems.map(item => item.name === name ? {...item, quantity: item.quantity -1} : item   
            ))
        }
        setCartCount(cartCount - 1)
    }

    const totalPrice = cartItems.reduce((total, item) => {
        const price = Number(item.price.replace(',', '.'));
        const quantity = item.quantity || 1; 
        return total + price * quantity;
    }, 0).toFixed(2);

    const getQuantity = (name) => {
        const cartItem = cartItems.find(cartItem => cartItem.name === name);
        return cartItem ? cartItem.quantity : 0;
    };

    return (
        <combinedContext.Provider value = {{
            item, setItem, cartCount, setCartCount, addCart, cartItems, buy, setBuy, countItem, totalPrice, getQuantity, removeItem
        }}>
            {children}
        </combinedContext.Provider>
    )
}

export default Provider