interface Item{
    id: number;
    name:string
}

export const addItem =
    (item:Item) => {
    return {
        type: 'ADD_ITEM',
        payload: item,
    };
};

export default addItem

