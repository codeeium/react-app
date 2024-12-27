export const checkout = (cart, setCart) => {
    alert(`Your total is $$${
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    }. Thank you for shopping!`);
    setCart([]);
};
