export const addToCart = (product, setCart) => {
    setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item.id === product.id);

        if (existingProduct) {
            return prevCart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevCart, { ...product, quantity: 1 }];
        }
    });
};

export const Decrement = (product, setCart) => {
    setCart((prevCart) => {
        return prevCart
            .map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0);  // Remove item if quantity hits 0
    });
};

export const removeFromCart = (product, setCart) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
};
