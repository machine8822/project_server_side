import './css/Checkout.css';
import image from "../images/logoFinal.png";

function Checkout() {
    return(
        <div className="flex-container1">
            <h1>Checkout</h1>
            <p className="checkoutItems">Cart Items: </p>
            <p className="checkoutPrice">Total Price: $0</p>
            <button>Checkout</button>
            <img src={image} alt="Not working." />
        </div>
    );
}



export default Checkout;