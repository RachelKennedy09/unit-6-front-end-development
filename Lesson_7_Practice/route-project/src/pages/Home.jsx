import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router"

const Home = () => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    })
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;


    // two hooks, useState(to store our products, loading, and error) 
    // 3 pieces of state: products (array), loading(true/false) and error(error message)
    // and useEffect (to run the fetch request when the component first renders)
return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>
            {p.title} - ${p.price}
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home