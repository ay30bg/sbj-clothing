// import { useState } from "react";
// import productsData from "../data/products";
// import ProductCard from "../components/ProductCard";
// import "../styles/shop.css";

// const Shop = () => {
//   const [products, setProducts] = useState(productsData);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("");

//   // Filter by category
//   const handleCategory = (category) => {
//     setSelectedCategory(category);

//     if (category === "All") {
//       setProducts(productsData);
//     } else {
//       const filtered = productsData.filter(
//         (product) => product.category === category
//       );
//       setProducts(filtered);
//     }
//   };

//   // Sort by price
//   const handleSort = (value) => {
//     setSortOption(value);

//     let sorted = [...products];

//     if (value === "low") {
//       sorted.sort((a, b) => a.price - b.price);
//     } else if (value === "high") {
//       sorted.sort((a, b) => b.price - a.price);
//     }

//     setProducts(sorted);
//   };

//   return (
//     <div className="shop-page">
      
//       {/* Top Controls */}
//       <div className="shop-controls">

//         <div className="categories">
//           {["All", "Wears", "Shoes", "Bags"].map((cat) => (
//             <button
//               key={cat}
//               className={selectedCategory === cat ? "active" : ""}
//               onClick={() => handleCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="sort">
//           <select
//             value={sortOption}
//             onChange={(e) => handleSort(e.target.value)}
//           >
//             <option value="">Sort By</option>
//             <option value="low">Price: Low to High</option>
//             <option value="high">Price: High to Low</option>
//           </select>
//         </div>

//       </div>

//       {/* Product Grid */}
//       <div className="product-grid">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>

//     </div>
//   );
// };

// export default Shop;
