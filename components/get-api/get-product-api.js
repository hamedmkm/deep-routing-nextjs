"use client";
import { useEffect, useState } from "react";

export default function HomePageAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products); // لیست محصولات در data.products قرار دارد
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "1.125rem", marginTop: "16px" }}>Loading...</p>;
  }

  return (
    <div className="container">

      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.images[0]} alt={product.title} />
            </div>
            <div>
              <h2 className="card-title">{product.title}</h2>
              <p className="card-description ">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
