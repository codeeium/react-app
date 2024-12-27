export const removeFromCart = (product, cart, setCart) => {
    setCart(cart.filter(item => item.id !== product.id));
};
