import "../styles/category.css";

const categories = [
  "All",
  "Wears",
  "Shoes",
  "Bags",
  "Accessories",
  "New Arrivals",
  "Flash Sale"
];

const CategoryBar = () => {
  return (
    <div className="category-bar">
      {categories.map((cat, index) => (
        <button key={index} className="category-btn">
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
