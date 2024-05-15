// To destructure an object within an object, separate the "nests" you want with a colon.

import { useState } from "react";

// Writing `export default` before our component saves us from writing `export default [function]` at the end of the file.
export default function Item({ itemProp: { name, price } }) {
  const [isInCart, setIsInCart] = useState(false);

  function toggleCart() {
    // change isInCart to the opposite of the current value. Allows both to remove and add products to cart.
    setIsInCart(!isInCart);
  }

  return (
    <li>
      {/* Since we destructured props.item, we save ourselves from writing `item.name` and `item.price`. */}
      <h2>
        {name} for only ${price}!
      </h2>
      <p>
        {/* When the user clicks on "Add to Cart", the button text should change to "remove from cart" */}
        <button onClick={toggleCart}>
          <strong>{isInCart ? "Remove from Cart" : "Add to Cart"}</strong>
        </button>
        {/* Some manual spacing, nothing to see here... */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{isInCart ? "In Cart" : "Not in Cart"}</span>
      </p>
      {/* Some manual spacing between <Item> components, nothing to see here... */}
      <br />
    </li>
  );
}
