import { useState, useEffect, useContext } from "react";
import { combinedContext } from "../../provider";
import './style.css';

const Item = () => {
    const { item, addCart, countItem, cartItems, getQuantity } = useContext(combinedContext);

    const onCart = (name) => cartItems.some(cartItem => cartItem.name === name);

    const styleAddCart = (name) => {
        return onCart(name) ? { border: '2px inset var(--Red)' } : {};
    };

    return (
        <>
            <div className="itemContainer">
                {item && item.map(({ category, name, price, thumbnail, mobile, desktop, tablet, quantity }, index) => (
                    <div className="item" key={index}>
                        <div className="background" style={{ backgroundImage: `url(${mobile})`, ...styleAddCart(name) }}></div>
                            {console.log(item)}
                            {console.log(quantity)}
                            {onCart(name) ? (
                                <>
                                <div className="onCart">
                                    <i className="fa-solid fa-circle-minus"></i>
                                    <span>{getQuantity(name)}</span>
                                    <i className="fa-solid fa-circle-plus" onClick={() => { addCart({ name, price, thumbnail }) }}></i>
                                </div>
                                </>
                            ) : (
                                <>
                                    <div className="addCart" onClick={() => { addCart({ name, price, thumbnail }) }}>
                                    <i className="fa-solid fa-cart-plus"></i>
                                    <span>Add to Cart</span>
                                    </div>
                                </>
                            )}
                        <div className="description">
                            <small>{category}</small>
                            <h3>{name}</h3>
                            <p>R$ {price}</p>
                        </div> 
                    </div>
                ))}
            </div>
        </>
    );
};

export default Item;
