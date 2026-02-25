import image1 from "../assets/dry-lace.jpeg";
import image2 from "../assets/swiss-3d.jpeg";
import image3 from "../assets/swiss-handcut.jpeg";
import image4 from "../assets/swiss-polish.jpeg";
import image5 from "../assets/thanks-bag-shoe.jpeg";
import image6 from "../assets/gold-shoe.jpeg";
import image7 from "../assets/beaded-bag.jpeg";
import image8 from "../assets/black-beaded-heel.jpeg";
import image9 from "../assets/gold-low-heel.jpeg";
import image10 from "../assets/brown-swiss-3d.jpeg";
import image11 from "../assets/green-swiss-3d.jpeg";
import image12 from "../assets/lavender-swiss-3d.jpeg";
import image13 from "../assets/lilac-swiss-3d.jpeg";
import image14 from "../assets/peach-swiss-3d.jpeg";
import image15 from "../assets/purple-swiss-3d.jpeg";


const products = [
  {
    id: 1,
    name: "Swiss Dry Lace",
    price: 32000,
    oldPrice: 45000,
    categories: ["Fabrics"],
    rating: 4.5,
    reviews: 1284,
    stock: 12,
    bestSeller: true,
    image: image1,
    description: "High-quality breathable material, perfect for everyday wear.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 2,
    name: "Swiss Luxe Handcut with 3D Applique",
    price: 58000,
    oldPrice: 72000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 892,
    stock: 5,
    bestSeller: true,
    image: image2,
    description: "Genuine leather handbag with elegant design and spacious interior.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 3,
    name: "Luxe Swiss Handcut",
    price: 27000,
    oldPrice: 35000,
    categories: ["Fabrics"],
    rating: 4.3,
    reviews: 542,
    stock: 20,
    bestSeller: false,
    image: image3,
    description: "Comfortable and stylish hoodie made from premium cotton blend.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 4,
    name: "Ultra Double Stitches Swiss Polish Voile for Men",
    price: 25000,
    oldPrice: 30000,
    categories: ["Fabrics", "Men"],
    rating: 4.1,
    reviews: 320,
    stock: 15,
    bestSeller: false,
    image: image4,
    description: "Slim fit jeans crafted from durable stretch denim for comfort.",
    shipping: "Free delivery within 3–5 days"
  },
  {
    id: 5,
    name: "MultiColor Thanks Bag with Shoe",
    price: 48000,
    oldPrice: 60000,
    categories: ["Women", "Bags", "Shoes"],
    rating: 4.6,
    reviews: 760,
    stock: 8,
    bestSeller: true,
    image: image5,
    description: "Spacious and stylish backpack perfect for travel or daily use.",
    colors: ["Black", "Navy", "Gray"],
    sizes: ["One Size"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 6,
    name: "Gold High Heels",
    price: 30000,
    oldPrice: 39000,
    categories: ["Shoes", "Women"],
    rating: 4.4,
    reviews: 1112,
    stock: 18,
    bestSeller: true,
    image: image6,
    description: "Lightweight running shoes with breathable upper and cushioned sole.",
    colors: ["Black", "White", "Red"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 7,
    name: "Beaded Handbag",
    price: 25000,
    oldPrice: 32000,
    categories: ["Bags"],
    rating: 4.7,
    reviews: 1112,
    stock: 18,
    bestSeller: true,
    image: image7,
    description: "Beautifully beaded handbag with intricate design and premium materials.",
    colors: ["Black", "White", "Red"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 8,
    name: "Black Beaded Heels",
    price: 35000,
    oldPrice: 45000,
    categories: ["Shoes", "Women"],
    rating: 4.9,
    reviews: 1234,
    stock: 12,
    bestSeller: true,
    image: image8,
    description: "Elegant black beaded heels with a sophisticated design.",
    colors: ["Black", "Silver"],
    sizes: ["6", "7", "8", "9", "10"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 8,
    name: "Black Beaded Heels",
    price: 35000,
    oldPrice: 45000,
    categories: ["Shoes", "Women"],
    rating: 4.9,
    reviews: 1234,
    stock: 12,
    bestSeller: true,
    image: image8,
    description: "Elegant black beaded heels with a sophisticated design.",
    colors: ["Black", "Silver"],
    sizes: ["6", "7", "8", "9", "10"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 9,
    name: "Gold High Heels",
    price: 30000,
    oldPrice: 39000,
    categories: ["Shoes", "Women"],
    rating: 4.9,
    reviews: 1234,
    stock: 12,
    bestSeller: true,
    image: image9,
    description: "Elegant black beaded heels with a sophisticated design.",
    colors: ["Black", "Silver"],
    sizes: ["6", "7", "8", "9", "10"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 10,
    name: "Brown Swiss 3D",
    price: 30000,
    oldPrice: 39000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 892,
    stock: 5,
    bestSeller: true,
    image: image10,
    description: "Genuine leather handbag with elegant design and spacious interior.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 11,
    name: "Green Swiss 3D",
    price: 30000,
    oldPrice: 39000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 892,
    stock: 5,
    bestSeller: true,
    image: image11,
    description: "Genuine leather handbag with elegant design and spacious interior.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 12,
    name: "Lavender Swiss 3D",
    price: 30000,
    oldPrice: 39000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 892,
    stock: 5,
    bestSeller: true,
    image: image12,
    description: "Genuine leather handbag with elegant design and spacious interior.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 13,
    name: "Lilac Swiss 3D",
    price: 30000,
    oldPrice: 39000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 892,
    stock: 5,
    bestSeller: true,
    image: image13,
    description: "Genuine leather handbag with elegant design and spacious interior.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 14,
    name: "Peach Swiss 3D",
    price: 30000,
    oldPrice: 39000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 892,
    stock: 5,
    bestSeller: true,
    image: image14,
    description: "Genuine leather handbag with elegant design and spacious interior.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 15,
    name: "Purple Swiss 3D",
    price: 30000,
    oldPrice: 39000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 892,
    stock: 5,
    bestSeller: true,
    image: image15,
    description: "Genuine leather handbag with elegant design and spacious interior.",
    shipping: "Delivery within 3–5 days"
  },
];

export default products;