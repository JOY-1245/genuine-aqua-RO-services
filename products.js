const PRODUCTS = [
  {
    "id": "water-pia",
    "name": "Water PIA",
    "category": "Domestic RO",
    "price": "₹12,500",
    "originalPrice": "₹14,500",
    "description": "Experience the luxury of pure perfection. Premium domestic RO water purifier with modern blue-accent cabinet design.",
    "features": [
      "10 L Storage Capacity",
      "Luxury cabinet design with sleek aesthetics",
      "Multi-stage RO + UV + UF filtration",
      "Fully automatic operation (Auto-start/shutoff)"
    ],
    "image": "assets/products/water_pia.jpg"
  },
  {
    "id": "aqua-grid",
    "name": "AQUA GRID",
    "category": "Domestic RO",
    "price": "₹10,500",
    "originalPrice": "₹12,500",
    "description": "Simple & appealing high-efficiency water purifier featuring fine quality filtration and compact wall-mountable design.",
    "features": [
      "10 L Storage Capacity",
      "Simple and appealing sleek body",
      "Fine quality multi-stage purification",
      "Wall-mountable space-saving design"
    ],
    "image": "assets/products/aqua_grid.jpg"
  },
  {
    "id": "aqua-nine",
    "name": "AQUA NINE",
    "category": "Domestic RO",
    "price": "₹13,500",
    "originalPrice": "₹14,500",
    "description": "Modern design water purifier with excellent decorative graphics, smart digital display, and attractive premium tap.",
    "features": [
      "10 L Storage Capacity",
      "Smart digital display interface",
      "Excellent decorative graphical front panel",
      "Attractive premium tap design"
    ],
    "image": "assets/products/aqua_nine.jpg"
  },
  {
    "id": "glory-flip",
    "name": "Glory & Flip",
    "category": "Domestic RO",
    "price": "₹13,500",
    "originalPrice": "₹14,500",
    "description": "Premium Aqua Glory series featuring an easy detachable storage tank, wall-mount convenience, and advanced 7-stage filtration.",
    "features": [
      "13 L Storage Capacity",
      "Easy detachable tank for simple cleaning",
      "Advanced 7-stage filtration system",
      "Modern wall-mount body design"
    ],
    "image": "assets/products/glory_flip.jpg"
  },
  {
    "id": "aqua-9090",
    "name": "AQUA 9090",
    "category": "Domestic RO",
    "price": "₹14,500",
    "originalPrice": "₹15,500",
    "description": "Smart LED-equipped water purifier built with a heavy food-grade cabinet, invisible screw design, and quick installation setup.",
    "features": [
      "13 L Storage Capacity",
      "Smart LED indicators for tank status",
      "Heavy-duty food-grade cabinet",
      "Invisible screw clean aesthetics"
    ],
    "image": "assets/products/aqua_9090.jpg"
  },
  {
    "id": "lx-two",
    "name": "LX TWO",
    "category": "Domestic RO",
    "price": "₹12,500",
    "originalPrice": "₹12,500",
    "description": "Ultra-modern, sleek rectangular designer purifier available in multiple stunning metallic and pastel color variants.",
    "features": [
      "5 L Storage Capacity",
      "Futuristic rectangular designer cabinet",
      "Premium titanium series finishes",
      "Multiple color variants to match modern kitchens"
    ],
    "image": "assets/products/lx_two.jpg"
  },
  {
    "id": "dolphin-era",
    "name": "Dolphin ERA",
    "category": "Domestic RO",
    "price": "₹7,500",
    "originalPrice": "₹8,500",
    "description": "Compact, reliable, and budget-friendly Dolphin series water purifier in a beautiful Aqua Green accent color.",
    "features": [
      "9 L Storage Capacity",
      "A beginning of a new era in home purification",
      "Classic Dolphin design with LED indicators",
      "Multi-stage Reverse Osmosis system"
    ],
    "image": "assets/products/dolphin_era.jpg"
  },
  {
    "id": "lexzon",
    "name": "Lexzon",
    "category": "Domestic RO",
    "price": "₹12,000",
    "originalPrice": "₹12,500",
    "description": "A new range of stylish transparent-blue cabinets featuring multi-stage filtration and copper-enrichment options.",
    "features": [
      "10 L Storage Capacity",
      "Elegant semi-transparent blue cabinet",
      "Inbuilt active copper filter technology",
      "Compact kitchen-friendly dimensions"
    ],
    "image": "assets/products/lexzon.jpg"
  },
  {
    "id": "aqua-kainet",
    "name": "Aqua KAINET",
    "category": "Domestic RO",
    "price": "₹13,500",
    "originalPrice": "₹14,500",
    "description": "Experience purity at its finest. Premium designer water purifiers featuring Marbella, Luxor, and Royal series textured graphic bodies.",
    "features": [
      "10 L Storage Capacity",
      "Stunning Marbella marble and Royal textured finishes",
      "Integrated Smart LED indicator panel",
      "Advanced RO membrane technology"
    ],
    "image": "assets/products/aqua_kainet.jpg"
  },
  {
    "id": "aqua-2090",
    "name": "AQUA 2090",
    "category": "Domestic RO",
    "price": "₹12,500",
    "originalPrice": "₹14,500",
    "description": "Advanced technology RO + Copper + Alkaline purifier featuring a detachable storage tank and unique elegant design.",
    "features": [
      "10 L Storage Capacity",
      "Advanced RO + Active Copper + Alkaline filters",
      "Unique elegant aesthetic design",
      "Detachable tank for easy washing"
    ],
    "image": "assets/products/aqua_2090.jpg"
  },
  {
    "id": "aqua-extreme",
    "name": "AQUA EXTREME",
    "category": "Domestic RO",
    "price": "₹13,500",
    "originalPrice": "₹15,500",
    "description": "High-capacity domestic RO water purifier with transparent component viewing window and white storage tank.",
    "features": [
      "15 L Storage Capacity",
      "Transparent top cabinet for filter viewing",
      "Heavy-duty booster pump & high-flow membrane",
      "Food-grade durable ABS cabinet"
    ],
    "image": "assets/products/aqua_extreme.jpg"
  },
  {
    "id": "aqua-innovica",
    "name": "AQUA INNOVICA",
    "category": "Domestic RO",
    "price": "₹15,500",
    "originalPrice": "₹16,500",
    "description": "Redefining design and health with Zinc + Copper + Alkaline purification technology inside a dust-proof sleek dark cabinet.",
    "features": [
      "10 L Storage Capacity",
      "Zinc + Active Copper + Alkaline mineral infusion",
      "Sleek dust-proof closed body design",
      "Smart LED power & tank indicators"
    ],
    "image": "assets/products/aqua_innovica.jpg"
  },
  {
    "id": "aqua-xl",
    "name": "AQUA XL",
    "category": "Domestic RO",
    "price": "₹12,500",
    "originalPrice": "₹13,500",
    "description": "Beautiful, elegant, and smart water purification system designed for wall-mounting with 7-stage RO+TDS technology.",
    "features": [
      "12 L Storage Capacity",
      "7-stage RO + TDS water purification",
      "Wall-mounted modern model with elegant blue glass front",
      "Healthy Water for Healthy Life assurance"
    ],
    "image": "assets/products/aqua_xl.jpg"
  },
  {
    "id": "purosis",
    "name": "Purosis",
    "category": "Domestic RO",
    "price": "₹15,000",
    "originalPrice": "₹16,500",
    "description": "Redefining purity with advanced Puroaqua RO+ALK Alkaline Technology in a premium black minimal design.",
    "features": [
      "9 L Storage Capacity",
      "Puroaqua RO+ALK Alkaline technology",
      "Premium minimalist matte black styling",
      "Active TDS balancer & mineral enrichment"
    ],
    "image": "assets/products/purosis.jpg"
  },
  {
    "id": "apple-alive",
    "name": "Apple Alive",
    "category": "Domestic RO",
    "price": "₹10,500",
    "originalPrice": "₹12,500",
    "description": "Apple design water purifier featuring a clean white cabinet with a smart 'ON FILTER' indicator and stylish geometric graphics.",
    "features": [
      "10 L Storage Capacity",
      "ON FILTER indicator light",
      "Clean white cabinet with modern geometric prints",
      "Efficient Reverse Osmosis system"
    ],
    "image": "assets/products/apple_alive.jpg"
  },
  {
    "id": "whale-aqua",
    "name": "Whale Aqua",
    "category": "Domestic RO",
    "price": "₹16,500",
    "originalPrice": "₹17,500",
    "description": "High-capacity semi-commercial water purifier boasting an impressive 25-litre storage tank and fully automatic operations.",
    "features": [
      "25 L Storage Capacity",
      "High-capacity Reverse Osmosis (RO) filtration",
      "Fully automatic operation with auto-shutoff",
      "Perfect for large households or small offices"
    ],
    "image": "assets/products/whale_aqua.jpg"
  },
  {
    "id": "mars-aqua",
    "name": "MARS AQUA",
    "category": "Domestic RO",
    "price": "₹9,500",
    "originalPrice": "₹10,500",
    "description": "Sleek, modern 9-litre Reverse Osmosis water purifier in a beautiful matte grey/black cabinet design.",
    "features": [
      "9 L Storage Capacity",
      "Modern minimalist grey/black cabinet",
      "Multi-stage Reverse Osmosis filtration",
      "Auto-start and Auto-shutoff features"
    ],
    "image": "assets/products/mars_aqua.jpg"
  },
  {
    "id": "aqua-jade",
    "name": "AQUA JADE",
    "category": "Domestic RO",
    "price": "₹10,500",
    "originalPrice": "₹11,500",
    "description": "Safe & healthy 10-litre water purifier with an advanced Reverse Osmosis system in a beautiful Aqua Green accent.",
    "features": [
      "10 L Storage Capacity",
      "Safe & Healthy drinking water guarantee",
      "Reliable Reverse Osmosis (RO) system",
      "Sleek and transparent Aqua Green tank design"
    ],
    "image": "assets/products/aqua_jade.jpg"
  },
  {
    "id": "aqua-touch",
    "name": "AQUA TOUCH",
    "category": "Domestic RO",
    "price": "₹10,500",
    "originalPrice": "₹11,500",
    "description": "Made of 100% food-grade ABS plastic, featuring a convenient LED indicator panel and a charming floral aesthetic base.",
    "features": [
      "10 L Storage Capacity",
      "100% food-grade durable ABS plastic body",
      "Integrated dual LED indicators for system status",
      "Charming white base decorated with floral graphics"
    ],
    "image": "assets/products/aqua_touch.jpg"
  },
  {
    "id": "aqua-lilly",
    "name": "AQUA Lilly",
    "category": "Domestic RO",
    "price": "₹10,500",
    "originalPrice": "₹11,500",
    "description": "The customer's best choice since 2015. Easy to install wall-mounted RO system with a stunning blue wave front.",
    "features": [
      "10 L Storage Capacity",
      "Wall-mounted modern space-saving model",
      "Superior quality multi-stage filter elements",
      "Stunning blue wave decorative cabinet"
    ],
    "image": "assets/products/aqua_lilly.jpg"
  },
  {
    "id": "aqua-sonnet",
    "name": "AQUA SONNET",
    "category": "Domestic RO",
    "price": "₹11,500",
    "originalPrice": "₹13,500",
    "description": "World-class 12-litre water purification system with advanced technology, featuring a clean transparent-blue cabinet.",
    "features": [
      "12 L Storage Capacity",
      "World-class Reverse Osmosis (RO+UV+UF) filtration",
      "Convenient wall-mounted configuration",
      "Pure & Safe certified quality parts"
    ],
    "image": "assets/products/sonnet.jpg"
  },
  {
    "id": "hi-flo",
    "name": "Hi-Flo",
    "category": "Domestic RO",
    "price": "₹10,500",
    "originalPrice": "₹12,500",
    "description": "High-efficiency water purification system featuring advanced multi-stage filtration for clean, healthy water.",
    "features": [
      "10 L Storage Capacity",
      "Vibrant and durable cabinet design",
      "Advanced Reverse Osmosis (RO) filtration system",
      "High flow rate for instant pure water access"
    ],
    "image": "assets/products/hi_flo.jpg"
  },
  {
    "id": "aqua-jil",
    "name": "JIL",
    "category": "Domestic RO",
    "price": "₹11,500",
    "originalPrice": "₹12,500",
    "description": "Sleek and modern water purifier with a robust cabinet and copper technology for enriched drinking water.",
    "features": [
      "11 L Storage Capacity",
      "Active Copper technology infusion",
      "Leak-proof strong & durable storage tank",
      "Premium Reverse Osmosis system with clean aesthetics"
    ],
    "image": "assets/products/jil.jpg"
  },
  {
    "id": "seven-x",
    "name": "Seven X and Venus Aqua",
    "category": "Domestic RO",
    "price": "₹9,500",
    "originalPrice": "₹10,500",
    "description": "Clean, healthy, and safe drinking water with the most advanced water filter system, featuring a wall-mountable durable design.",
    "features": [
      "9 L Storage Capacity",
      "Wall-mountable space-saving configuration",
      "Durable and leak-proof storage tank",
      "Advanced multi-stage Reverse Osmosis filtration"
    ],
    "image": "assets/products/seven_x.jpg"
  }
];
