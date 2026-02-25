import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/search.css";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(initialQuery);

  // ✅ Update page title dynamically
  useEffect(() => {
    document.title = searchTerm
      ? `Search: "${searchTerm}" - SBJ Clothings`
      : "Search Products - SBJ Clothings";
  }, [searchTerm]);

  // Filter products dynamically as user types
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const categoryMatch = Array.isArray(product.categories)
      ? product.categories.some((cat) => cat.toLowerCase().includes(term))
      : product.categories?.toLowerCase().includes(term);
    return nameMatch || categoryMatch;
  });

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Products</h1>
        <input
          type="text"
          placeholder="Search for clothing, fabrics, accessories..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
          autoFocus
        />
        <p>{filteredProducts.length} Products Found</p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-search">
          <h3>No products matched your search.</h3>
          <Link to="/">Go Back Home</Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;