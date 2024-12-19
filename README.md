![img.png](img.png)


! image, name, price, add ( product list)
! image, name, price, remove (cart)
![img_1.png](img_1.png)
Unordered list -> list item 

<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

![img_2.png](img_2.png)


{
cartItem.length === 0 ? 'Cart is empty' : cartItem.map((item, index) => (
    <li key={index}>
        <img src={item.image} alt={item.name}/>
        <p> &{item.price} </p>
    </li>       
))}

---
reduce - for total and checkout total
ternary operator - for empty cart (if condition true or false)
map (item,index)
---
"First, filter the items, 
then map over them to display, 
and finally reduce the list to calculate the total count."
----