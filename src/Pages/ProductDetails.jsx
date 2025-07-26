import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { findDetails } from "../helpers/helper";
function ProductDetails() {
  const id = useParams().id;
  const data = useSelector((data) => data.fetchData.items);

  const product = findDetails(id, data);
  console.log(product);
  return (
    <div>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <Link to="/products">back to products</Link>
        <h2>{product.title}</h2>
        <p>
          <span>Price:</span>
          {product.price}
        </p>
        <p>
          <span>Category:</span>
          {product.category}
        </p>
        <p>{product.description}</p>
        <div>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
