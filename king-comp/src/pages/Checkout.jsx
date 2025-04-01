import './css/Checkout.css';

function Checkout() {
    return(
        <div className="flex-container1">
            <h1>Checkout</h1>
            <p className="checkoutItems">Cart Items: </p>
            <p className="checkoutPrice">Total Price: $0</p>
            <button onclick="emptyCart()">Checkout</button>
            <img src="../images/logoFinal.png" alt="Not working." />
        </div>
    );
}

export default Checkout;