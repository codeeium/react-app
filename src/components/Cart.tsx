import React from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartProps {
    cart: CartItem[];
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, clearCart }) => {
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>
                                ${item.price} x {item.quantity}
                            </p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice}</h3>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
