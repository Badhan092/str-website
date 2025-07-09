const products = [
  {
    id: 1,
    image: "/img/products/1.png",
    title: "Fashion",
    description: "Stylish, breathable fabric for modern wear.",
    details:
      "Our fashion fabrics combine elegance and functionality to meet the demands of modern clothing brands and designers. Made from breathable and skin-friendly materials, they ensure all-day comfort while delivering a polished appearance. From casual t-shirts to high-end formal wear, these fabrics maintain color vibrancy, drape beautifully, and respond well to customization like dyeing and printing. Whether you're designing runway pieces or mass-market retail lines, our fashion textiles adapt seamlessly to every creative vision while upholding quality and sustainability standards.",
    categories: [
      {
        name: "Jacket",
        image: "/img/products/sub-cat/fashion/jacket.png",
      },
      {
        name: "Knit Bottoms",
        image: "/img/products/sub-cat/bottom.png",
      },
      {
        name: "Knit Tops",
        image: "/img/products/sub-cat/fashion/knit-top.png",
      },
      {
        name: "Knitwear",
        image: "/img/products/sub-cat/fashion/knitwear.png",
        description: "Warm knitwear for chilly days.",
      },
      {
        name: "Swimwear",
        image: "/img/products/sub-cat/swimwear.png",
      },
      {
        name: "Woven Tops",
        image: "/img/products/sub-cat/fashion/woven-top.png",
      },
      {
        name: "Woven Bottoms",
        image: "/img/products/sub-cat/woven-bottoms.png",
      },
      {
        name: "Denim",
        image: "/img/products/sub-cat/fashion/denim.png",
      },
    ],
  },

  {
    id: 2,
    image: "/img/products/2.png",
    title: "Workwear",
    description: "Tough, long-lasting fabric for daily use.",
    details:
      "Our workwear fabrics are engineered for environments where durability, safety, and resilience are essential. These fabrics are ideal for uniforms in industries like construction, manufacturing, automotive, and logistics. They offer resistance to tearing, abrasions, and high temperatures, all while remaining breathable and comfortable for extended shifts. Reinforced weaves, strong fibers, and anti-static properties make these fabrics compliant with industrial safety norms. With a range of textures and finishes, our workwear textiles meet both functional and branding requirements for your workforce.",
    categories: [],
  },
  {
    id: 3,
    image: "/img/products/3.png",
    title: "Home textiles",
    description: "Comfortable fabric for cozy living spaces.",
    details:
      "Our home textile collection brings comfort, color, and quality to your interiors. Designed for applications ranging from bedding and cushions to curtains and upholstery, these fabrics create a cozy and stylish home environment. They are available in a variety of textures—soft cottons, plush velvets, and breathable linens—to match both aesthetic and functional needs. Treated for fade resistance and ease of washing, they remain fresh and beautiful even with regular use. Whether you're decorating a hotel suite or a cozy family living room, our fabrics deliver timeless warmth and elegance.",
    categories: [],
  },
  {
    id: 4,
    image: "/img/products/4.png",
    title: "Healthcare",
    description: "Hygienic fabric for medical environments.",
    details:
      "The healthcare industry demands textiles that are not only comfortable but also hygienic and safe. Our medical-grade fabrics are developed with antimicrobial finishes, fluid resistance, and easy sanitization in mind. Ideal for hospital uniforms, surgical drapes, bedsheets, and privacy curtains, these fabrics support infection control while offering softness and durability. Designed to meet strict healthcare standards, they are tested for hypoallergenic properties, colorfastness after repeated washes, and resistance to harsh cleaning agents.",
    categories: [
      {
        name: "Shoe Cover",
        image: "/img/products/sub-cat/medical/1.jpg",
        description: "Non woven Anti slip fabricMedical & General Hygienic purpose",
      },
      {
        name: "Balaclava",
        image: "/img/products/sub-cat/medical/4.jpg",
        description: "Polypropylene FabricsLaboratory & Industrial Purpose",
      },
      {
        name: "Medical Apron",
        image: "/img/products/sub-cat/medical/3.jpg",
        description: "Polypropylene FabricsMedical & General Hygienic purpose",
      },
      {
        name: "Bouffant Cap",
        image: "/img/products/sub-cat/medical/5.jpg",
        description: "Non woven latex-free fabricMedical, General & Cosmetology",
      },
      {
        name: "Coverall",
        image: "/img/products/sub-cat/medical/2.jpg",
        description: "Polypropylene / Microporous Fabrics Medical & Laboratory purpose",
      },
      {
        name: "Labcoat",
        image: "/img/products/sub-cat/medical/7.jpg",
        description: "Polypropylene Fabrics Laboratory, Food & General Trade",
      },
      {
        name: "Beard Cover",
        image: "/img/products/sub-cat/medical/8.jpg",
        description: "Non woven latex-free fabric Clinical, Fishery & Food service",
      },
    ],
  },
  {
    id: 5,
    image: "/img/products/5.png",
    title: "Sportswear",
    description: "Lightweight fabric for athletes.",
    details:
      "Performance matters—and our sportswear fabrics deliver. Crafted for athletes and active lifestyles, these textiles feature moisture-wicking, odor control, and stretch recovery technologies. Whether used for gym wear, yoga gear, or professional sports uniforms, our fabrics ensure unrestricted movement and thermoregulation. Available in lightweight, breathable constructions with mesh or compression structures, they help athletes stay cool, dry, and focused. Our eco-line also includes sustainable athletic fabrics made from recycled polyester and organic cotton blends.",
    categories: [],
  },
  {
    id: 6,
    image: "/img/products/6.png",
    title: "Corporatewear",
    description: "Professional, breathable fabric for office wear.",
    details:
      "Our corporatewear textiles are designed to reflect professionalism, comfort, and brand identity. These fabrics are perfect for business suits, shirts, blouses, skirts, and uniforms. They offer wrinkle resistance, moisture management, and long-lasting color retention—ideal for employees working long hours in dynamic environments. Blended for ease of tailoring, our corporate fabrics are compatible with modern and classic officewear designs. They help companies create a cohesive visual identity while ensuring their staff look sharp and feel comfortable throughout the day.",
    categories: [],
  },
  {
    id: 7,
    image: "/img/products/8.png",
    title: "Footwear",
    description: "Flexible, breathable fabric crafted for comfort.",
    details:
      "Footwear requires materials that are strong yet soft, breathable yet protective. Our specialized footwear fabrics are tailored for linings, uppers, insoles, and reinforcement areas in casual and performance shoes. They offer flexibility, abrasion resistance, and moisture control—making them ideal for both lifestyle and athletic use. Anti-microbial treatments ensure freshness, while thermoregulation technology helps maintain foot comfort. Whether for sports brands or luxury shoes, our materials meet the highest demands of quality, comfort, and innovation.",
    categories: [],
  },
  {
    id: 8,
    image: "/img/products/7.png",
    title: "Jute & crafts",
    description: "Natural, textured fabric for handmade goods.",
    details:
      "Our jute and craft fabrics celebrate tradition, sustainability, and creativity. These natural fibers are biodegradable, sturdy, and rich in texture—ideal for handcrafted bags, decor, packaging, and promotional items. We work closely with artisans and eco-conscious brands to develop jute-based fabrics that blend rustic charm with modern applications. Available in plain, printed, or dyed forms, our jute collection supports environmental responsibility while empowering local craftsmanship. It's the perfect choice for businesses that value authenticity and green production.",
    categories: [
      {
        name: "Jute",
        image: "/img/products/sub-cat/jute/jute.jpg",
      },
      {
        name: "Bag",
        image: "/img/products/sub-cat/jute/bag.jpg",
      },
      {
        name: "Baskets",
        image: "/img/products/sub-cat/jute/basket.jpg",
        description: "Soft knit tops for everyday style.",
      },
      {
        name: "Jute Placemat",
        image: "/img/products/sub-cat/jute/jute-placement.jpg",
      },
      {
        name: "Crafts",
        image: "/img/products/sub-cat/jute/crafts.jpg",
      },
      {
        name: "Crafts Basket",
        image: "/img/products/sub-cat/jute/crafts-basket.jpg",
      },
      {
        name: "Crafts Placemat",
        image: "/img/products/sub-cat/jute/crafts-placemate.jpg",
      },
    ],
  },
];

export default products;
