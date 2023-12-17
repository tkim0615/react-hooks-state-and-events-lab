import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart(!inCart);
  };
  return (
    <li className={inCart? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart? 'Remove from Cart' : 'Add to cart'}</button>
    </li>
  );
}

export default Item;

// ### Add to Cart

// In the `Item` component, when the user clicks the `<button>` element, the item
// should be added to their virtual cart. The way we'll show the user that the item
// is in the cart is by changing the className on the `<li>` element:

// ```jsx
// <li className="in-cart">
// {/* the item is in the cart */}
// </li>

// <li className="">
// {/* the item is NOT in the cart */}
// </li>
// ```

// If the item _is not_ in the cart, the `<button>` element's text should read "Add
// to Cart", and if the item _is_ in the cart, the `<button>` element's text should
// read "Remove From Cart". Naturally, you'll also need to add state to the `Item`
// component to solve this deliverable!