import Item from "../item/item";
import Cart from "../cart/cart";
import './style.css'

const Home = () => {
    return (
        <div className="container">
            <h1>Desserts</h1>
            <div className="containerPrincipal">
                <Item />
                <Cart />
            </div>
        </div>
    )
}

export default Home