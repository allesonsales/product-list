import { useState, useContext } from "react";
import './style.css'
import { combinedContext } from "../../provider";

const Cart = () => {
    const {cartCount, setCartCount, cartItems, countItem, item, setBuy, totalPrice, removeX} = useContext(combinedContext);

    return (
        <div className="cart">
            <h2>Your Cart ({cartCount})</h2>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((item, index) => (
                        <div className="cartItem">
                            <div className="description">
                                <span>{item.name}</span>
                                <div className="valueItem">
                                    <span>{item.quantity}</span>
                                    <span>{item.price}</span>
                                    <span>{(Number(item.quantity) * Number(item.price.replace(',', '.'))).toFixed(2)}</span>
                                </div>
                            </div>
                            <i class="fa-solid fa-circle-xmark" onClick={() => {removeX(item.name)}}></i>
                        </div>
                    ))}
                    <div className="total">
                        <span>Order Total</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className="carbonNeutral">
                        <i class="fa-solid fa-tree"></i>
                        <small>This is a <b>carbon-neutral</b> delivery</small>
                    </div>
                    <button onClick={() => {setBuy(true)}}>Confirm Order</button>
                </>
            ) : (
                <>
                    <div className="imageEmpty">
                        <img src="../src/assets/images/illustration-empty-cart.svg" alt="" />
                    </div>
                    <small>Your added items will appear here</small>
                </>
            )}
        </div>

    )
}

export default Cart