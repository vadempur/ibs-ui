import React from "react";
import "./styles.css";
import Product from "./Product";

import product1 from "../../../assets/product1.jpg";
import product2 from "../../../assets/product2.jpg";
import product3 from "../../../assets/product3.jpg";

export default function Products() {
  return (
    <section className="products-section">
      <h1 className="products-title">Produits</h1>
      <div className="products-container">
        <Product
          img={product1}
          title="Produit"
          desc={
            "Duis pariatur incididunt pariatur eu minim eu ad nulla proident deserunt dolore."
          }
        />
        <Product
          img={product2}
          title="Produit"
          desc={
            "Duis pariatur incididunt pariatur eu minim eu ad nulla proident deserunt dolore."
          }
        />
        <Product
          img={product3}
          title="Produit"
          desc={
            "Duis pariatur incididunt pariatur eu minim eu ad nulla proident deserunt dolore."
          }
        />
      </div>
    </section>
  );
}
