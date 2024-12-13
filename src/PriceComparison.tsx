import React from 'react';

interface PriceComparisonProps {
    product: string;
    cheaperStore: string;
    otherStore: string;
    cheaperStorePrice: string;
    otherStorePrice: string;
}

const PriceComparison: React.FC<PriceComparisonProps> = ({
                                                             product,
                                                             cheaperStore,
                                                             otherStore,
                                                             cheaperStorePrice,
                                                             otherStorePrice,
                                                         }) => {
    return (
        <div>
            <p>
                {product} chocolates are generally cheaper at <span style={{ fontWeight: 'bold' }}>{cheaperStore}</span> than at {otherStore}.
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
};

export default PriceComparison;