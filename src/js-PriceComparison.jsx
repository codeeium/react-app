function PriceComparison({ product, cheaperStore, otherStore, cheaperStorePrice, otherStorePrice }) {
    return (
        <div>
            <p>
                {product} chocolates are generally cheaper at <b>{cheaperStore}</b> than at {otherStore}.
            </p>
            <table>
                <thead>
                <tr>
                    <th>Store</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{cheaperStore}</td>
                    <td>{cheaperStorePrice}</td>
                </tr>
                <tr>
                    <td>{otherStore}</td>
                    <td>{otherStorePrice}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PriceComparison;