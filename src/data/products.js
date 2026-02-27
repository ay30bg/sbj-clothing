
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
import image20 from "../assets/black-dry-lace.jpeg";
import image21 from "../assets/black-pattern-dry-lace.jpeg";
import image22 from "../assets/blue-dry-lace.jpeg";
import image23 from "../assets/blue-patterned-dry-lace.jpeg";
import image24 from "../assets/deep-green-dry-lace.jpeg";
import image25 from "../assets/green-dry-lace.jpeg";
import image26 from "../assets/peach-dry-lace.jpeg";
import image27 from "../assets/pink-dry-lace.jpeg";
import image28 from "../assets/purple-dry-lace.jpeg";
import image29 from "../assets/yellow-dry-lace.jpeg";
import image30 from "../assets/white-dry-lace.jpeg";
import image31 from "../assets/all-white-big-lace1.jpeg";
import image32 from "../assets/all-white-big-lace2.jpeg";
import image33 from "../assets/all-white-big-lace3.jpeg";
import image34 from "../assets/green-men.jpeg";
import image35 from "../assets/sky-blue-men.jpeg";
import image36 from "../assets/white-men.jpeg";
import image37 from "../assets/stacked-men.jpeg";
import image38 from "../assets/pink-turkey.jpeg";
import image39 from "../assets/wine-turkey.jpeg";
import image40 from "../assets/brown-turkey.jpeg";
import image41 from "../assets/green-turkey.jpeg";
import image42 from "../assets/pink-patten-turkey.jpeg";
import image43 from "../assets/two-piece-white-turkey.jpeg";
import image44 from "../assets/red-gucci-up-down.jpeg";
import image45 from "../assets/white&wine-up-down.jpeg";
import image46 from "../assets/black&white-up-down.jpeg";
import image47 from "../assets/big-swiss-white-dry-lace1.jpeg";
import image48 from "../assets/big-swiss-white-dry-lace2.jpeg";
import image49 from "../assets/big-swiss-white-dry-lace3.jpeg"; 
import image50 from "../assets/big-swiss-white-dry-lace4.jpeg";
import image51 from "../assets/big-swiss-white-dry-lace5.jpeg";
import image52 from "../assets/big-swiss-white-dry-lace6.jpeg";
import image53 from "../assets/big-swiss-white-dry-lace7.jpeg";


const products = [
  {
    id: 1,
    name: "Swiss Dry Lace",
    price: 100000,
    oldPrice: 150000,
    categories: ["Fabrics"],
    rating: 4.5,
    reviews: 1284,
    stock: 12,
    bestSeller: true,
    images: [image1, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30],
    description: "High-quality, richly textured lace fabric known for its crisp finish and elegant detailing. Designed to offer a luxurious and refined look, it features intricate patterns that make it perfect for weddings, special occasions, and classy traditional attire.",
    colors: ["Green", "Pink", "Blue", "Black", "Yellow", "Lemon"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 2,
    name: "Swiss Luxe Handcut with 3D Applique",
    price: 160000,
    oldPrice: 200000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 13,
    stock: 5,
    bestSeller: true,
    images: [image2, image10, image11, image12, image13, image14, image15],
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
    reviews: 9,
    stock: 20,
    bestSeller: false,
    images: [image3],
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
    reviews: 3,
    stock: 15,
    bestSeller: false,
    images: [image4, image34, image35, image36, image37],
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
    reviews: 7,
    stock: 8,
    bestSeller: true,
    images: [image5],
    description: "Step out in bold style with this vibrant Bohemian Paisley Block Heel Slide Sandals and Matching Clutch Set. Designed with a colorful, eye-catching paisley print, this coordinated set adds a statement touch to any outfit.",
    colors: ["Black", "Navy", "Gray"],
    sizes: ["39", "40", "41", "42", "43"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 6,
    name: "Golden Regal Embellished Pointed-Toe Heels",
    price: 40000,
    oldPrice: 50000,
    categories: ["Shoes", "Women"],
    rating: 4.4,
    reviews: 10,
    stock: 18,
    bestSeller: true,
    images: [image6],
    description: "Step into elegance with the Golden Regal Embellished Heels, designed for women who love to make a statement. Crafted in a shimmering gold finish, these heels feature a sleek pointed toe and a stunning crystal-leaf embellishment that adds a touch of royalty and sophistication.",
    colors: ["Gold"],
    sizes: ["39", "40", "41", "42", "43"],
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
    images: [image7],
    description: "Make a bold statement with the Midnight Royale Embellished Half-Moon Handbag. Designed in a unique semi-circular silhouette, this elegant black handbag features intricate gold beadwork and radiant sunburst crystal embellishments that add a touch of glamour and sophistication. The structured design is complemented by sturdy braided top handles for a comfortable and stylish grip.",
    colors: ["Black"],
    sizes: ["39", "40", "41", "42", "43"],
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
    images: [image19],
    description: "Step into effortless style with the Tunda Stylish Camo Braided Slide Sandals. Designed with a trendy camouflage-print sole and soft nude braided straps, these sandals blend comfort with bold fashion. The square-toe design adds a modern edge, while the cushioned footbed ensures all-day comfort.",
    colors: ["Nude"],
    sizes: ["39", "40", "41", "42", "43"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 9,
    name: "Black Beaded Heels",
    price: 40000,
    oldPrice: 50000,
    categories: ["Shoes", "Women"],
    rating: 4.9,
    reviews: 4,
    stock: 12,
    bestSeller: false,
    images: [image8],
    description: "Elegant black beaded heels with a sophisticated design.",
    colors: ["Black", "Gold", "Purple"],
    sizes: ["39", "40", "41", "42", "43"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 10,
    name: "Golden Luxe Embellished Slingback Heels",
    price: 40000,
    oldPrice: 50000,
    categories: ["Shoes", "Women"], 
    rating: 4.9,
    reviews: 30,
    stock: 12,
    bestSeller: true,
    images: [image9],
    description: "Step into elegance with the Golden Luxe Embellished Slingback Heels. Designed with a sleek pointed toe silhouette, these stunning gold heels feature a textured metallic finish that exudes sophistication and glamour. The front is beautifully adorned with a sparkling crystal embellishment, adding a refined statement touch to your look.",
    colors: ["Gold"],
    sizes: ["39", "40", "41", "42", "43"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 11,
    name: "All White Big Swiss Dry Lace",
    price: 200000,
    oldPrice: 400000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 7,
    stock: 5,
    bestSeller: true,
    images: [image16, image31, image32, image33],
    description: "A premium, elegant fabric crafted with intricate embroidery and a rich texture. Perfect for weddings and special occasions, available in different patterns and designs to suit every unique style.",
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 12,
    name: "Quaballa Classic Patent Slides",
    price: 35000,
    oldPrice: 40000,
    categories: ["Shoes", "Women"],
    rating: 4.8,
    reviews: 8,
    stock: 5,
    bestSeller: true,
    images: [image17],
    description: "Step out in bold style with these Quaballa Classic Patent Slide Sandals. Designed with a glossy red patent upper and sleek black footbed, these slip-on sandals combine comfort with a modern, sophisticated look. The embossed front detail adds a refined touch, making them perfect for casual outings, relaxed events, or everyday wear.",
    colors: ["Red"],
    sizes: ["39", "40", "41", "42", "43"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 13,
    name: "La Feminina Gold Slingback Pointed Heels",
    price: 45000,
    oldPrice: 60000,
    categories: ["Shoes", "Women"],
    rating: 4.8,
    reviews: 10,
    stock: 5,
    bestSeller: true,
    images: [image18],
    description: "Elevate your style with the La Feminina Gold Slingback Pointed Heels, designed for elegance and sophistication. Featuring a sleek metallic gold finish with a sharp pointed toe, these heels are beautifully accented with a bold gold front detail for a luxurious touch.",
    colors: ["Gold"],
    sizes: ["39", "40", "41", "42", "43"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 14,
    name: "Elegant Pink Peplum Long Dress with Embellished Bodice",
    price: 180000,
    oldPrice: 250000,
    categories: ["Women"],
    rating: 4.8,
    reviews: 10,
    stock: 5,
    bestSeller: false,
    images: [image38],
    description: "Step into elegance with this stunning pink peplum long dress, featuring a fitted silhouette that flatters the figure. The intricately embellished bodice with sparkling accents adds a touch of glamour, while the structured peplum waist enhances sophistication and style. Perfect for formal events, parties, or special occasions, this dress combines timeless design with modern elegance. Pair with gold accessories and heels for a complete, show-stopping look.",
    sizes: ["L"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 15,
    name: "Regal Plum Pleated Evening Gown with Lace Detailing",
    price: 150000,
    oldPrice: 220000,
    categories: ["Women"],
    rating: 4.8,
    reviews: 8,
    stock: 5,
    bestSeller: true,
    images: [image39],
    description: "Step into elegance with this luxurious plum evening gown, crafted from a rich, lustrous fabric that gracefully flows with every movement. The bodice features intricate black lace accents, highlighting the neckline and creating a sophisticated contrast. Puff sleeves add a touch of vintage charm, while the pleated skirt ensures a flattering, fluid silhouette. Perfect for formal events, gala dinners, or any occasion where you want to make a statement. Complete the look with your favorite heels and a chic clutch.",
    sizes: ["M", "L"],
    shipping: "Delivery within 3–5 days",
  },
  {
    id: 16,
    name: "Elegant Ruffled Peplum Sequin Gown",
    price: 180000,
    oldPrice: 300000,
    categories: ["Women"],
    rating: 4.7,
    reviews: 5,
    stock: 5,
    bestSeller: false,
    images: [image40],
    description: "Turn heads with this stunning Elegant Ruffled Peplum Sequin Gown. Featuring a beautifully tailored bodice with dramatic ruffled shoulders and a plunging neckline, it perfectly balances sophistication and glamour. The long, flowing sleeves add a regal touch, while the high-waisted, fully sequined skirt dazzles with intricate patterns, creating a luxurious, floor-length silhouette. Ideal for weddings, formal events, or special occasions, this gown is designed to make a lasting impression.",
    sizes: ["L"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 17,
    name: "Emerald Royale Embellished Peplum Midi Dress",
    price: 150000,
    oldPrice: 200000,
    categories: ["Women"],
    rating: 4.8,
    reviews: 10,
    stock: 5,
    bestSeller: true,
    images: [image41],
    description: "A statement-making emerald green midi dress featuring a structured peplum waist, intricate gold embellishments, and a sleek figure-flattering silhouette — perfect for weddings, church, special events, and elegant celebrations.",
    sizes: ["S", "M", "L"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 18,
    name: "Blush Royale Embellished Pleated Midi Dress",
    price: 180000,
    oldPrice: 250000,
    categories: ["Women"],
    rating: 4.8,
    reviews: 1,
    stock: 5,
    bestSeller: false,
    images: [image42],
    description: "A graceful blush pink midi dress featuring a delicately embellished bodice, flowing pleated skirt, and statement gold buckle belt — designed for timeless elegance at weddings, parties, and special occasions.",
    sizes: ["M"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 19,
    name: "Ivory Luxe Pleated Two-Piece Set (Original Turkey)",
    price: 78000,
    oldPrice: 15000,
    categories: ["Women"],
    rating: 4.5,
    reviews: 12,
    stock: 5,
    bestSeller: false,
    images: [image43],
    description: "A refined white two-piece ensemble featuring a soft draped top and flowing pleated wide-leg pants — crafted in premium Turkish fabric for elegance, comfort, and timeless style.",
    sizes: ["S", "M", "L"],
    shipping: "Delivery within 3–5 days",
  },
  {
    id: 20,
    name: "Ruby Sport Luxe Two-Piece Lounge Set",
    price: 85000,
    oldPrice: 95000,
    categories: ["Women"],
    rating: 4.8,
    reviews: 15,
    stock: 5,
    bestSeller: true,
    images: [image44],  
    description: "A bold red sporty-chic two-piece set featuring a zip-front fitted top and relaxed wide-leg pants with contrast stripe details — perfect for stylish comfort and everyday slay.",
    sizes: ["L"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 21,
    name: "Blush Motion Colorblock Two-Piece Set",
    price: 80000,
    oldPrice: 120000,
    categories: ["Women"],
    rating: 4.7,
    reviews: 8,
    stock: 5,
    bestSeller: false,
    images: [image45],
    description: "A stylish pink and white colorblock two-piece set featuring a relaxed-fit top and matching wide-leg stripe pants — designed for comfort, confidence, and everyday chic.",
    sizes: ["S", "M", "L"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 22,
    name: "Monochrome Edge Sporty Two-Piece Set",
    price: 75000,
    oldPrice: 100000,
    categories  : ["Women"],
    rating: 4.9,
    reviews: 20,  
    stock: 5,
    bestSeller: true,
    images: [image46],
    description: "A sleek black and white two-piece set featuring a stripe-detailed top and matching wide-leg pants — designed for effortless style, comfort, and everyday versatility.",
    sizes: ["S", "M", "L"],
    shipping: "Delivery within 3–5 days"
  },
  {
    id: 23,
    name: "Premium Big Swiss White Dry Lace Fabric",
    price: 220000,
    oldPrice: 350000,
    categories: ["Fabrics"],
    rating: 4.8,
    reviews: 10,
    stock: 5,
    bestSeller: true,
    images: [image47, image48, image49, image50, image51, image52, image53],  
    description: "An elegant, high-quality white dry lace fabric featuring bold Swiss-inspired patterns — perfect for weddings, church outfits, traditional attire, and luxury occasion wear.",
    shipping: "Delivery within 3–5 days"
  }
];
export default products;








