import { useContext } from 'react'
import './style.css' 
import { combinedContext } from '../../provider'

const ModalBuy = () => {
    const { cartItems, buy, totalPrice, getQuantity } = useContext(combinedContext);
    
    if(!buy) return null
    
    return (       
        <div className="modalBackground">
            <div className="modalContent">
                <div className="top">
                    <i class="fa-solid fa-circle-check"></i>
                    <h2>Order Confirmed</h2>
                    <small>We hope you enjoy your food</small>
                </div>
                <div className="cartContent">
                    {cartItems.map(({name, thumbnail, price},index) => (
                        <div className="cartItem" key={index}>
                            <div className="image">
                                <img src={thumbnail} alt={name} />
                            </div>
                            <div className="description">
                                <span>{name}</span>
                                <div className="priceItem">
                                    <span>{getQuantity(name)}x</span>
                                    <span>{price}</span>
                                </div>
                            </div>
                            <div className="price">
                                <span>${(Number(getQuantity(name)) * Number(price.replace(',','.'))).toFixed(2).replace('.',',')}</span>
                            </div>
                        </div>
                    ))}
                    <div className="order">
                        <span>Order Total</span>
                        <span>${totalPrice}</span>
                    </div>
                </div>
                <button onClick={() => window.location.reload()}>Start new Order</button>
            </div>
        </div>
    )
}

export default ModalBuy