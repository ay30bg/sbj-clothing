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
import image16 from "../assets/big-white-dry-lace.jpeg";
import image17 from "../assets/red-female-slippers.jpeg";
import image18 from "../assets/gold-low-heel-shoe.jpeg";
import image19 from "../assets/patterned-heel.jpeg";


const products = [
  {
    id: 1,
    name: "Swiss Dry Lace",
    price: 100000,
    oldPrice: 15000,
    categories: ["Fabrics"],
    rating: 4.5,
    reviews: 1284,
    stock: 12,
    bestSeller: true,
    image: image1,
    description: "high-quality, richly textured lace fabric known for its crisp finish and elegant detailing. Designed to offer a luxurious and refined look, it features intricate patterns that make it perfect for weddings, special occasions, and classy traditional attire.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 2,
    name: "Swiss Luxe Handcut with 3D Applique",
    price: 160000,
    oldPrice: 200000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 892,
    stock: 5,
    bestSeller: true,
    image: image2,
    description: "A premium-quality lace fabric designed for elegance and sophistication. Expertly crafted with intricate handcut detailing and beautifully layered 3D appliqué accents, this fabric offers a rich, textured finish that stands out effortlessly.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 3,
    name: "Luxe Swiss Handcut",
    price: 200000,
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
    name: "Ultra Double Stitches Swiss for Men",
    price: 350000,
    oldPrice: 500000,
    categories: ["Fabrics", "Men"],
    rating: 4.1,
    reviews: 320,
    stock: 15,
    bestSeller: false,
    image: image4,
    description: "Premium-quality Swiss fabric crafted with bold double-stitch detailing for a refined and distinguished look. Designed for the modern gentleman, it offers a clean finish, breathable comfort, and long-lasting durability.",
    shipping: "Free delivery within 3–5 days"
  },
  {
    id: 5,
    name: "Bohemian Paisley Block Heel Slide Sandals with Matching Clutch Set",
    price: 120000,
    oldPrice: 200000,
    categories: ["Women", "Bags", "Shoes"],
    rating: 4.6,
    reviews: 760,
    stock: 8,
    bestSeller: true,
    image: image5,
    description: "Step out in bold style with this vibrant Bohemian Paisley Block Heel Slide Sandals and Matching Clutch Set. Designed with a colorful, eye-catching paisley print, this coordinated set adds a statement touch to any outfit.",
    colors: ["Black", "Navy", "Gray"],
    sizes: ["One Size"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 6,
    name: "Gold High Heels",
    price: 40000,
    oldPrice: 50000,
    categories: ["Shoes", "Women"],
    rating: 4.4,
    reviews: 10,
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
    name: "Midnight Royale Embellished Half-Moon Handbag",
    price: 40000,
    oldPrice: 50000,
    categories: ["Bags"],
    rating: 4.7,
    reviews: 9,
    stock: 18,
    bestSeller: true,
    image: image7,
    description: "Make a bold statement with the Midnight Royale Embellished Half-Moon Handbag. Designed in a unique semi-circular silhouette, this elegant black handbag features intricate gold beadwork and radiant sunburst crystal embellishments that add a touch of glamour and sophistication. The structured design is complemented by sturdy braided top handles for a comfortable and stylish grip.",
    colors: ["Black", "White", "Red"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 8,
    name: "Tunda Stylish Camo Braided Slide Sandals",
    price: 40000,
    oldPrice: 45000,
    categories: ["Shoes", "Women"],
    rating: 4.9,
    reviews: 6,
    stock: 12,
    bestSeller: false,
    image: image19,
    description: "Step into effortless style with the Tunda Stylish Camo Braided Slide Sandals. Designed with a trendy camouflage-print sole and soft nude braided straps, these sandals blend comfort with bold fashion. The square-toe design adds a modern edge, while the cushioned footbed ensures all-day comfort.",
    colors: ["Black", "Silver"],
    sizes: ["6", "7", "8", "9", "10"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 8,
    name: "Black Beaded Heels",
    price: 40000,
    oldPrice: 50000,
    categories: ["Shoes", "Women"],
    rating: 4.9,
    reviews: 4,
    stock: 12,
    bestSeller: false,
    image: image8,
    description: "Elegant black beaded heels with a sophisticated design.",
    colors: ["Black", "Silver"],
    sizes: ["6", "7", "8", "9", "10"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 9,
    name: "Gold Low Heels",
    price: 40000,
    oldPrice: 50000,
    categories: ["Shoes", "Women"],
    rating: 4.9,
    reviews: 30,
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
    name: "Brown Swiss Luxe Handcut with 3D Applique",
    price: 160000,
    oldPrice: 200000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 1,
    stock: 5,
    bestSeller: false,
    image: image10,
    description: "A premium-quality lace fabric designed for elegance and sophistication. Expertly crafted with intricate handcut detailing and beautifully layered 3D appliqué accents, this fabric offers a rich, textured finish that stands out effortlessly.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 11,
    name: "Green Swiss Luxe Handcut with 3D Applique",
    price: 160000,
    oldPrice: 200000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 10,
    stock: 5,
    bestSeller: true,
    image: image11,
    description: "A premium-quality lace fabric designed for elegance and sophistication. Expertly crafted with intricate handcut detailing and beautifully layered 3D appliqué accents, this fabric offers a rich, textured finish that stands out effortlessly.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 12,
    name: "Lavender Swiss Luxe Handcut with 3D Applique",
    price: 160000,
    oldPrice: 200000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 2,
    stock: 5,
    bestSeller: false,
    image: image12,
    description: "A premium-quality lace fabric designed for elegance and sophistication. Expertly crafted with intricate handcut detailing and beautifully layered 3D appliqué accents, this fabric offers a rich, textured finish that stands out effortlessly.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 13,
    name: "Lilac Swiss Luxe Handcut with 3D Applique",
    price: 160000,
    oldPrice: 200000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 8,
    stock: 5,
    bestSeller: true,
    image: image13,
    description: "A premium-quality lace fabric designed for elegance and sophistication. Expertly crafted with intricate handcut detailing and beautifully layered 3D appliqué accents, this fabric offers a rich, textured finish that stands out effortlessly.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 14,
    name: "Peach Swiss Luxe Handcut with 3D Applique",
    price: 160000,
    oldPrice: 200000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 3,
    stock: 5,
    bestSeller: false,
    image: image14,
    description: "A premium-quality lace fabric designed for elegance and sophistication. Expertly crafted with intricate handcut detailing and beautifully layered 3D appliqué accents, this fabric offers a rich, textured finish that stands out effortlessly.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 15,
    name: "Purple Swiss Luxe Handcut with 3D Applique",
    price: 160000,
    oldPrice: 200000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 1,
    stock: 5,
    bestSeller: false,
    image: image15,
    description: "A premium-quality lace fabric designed for elegance and sophistication. Expertly crafted with intricate handcut detailing and beautifully layered 3D appliqué accents, this fabric offers a rich, textured finish that stands out effortlessly.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 16,
    name: "All White Big Swiss Dry Lace",
    price: 200000,
    oldPrice: 400000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 7,
    stock: 5,
    bestSeller: true,
    image: image16,
    description: "A premium, elegant fabric crafted with intricate embroidery and a rich texture. Perfect for weddings and special occasions, available in different patterns and designs to suit every unique style.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 17,
    name: "Quaballa Classic Patent Slides",
    price: 35000,
    oldPrice: 40000,
    categories: ["Shoes", "Women"],
    rating: 4.8,
    reviews: 8,
    stock: 5,
    bestSeller: true,
    image: image17,
    description: "Step out in bold style with these Quaballa Classic Patent Slide Sandals. Designed with a glossy red patent upper and sleek black footbed, these slip-on sandals combine comfort with a modern, sophisticated look. The embossed front detail adds a refined touch, making them perfect for casual outings, relaxed events, or everyday wear.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 18,
    name: "La Feminina Gold Slingback Pointed Heels",
    price: 45000,
    oldPrice: 60000,
    categories: ["Shoes", "Women"],
    rating: 4.8,
    reviews: 10,
    stock: 5,
    bestSeller: true,
    image: image18,
    description: "Elevate your style with the La Feminina Gold Slingback Pointed Heels, designed for elegance and sophistication. Featuring a sleek metallic gold finish with a sharp pointed toe, these heels are beautifully accented with a bold gold front detail for a luxurious touch.",
    shipping: "Delivery within 3–5 days"
  },
];

export default products;
