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
    categories: [
      {
        name: "Workwear Hi Vis T shirts",
        image: "/img/products/sub-cat/workwear/1.jpg",
      },
      {
        name: "Workwear Jacket",
        image: "/img/products/sub-cat/workwear/2.jpg",
      },
      {
        name: "Workshop Uniform-Top",
        image: "/img/products/sub-cat/workwear/3.jpg",
      },
      {
        name: "Workshop Uniform-Bottom",
        image: "/img/products/sub-cat/workwear/4.jpg",
      },
      {
        name: "Softshell Outdoor Uniform",
        image: "/img/products/sub-cat/workwear/5.jpg",
      },
      {
        name: "Softshell Vest Workwear",
        image: "/img/products/sub-cat/workwear/6.jpg",
      },
      {
        name: "Unisex Softshell Uniform",
        image: "/img/products/sub-cat/workwear/7.jpg",
      },
      {
        name: "Workwear Uniform Shirts",
        image: "/img/products/sub-cat/workwear/8.jpg",
      },
      {
        name: "Workwear Hi Vis Polo shirts",
        image: "/img/products/sub-cat/workwear/9.jpg",
      },
      {
        name: "Hospital Wear Tunic",
        image: "/img/products/sub-cat/workwear/10.jpg",
      },
      // {
      //   name: "Healthcare Workwear",
      //   image: "/img/products/sub-cat/workwear/12.jpg",
      // },
      {
        name: "Medical Scrub Set - Woman",
        image: "/img/products/sub-cat/workwear/15.jpg",
      },
      {
        name: "Medical Apron",
        image: "/img/products/sub-cat/workwear/11.jpg",
      },
      {
        name: "Medical Uniform",
        image: "/img/products/sub-cat/workwear/13.jpg",
      },
      {
        name: "Medical Scrub Set - Women",
        image: "/img/products/sub-cat/workwear/14.jpg",
      },
    ],
  },
  {
    id: 3,
    image: "/img/products/6.png",
    title: "Corporatewear",
    description: "Professional, breathable fabric for office wear.",
    details:
      "Our corporatewear textiles are designed to reflect professionalism, comfort, and brand identity. These fabrics are perfect for business suits, shirts, blouses, skirts, and uniforms. They offer wrinkle resistance, moisture management, and long-lasting color retention—ideal for employees working long hours in dynamic environments. Blended for ease of tailoring, our corporate fabrics are compatible with modern and classic officewear designs. They help companies create a cohesive visual identity while ensuring their staff look sharp and feel comfortable throughout the day.",
    categories: [],
  },
  {
    id: 4,
    image: "/img/products/5.png",
    title: "Sportswear",
    description: "Lightweight fabric for athletes.",
    details:
      "Performance matters—and our sportswear fabrics deliver. Crafted for athletes and active lifestyles, these textiles feature moisture-wicking, odor control, and stretch recovery technologies. Whether used for gym wear, yoga gear, or professional sports uniforms, our fabrics ensure unrestricted movement and thermoregulation. Available in lightweight, breathable constructions with mesh or compression structures, they help athletes stay cool, dry, and focused. Our eco-line also includes sustainable athletic fabrics made from recycled polyester and organic cotton blends.",
    categories: [
      {
        name: "Mens Lightweight Hybrid Jacket",
        image: "/img/products/sub-cat/sportswear/1.jpg",
        description:
          "Fabric: Nylon striped 15d dope down 43 (91% polyamide 9% polyester), polarlite plain microgrid silver 215 (92% polyester 8% elastane) * Weight:299g",
      },
      {
        name: "Men’s Hybrid Softshell",
        image: "/img/products/sub-cat/sportswear/2.jpg",
        description:
          "Fabric: Nylon flexlite eco dwr 155 (88% polyamide 12% elastane), stormwall 3l 10k/35k recycled knit 120 (100% polyester) * Weight: 327g",
      },
      {
        name: "Full-Zip Men’s Wool Hoody",
        image: "/img/products/sub-cat/sportswear/3.jpg",
        description:
          "Fabric: Sarner pure 2L bonded 500 (50% Virgin Wool 20% polyamide * 28% viscose 2% elastane) * Weight: 900g",
      },
      {
        name: "Men’s Insulating Jacket",
        image: "/img/products/sub-cat/sportswear/4.jpg",
        description:
          "Fabric: Durastretch active 4-way eco dwr 123 bs (84% polyamide 16% elastane) / nylon windbreaker light 20d eco 48 bs (100% polyamide) * Weight: 315g",
      },
      {
        name: "Mens Cycling Jersey",
        image: "/img/products/sub-cat/sportswear/5.jpg",
        description: "Fabric: 100% Polyester",
      },
      {
        name: "Mens Cycling Jersey",
        image: "/img/products/sub-cat/sportswear/6.jpg",
        description: "Fabric: 100% Polyester",
      },
      {
        name: "Ladies Cycling Jersey",
        image: "/img/products/sub-cat/sportswear/7.jpg",
        description: "Fabric: 100% Polyester",
      },
      {
        name: "Ladies Cycling Jersey",
        image: "/img/products/sub-cat/sportswear/8.jpg",
        description: "Fabric: 100% Polyester",
      },
      {
        name: "Mens Cycling bibshorts",
        image: "/img/products/sub-cat/sportswear/9.jpg",
        description: "Fabric: 83% Polyamide 17% Elastane",
      },
      {
        name: "Cycling Shorts",
        image: "/img/products/sub-cat/sportswear/10.jpg",
        description: "Fabric: 87% Polyester 13% Elastane",
      },
      {
        name: "Women’s Over Shorts",
        image: "/img/products/sub-cat/sportswear/12.jpg",
        description: "Fabric: 90% Polyester, 10% Elastane",
      },
      {
        name: "Cycling Leggings",
        image: "/img/products/sub-cat/sportswear/11.jpg",
        description: "Fabric: 87% Polyester 13% Elatane",
      },
    ],
  },
  {
    id: 5,
    image: "/img/products/3.png",
    title: "Home textiles",
    description: "Comfortable fabric for cozy living spaces.",
    details:
      "Our home textile collection brings comfort, color, and quality to your interiors. Designed for applications ranging from bedding and cushions to curtains and upholstery, these fabrics create a cozy and stylish home environment. They are available in a variety of textures—soft cottons, plush velvets, and breathable linens—to match both aesthetic and functional needs. Treated for fade resistance and ease of washing, they remain fresh and beautiful even with regular use. Whether you're decorating a hotel suite or a cozy family living room, our fabrics deliver timeless warmth and elegance.",
    categories: [
      {
        name: "Bedsheet",
        image: "/img/products/sub-cat/home-textile/bed/1.jpg",

        subCategories: [
          {
            name: "Bedsheet",
            image: "/img/products/sub-cat/home-textile/bed/1.jpg",
            description: "Description: 300 TC Satin, Jacquard, Percale, * Digital print",
          },
          {
            name: "Bedsheet",
            image: "/img/products/sub-cat/home-textile/bed/2.jpg",
            description: "Description: 200 TC Cotton Percale with Printed * Floral Design",
          },
          {
            name: "Bedsheet",
            image: "/img/products/sub-cat/home-textile/bed/3.jpg",
            description: "Description: 200 TC Cotton Percale with Printed * Floral Design",
          },
          {
            name: "Bedsheet",
            image: "/img/products/sub-cat/home-textile/bed/4.jpg",
            description: "Description: 230 TC Egyptian Ctn. Non * iron finish",
          },
          {
            name: "Bedsheet",
            image: "/img/products/sub-cat/home-textile/bed/5.jpg",
            description: "Description: 200 TC Percale, Satin, * Jacquard, print",
          },
          {
            name: "Bedsheet",
            image: "/img/products/sub-cat/home-textile/bed/6.jpg",
            description: "Description: Jacquard, Dobby, Satin, Digital * Print, Tufting",
          },
          {
            name: "Bedsheet",
            image: "/img/products/sub-cat/home-textile/bed/7.jpg",
            description: "Description: Jacquard, Dobby, Satin, Digital * Print, Tufting",
          },
          {
            name: "Bedsheet",
            image: "/img/products/sub-cat/home-textile/bed/8.jpg",
            description: "Description: Jacquard, Egyptian, Garment dyed, * Digital print",
          },
        ],
      },
      {
        name: "Bathtowel",
        image: "/img/products/sub-cat/home-textile/towel/1.jpg",
        subCategories: [
          {
            name: "BATHTOWEL",
            image: "/img/products/sub-cat/home-textile/towel/1.jpg",
            description: "Description: 100% Cotton 650-800 GSM",
          },
          {
            name: "BATHTOWEL",
            image: "/img/products/sub-cat/home-textile/towel/2.jpg",
            description: "Description: 100% Cotton 500-600 GSM",
          },
          {
            name: "BATHTOWEL",
            image: "/img/products/sub-cat/home-textile/towel/3.jpg",
            description: "Description: 100% Cotton 600-700 GSM",
          },
          {
            name: "BATHTOWEL",
            image: "/img/products/sub-cat/home-textile/towel/4.jpg",
            description: "Description: 100% Cotton 400-600 GSM",
          },
          {
            name: "BATHTOWEL",
            image: "/img/products/sub-cat/home-textile/towel/5.jpg",
            description: "Description: 100% Cotton Jacquard 400-600 GSM",
          },
          {
            name: "BATHTOWEL",
            image: "/img/products/sub-cat/home-textile/towel/6.jpg",
            description: "Description: 100% Cotton Printed 300-500 GSM",
          },
          {
            name: "HOSPITALITY TOWEL",
            image: "/img/products/sub-cat/home-textile/towel/7.jpg",
            description: "Des: 100% Cotton washing durable 300-600 GSM",
          },
          {
            name: "KITCHEN TEA TOWEL",
            image: "/img/products/sub-cat/home-textile/towel/8.jpg",
            description: "Description: 100% Cotton 165 GSM (45x60 CM)",
          },
        ],
      },
      {
        name: "Kitchen Apron",
        image: "/img/products/sub-cat/home-textile/apron.jpg",
        subCategories: [
          {
            name: "KITCHEN APRON",
            image: "/img/products/sub-cat/home-textile/apron.jpg",
            description: "Description: 100% Cotton 220 GSM (63x84 cm)",
          },
        ],
      },
      {
        name: "Table Cloth",
        image: "/img/products/sub-cat/home-textile/tablecloth.jpg",
        subCategories: [
          {
            name: "TABLE CLOTH",
            image: "/img/products/sub-cat/home-textile/tablecloth.jpg",
            description: "Description: 90% Cotton 10% Jute 210 GSM (145X250 CM)",
          },
        ],
      },
      {
        name: "Runner",
        image: "/img/products/sub-cat/home-textile/runner.jpg",
        subCategories: [
          {
            name: "RUNNER",
            image: "/img/products/sub-cat/home-textile/runner.jpg",
            description: "Description: 85% Cotton 15% Jute 290 GSM (35X150 CM)",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    image: "/img/products/4.png",
    title: "Healthcare",
    description: "Hygienic fabric for medical environments.",
    details:
      "The healthcare industry demands textiles that are not only comfortable but also hygienic and safe. Our medical-grade fabrics are developed with antimicrobial finishes, fluid resistance, and easy sanitization in mind. Ideal for hospital uniforms, surgical drapes, bedsheets, and privacy curtains, these fabrics support infection control while offering softness and durability. Designed to meet strict healthcare standards, they are tested for hypoallergenic properties, colorfastness after repeated washes, and resistance to harsh cleaning agents.",
    categories: [
      {
        name: "Medical Apron",
        image: "/img/products/sub-cat/medical/3.jpg",
        description: "Polypropylene Fabrics * Medical & General Hygienic purpose",
      },
      {
        name: "Bouffant Cap",
        image: "/img/products/sub-cat/medical/5.jpg",
        description: "Non woven latex-free fabric * Medical, General & Cosmetology",
      },
      {
        name: "Beard Cover",
        image: "/img/products/sub-cat/medical/8.jpg",
        description: "Non woven latex-free fabric * Clinical, Fishery & Food service",
      },
      {
        name: "Surgical Apron",
        image: "/img/products/sub-cat/medical/6.jpg",
        description: "Non woven latex-free fabric * Clinical, Fishery & Food service",
      },
      {
        name: "Balaclava",
        image: "/img/products/sub-cat/medical/4.jpg",
        description: "Polypropylene Fabrics * Laboratory & Industrial Purpose",
      },
      {
        name: "Shoe Cover",
        image: "/img/products/sub-cat/medical/1.jpg",
        description: "Non woven Anti slip fabric * Medical & General Hygienic purpose",
      },

      {
        name: "Coverall",
        image: "/img/products/sub-cat/medical/2.jpg",
        description: "Polypropylene / Microporous Fabrics * Medical & Laboratory purpose",
      },
      {
        name: "Labcoat",
        image: "/img/products/sub-cat/medical/7.jpg",
        description: "Polypropylene Fabrics * Laboratory, Food & General Trade",
      },
    ],
  },
  {
    id: 7,
    image: "/img/products/8.png",
    title: "Footwear & Bag",
    description: "Flexible, breathable fabric crafted for comfort.",
    details:
      "Footwear requires materials that are strong yet soft, breathable yet protective. Our specialized footwear fabrics are tailored for linings, uppers, insoles, and reinforcement areas in casual and performance shoes. They offer flexibility, abrasion resistance, and moisture control—making them ideal for both lifestyle and athletic use. Anti-microbial treatments ensure freshness, while thermoregulation technology helps maintain foot comfort. Whether for sports brands or luxury shoes, our materials meet the highest demands of quality, comfort, and innovation.",
    categories: [],
  },
  {
    id: 8,
    image: "/img/products/7.png",
    title: "Jute & Crafts",
    description: "Natural, textured fabric for handmade goods.",
    details:
      "Our jute and craft fabrics celebrate tradition, sustainability, and creativity. These natural fibers are biodegradable, sturdy, and rich in texture—ideal for handcrafted bags, decor, packaging, and promotional items. We work closely with artisans and eco-conscious brands to develop jute-based fabrics that blend rustic charm with modern applications. Available in plain, printed, or dyed forms, our jute collection supports environmental responsibility while empowering local craftsmanship. It's the perfect choice for businesses that value authenticity and green production.",
    categories: [
      {
        name: "Jute Bag",
        image: "/img/products/sub-cat/jute/1.jpg",

        subCategories: [
          {
            name: "Market Bag",
            image: "/img/products/sub-cat/jute/cat/1.jpg",
            description:
              "Material: 18x18 laminated jute & vegetable tanned leather * Size: 44x34x20cm, Handle-33x2cm",
          },
          {
            name: "Lunch Bag",
            image: "/img/products/sub-cat/jute/cat/2.jpg",
            description:
              "Material: 18x18 laminated jute & vegetable tanned leather * Size: 24x32x14cm, handle-33x2cm",
          },
          {
            name: "Standard Market Bag",
            image: "/img/products/sub-cat/jute/cat/3.jpg",
            description:
              "Material: 18x18 yarn dyed laminated jute & vegetable tanned leather * Size: 38x33x14cm, handle-75x2cm",
          },
          {
            name: "Market Bag",
            image: "/img/products/sub-cat/jute/cat/4.jpg",
            description:
              "Material: 18x18 laminated jute with embo and vegetable tanned leather * Size: 44x34x20cm, Handle-33x2cm",
          },
          {
            name: "Market Bag",
            image: "/img/products/sub-cat/jute/cat/5.jpg",
            description:
              "Material: 18x18 laminated jute with leopard print and vegetable tanned leather * Size: 44x34x20cm, Handle-33x2cm",
          },
          {
            name: "Market Bag",
            image: "/img/products/sub-cat/jute/cat/6.jpg",
            description:
              "Material: 18x18 yarn dyed laminated jute and vegetable tanned leather * Size: 44x34x20cm, Handle-33x2cm",
          },
          {
            name: "Shopping Bag",
            image: "/img/products/sub-cat/jute/cat/11.jpg",
            description:
              "Material: 12x12 natural jute fabric, without lamination, 4% starch coating * Size: 35x40x20cm",
          },
          {
            name: "Shopping Bag",
            image: "/img/products/sub-cat/jute/cat/12.jpg",
            description:
              "Material: 15x15 jute fabric, without lamination, 4% starch coating * Size: 38x45x20cm",
          },
          {
            name: "Wine Tote",
            image: "/img/products/sub-cat/jute/cat/10.jpg",
            description:
              "Material: 12x12 natural jute fabric, without lamination, 4% starch coating * Size: 35x16cm",
          },
          {
            name: "Wine Bag",
            image: "/img/products/sub-cat/jute/cat/9.jpg",
            description: "Material: 15x15 jute fabric with lamination * Size: 35x34x12cm",
          },

          {
            name: "Ladies Fashion Bag",
            image: "/img/products/sub-cat/jute/cat/7.jpg",
            description: "Material: hand braided jute * Size: 31x50x29cm",
          },
          {
            name: "Woman Basket Bag",
            image: "/img/products/sub-cat/jute/cat/8.jpg",
            description: "Material: hand braided jute * Size: 35x50x31cm",
          },
        ],
      },
      {
        name: "Cotton bag",
        image: "/img/products/sub-cat/jute/2.jpg",

        subCategories: [
          {
            name: "Canvas Tote",
            image: "/img/products/sub-cat/jute/cat/13.jpg",
            description: "Material: 380 GSM cotton canvas * Size: 38x32x10cm",
          },
          {
            name: "Canvas Tote",
            image: "/img/products/sub-cat/jute/cat/14.jpg",
            description: "Material: 380 GSM cotton canvas * Size: 42x38x14cm",
          },
          {
            name: "Shoulder Bag",
            image: "/img/products/sub-cat/jute/cat/15.jpg",
            description:
              "Material: 260 GSM cotton canvas, peach finish * Size: 36x44cm, bottom 10cm",
          },
          {
            name: "Shopping Bag",
            image: "/img/products/sub-cat/jute/cat/16.jpg",
            description: "Material: 380 GSM cotton canvas * Size: 40x37x14cm",
          },
          {
            name: "Girls Tote Bag",
            image: "/img/products/sub-cat/jute/cat/17.jpg",
            description: "Material: 180 GSM cotton * Size: 40x35x5cm",
          },
          {
            name: "Tote Bag",
            image: "/img/products/sub-cat/jute/cat/18.jpg",
            description: "Material: 140 GSM cotton * Size: 40x38cm",
          },
          {
            name: "Shopping Bag",
            image: "/img/products/sub-cat/jute/cat/19.jpg",
            description: "Material:130 GSM cotton * Size: 42x38cm",
          },
          {
            name: "Shopping Bag",
            image: "/img/products/sub-cat/jute/cat/20.jpg",
            description: "Material: Material:140 GSM BCI cotton * Size: 42x38cm",
          },
        ],
      },
      {
        name: "Placemat",
        image: "/img/products/sub-cat/jute/3.jpg",
        subCategories: [
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/35.jpg",
            description: "Material: Kaisa Grass & plastic * Size: 45cm-15cm",
          },
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/36.jpg",
            description: "Material:  Sea Grass & Jute * Size: 38cm X 29cm",
          },
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/37.jpg",
            description: "Material: Jute Rope * Size: 45cm-15cm",
          },
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/38.jpg",
            description: "Material: Sea Grass & Jute * Size: 40cm X 35cm - 15cmX10cm",
          },
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/39.jpg",
            description: "Material: Hand braided Sea Grass * Size: 45cm-15cm",
          },
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/40.jpg",
            description: "Material: Sea Grass & Jute * Size: 45cm-15cm",
          },
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/41.jpg",
            description: "Material: Jute RopeMulti Colored Jute  * Size: 45cm-15cm",
          },
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/34.jpg",
            description: "Material: Jute Rope * Size: 35cm-15cm",
          },
        ],
      },
      {
        name: "Basket",
        image: "/img/products/sub-cat/jute/4.jpg",

        subCategories: [
          {
            name: "Cosmetic Storage Box",
            image: "/img/products/sub-cat/jute/cat/21.jpg",
            description: "Material: Jute * Size: L: 20x25cm, M: 15x20cm",
          },
          {
            name: "Jute & Cotton Dorri Basket",
            image: "/img/products/sub-cat/jute/cat/22.jpg",
            description: "Material: Jute * Size: L: 16x16 cm, M: 13x13cm",
          },
          {
            name: "Jute & Cotton Storage Basket",
            image: "/img/products/sub-cat/jute/cat/24.jpg",
            description: "Material: Jute * Size: L: 20x20cm, M:16x16cm, S: 12x12cm",
          },
          {
            name: "Decorative Basket",
            image: "/img/products/sub-cat/jute/cat/27.jpg",
            description: "Material: Jute and Seagrass * Size: L: 20x20cm, M:18x18cm, S: 16x16cm",
          },
          {
            name: "Woven Kaisa Grass Basket",
            image: "/img/products/sub-cat/jute/cat/28.jpg",
            description: "Material: Kaisa * Size: L: 35x7cm, M:30x7cm, S: 26x6cm",
          },
          {
            name: "Braided Handy Basket",
            image: "/img/products/sub-cat/jute/cat/29.jpg",
            description: "Material: Seagrass * Size: 35x35x28cm",
          },
          {
            name: "Decorative Stitich  Basket",
            image: "/img/products/sub-cat/jute/cat/30.jpg",
            description: "Material: Seagrass * Size: L: 20x20cm, M:16x16cm, S: 12x12cm",
          },
          {
            name: "Seagrass  Basket",
            image: "/img/products/sub-cat/jute/cat/31.jpg",
            description: "Material: Seagrass * Size: L: 16x16x8cm, M:12x12x7cm, S: 10x10x7cm",
          },
          {
            name: "Leather Handle  Basket",
            image: "/img/products/sub-cat/jute/cat/32.jpg",
            description: "Material: Seagrass * Size: L: 19x12cm, M:15x12cm, S: 13x10cm",
          },
          {
            name: "Seagrass Circular  Basket",
            image: "/img/products/sub-cat/jute/cat/33.jpg",
            description: "Material: Seagrass * Size: L: 25x7cm, M:20x7cm, S: 15x5cm",
          },

          {
            name: "Storage Basket Set",
            image: "/img/products/sub-cat/jute/cat/23.jpg",
            description: "Material: Jute",
          },
          {
            name: "jute Basket",
            image: "/img/products/sub-cat/jute/cat/26.jpg",
            description: "Material: Jute * Size- 20X20cm, 16X16cm, 13X13cm",
          },
          {
            name: "Plant Basket",
            image: "/img/products/sub-cat/jute/cat/25.jpg",
            description: "Material: Jute Rope",
          },
        ],
      },
    ],
  },
];

export default products;
