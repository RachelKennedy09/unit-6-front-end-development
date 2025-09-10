import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Link } from 'react-router';

export default function ProductDetails() {
const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const controller = new AbortController(); //cancel if user navigates away 
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${id}`, { signal: controller.signal })
      .then((res) => {
        if (res.status === 404) {
            throw new Error("NOT_FOUND");
        }
        if (!res.ok) {
            throw new Error("FAILED_FETCH");
        }
        return res.json();
    })
    .then((data) => {
        setProduct(data);
        setLoading(false);
    })
  
    .catch((err) => {
      if (err.name === "AbortError") return; // ignore if we navigated away
      if (err.message === "NOT_FOUND") setError("This product does not exist.");
      else if (err.message === "FAILED_FETCH") setError("Failed to load product (server error).");
      else setError("Network error. Please try again.");
      setLoading(false);
    });

  return () => controller.abort(); // cleanup on route change
}, [id]);

if (loading) return <div className="spinner" aria-label="Loading"></div>;
<p>Loading product...</p>;
if (error) {
  return (
    <div>
      <h1>Product Details</h1>
      <p style={{ color: "tomato" }}>{error}</p>
      <Link to="/">← Back to products</Link>
    </div>
  );
}
if (!product) return <p>Not found.</p>;


  return (
    <div>
      <h1>{product.title}</h1>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <img src={product.image} alt={product.title} style={{ maxWidth: 240 }} />
      <p style={{ maxWidth: 600 }}>{product.description}</p>
    </div>
  );
}


