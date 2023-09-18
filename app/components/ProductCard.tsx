// include this whole component in the javascript bundle
// applies to all dependencies as well, but can be slow
// "use client";

import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <p>Some complex markup...</p>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
