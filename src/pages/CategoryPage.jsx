import { useParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "../styles/categoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const [sortOption, setSortOption] = useState("default"); // default, priceLowHigh, priceHighLow, rating

  // Convert slug to readable format
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  // ✅ Dynamic page title
  useEffect(() => {
    document.title = `${formattedCategory} - SBJ Clothing`;
  }, [formattedCategory]);

  // Filter products that have this category
  const filteredProducts = useMemo(() => {
    const matched = products.filter((p) => {
      if (Array.isArray(p.categories)) {
        return p.categories.some(
          (cat) => cat.toLowerCase() === category.toLowerCase()
        );
      }
      if (typeof p.category === "string") {
        return p.category.toLowerCase() === category.toLowerCase();
      }
      return false;
    });

    // Apply sorting
    switch (sortOption) {
      case "priceLowHigh":
        return matched.sort((a, b) => a.price - b.price);
      case "priceHighLow":
        return matched.sort((a, b) => b.price - a.price);
      case "rating":
        return matched.sort((a, b) => b.rating - a.rating);
      default:
        return matched;
    }
  }, [category, sortOption]);

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{formattedCategory}</h1>
        <p>{filteredProducts.length} Products Found</p>

        {/* ===== FILTER DROPDOWN ===== */}
        <div className="category-filter">
          <label htmlFor="sort">Sort by: </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-category">
          <h3>No products found in this category.</h3>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;