
export const removeFromCart = (product, setCart) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
};
