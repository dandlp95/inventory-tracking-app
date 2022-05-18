import React, { useState, useEffect } from "react";
import EditProductForm from "./EditProductForm";
import DeleteProductForm from "./DeleteProductForm";
import AddProductForm from "./AddProductForm";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsLayout() {
  const url = "http://localhost:8080/products";
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [url]);

  console.log(products);

  if (products) {
    return (
      <div>
        {products.map((product) => {
          return (
            <div>
              <h2>{product.productName}</h2>
              <p>{product.description}</p>
              <p>{product.quantity}</p>
            </div>
          );
        })}
        <div>
            <Link to="/add_product">
                <button>Add Product</button>
            </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
}

export default ProductsLayout;
