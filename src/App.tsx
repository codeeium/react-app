import PriceComparison from './PriceComparison';

const App = () => {
    return (
        <div>
            <PriceComparison
                product="Ferrero Rocher"
                cheaperStore="Walmart"
                otherStore="Costco"
                cheaperStorePrice="$10.87 for 24 chocolates"
                otherStorePrice="$14.99 for 48 chocolates"
            />
        </div>
    );
};

export default App;