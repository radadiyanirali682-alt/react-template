import React, { useEffect, useState } from "react";   // ⬅ Added useEffect + useState
import Image from "./Image"; // Import the reusable Image component

export default function Gallery() {
  const [products, setProducts] = useState([]);       // ⬅ State to store API data

  // ========== FETCH API ON COMPONENT LOAD ==========
  useEffect(() => {
    fetch("https://dummyjson.com/products")           // ⬅ API call
      .then((res) => res.json())                      // ⬅ Convert to JSON
      .then((data) => setProducts(data.products))     // ⬅ Store products in state
      .catch((error) => console.error("API Error:", error)); // ⬅ Error handling
  }, []);

  return (
    <>
      {/* ===================== GALLERY SECTION ===================== */}
      <div className="gallery-section">
        <div className="gallery-container">
          <h2>Gallery</h2>

          <div className="gallery-grid">
            {/* ========== LOOP THROUGH PRODUCTS ==========
                 Using your <Image /> component
            */}
            {products.map((item) => (
              // <Image key={item.id} src={item.thumbnail} alt={item.title} />,
              // <h1>{item.title}</h1>
                <div>
                  <Image key={item.id} src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                  <span>{item.price}</span>
                </div>
            ))}
          </div>

          <button className="btn">Lebih Lanjut</button>
        </div>
      </div>
    </>
  );
}
