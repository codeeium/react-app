export const incrementQuantity = (product, setCartItems) => {
    setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
};


export  const decrementQuantity = (product, setCartItems) => {
    setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
            item.id === product.id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    );
};