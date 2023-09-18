// include this whole component in the javascript bundle
// applies to all dependencies as well, but can be slow
// "use client";

import AddToCart from "./AddToCart";

const ProductCart = () => {
  return (
    <div>
      <p>Some complex markup...</p>
      <AddToCart />
    </div>
  );
};

export default ProductCart;
