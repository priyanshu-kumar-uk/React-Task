import React, { useContext } from "react";
import "../index.css";
import { mycontext } from "../DataContext";

const Products = () => {
  let { products } = useContext(mycontext);
  return (
    <div className="products">
      <div className="cards">
        {products.map((val) => {
          return (
            <div className="card">
              <div className="img">
                <img
                  src={val.image}
                  alt=""
                />
              </div>
              <h3>{val.title}</h3>
              <p>
               { val.description}
              </p>
              <p>{val.price}</p>
              <div className="btn">
                <button>Add to cart</button>
                <i class="ri-shopping-bag-3-fill"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
