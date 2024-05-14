/*

Phase 2 -> Props
By Sakib Rasul
Updated January 29, 2024
Created July 31, 2023

Core Deliverables
1. Create an array of items to sell in a boba shop.
2. Create a shop layout in <App>.
3. Define a <Item> component that displays one item.
4. Render our array of items as a list of <Item> components.

*/
import Item from "./Item";

function App() {
  const items = [
    {
      id: 0,
      name: "Dragon Bubble Tea",
      price: 5,
    },
    {
      id: 1,
      name: "Cookies",
      price: 3,
    },
  ];
  return (
    <div>
      <h1>Sakib's Boba Shop</h1>
      <ul>
        {items.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
    </div>
  );
}

export default App;
