import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';

const ItemList = ({ items, addItem }) => {
    return (
        <div>
            <ul>
                {items.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            <button onClick={() => addItem({ id: 1, name: 'Item 1' })}>Add Item</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.items
});

const mapDispatchToProps = {
    addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
