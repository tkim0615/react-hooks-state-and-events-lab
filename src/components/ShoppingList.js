import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items);

  //define onchange handle function and set stte to e.target.value // filter items and send down filtered array to be mapped

  const handleChange = (e) =>{
    const filtered = items.filter(item =>{
      if(e.target.value === 'All'){
        return true
      }else{
        return item.category === e.target.value
      }
    })
    setSelectedCategory(filtered)
  }



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
// ### Filter

// In the `ShoppingList` component, there is a `<select>` element that will allow
// us to **filter** the list of items by category.

// Use the `useState` hook to create a state variable called `selectedCategory` for
// keeping track of the selected value from this `<select>` element. When the value
// of the `<select>` element is **changed**, update state.

// You should also use the `selectedCategory` variable to determine which items to
// display in the shopping list. You'll need some way of **filter**ing the array of
// items based on the `selectedCategory`.

// ## Resources

// - [React Docs on `useState`](https://reactjs.org/docs/hooks-state.html)
