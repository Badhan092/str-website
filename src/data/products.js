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
        name: "Denim",
        image: "/img/products/sub-cat/fashion/denim/denim.jpg",

        subCategories: [
          {
            name: "Men's Denim Casual Pant",
            image: "/img/products/sub-cat/fashion/denim/1.jpg",
            description: "Fabric: 99%Cotton 1%Elastane 11.50 OZ Denim",
          },
          {
            name: "Men's Denim Casual Pant",
            image: "/img/products/sub-cat/fashion/denim/2.jpg",
            description: "Fabric: 99%Cotton 1%Elastane 11.50 OZ Denim",
          },
          {
            name: "Men's Denim Casual Pant",
            image: "/img/products/sub-cat/fashion/denim/3.jpg",
            description: "Fabric: 98%Cotton 2%Elastane 11.00 OZ Denim",
          },
          {
            name: "Men's Overdye Casual Pant",
            image: "/img/products/sub-cat/fashion/denim/4.jpg",
            description: "Fabric: 100%Cotton 12.0 OZ Denim",
          },
          {
            name: "Mens Bermuda Denim Short",
            image: "/img/products/sub-cat/fashion/denim/9.jpg",
            description: "Fabric: 100% Cotton 11.0 OZ Denim",
          },
          {
            name: "Mens Bermuda Denim Short",
            image: "/img/products/sub-cat/fashion/denim/10.jpg",
            description: "Fabric: 99% Cotton 1% Elastane 11.0 OZ Denim",
          },
          {
            name: "Men's Denim Short",
            image: "/img/products/sub-cat/fashion/denim/11.jpg",
            description: "Fabric: 98% Cotton 2% Elastane 11 OZ Denim",
          },
          {
            name: "Mens Bermuda Denim Short",
            image: "/img/products/sub-cat/fashion/denim/12.jpg",
            description: "Fabric: 100% Cotton 10.5 OZ Denim",
          },
          {
            name: "Ladies High Rise Relaxed Denim",
            image: "/img/products/sub-cat/fashion/denim/5.jpg",
            description: "Fabric: 99%Cotton 1%Elastane 11.50 OZ Denim",
          },
          {
            name: "Ladies Slim Fit Denim",
            image: "/img/products/sub-cat/fashion/denim/6.jpg",
            description: "Fabric: 78%Cotton 20%Polyester * 2% Elastane 9.25 OZ Denim",
          },
          {
            name: "Ladies Mid Rise Bootcut Jeans",
            image: "/img/products/sub-cat/fashion/denim/7.jpg",
            description: "Fabric: 99% Cotton 1% Elastane 10 OZ Denim",
          },
          {
            name: "Ladies High Rise Skinny Jeans",
            image: "/img/products/sub-cat/fashion/denim/8.jpg",
            description: "Fabric: 80% Cotton 18% * Elastane 2% Elastane 8.75 OZ Denim",
          },
          {
            name: "Ladies High Rise Short",
            image: "/img/products/sub-cat/fashion/denim/13.jpg",
            description: "Fabric: 80% Cotton 18% Polyester 2% * Elastane 9.50 OZ Denim",
          },
          {
            name: "Ladies Low Rise Short",
            image: "/img/products/sub-cat/fashion/denim/14.jpg",
            description: "Fabric: 98% Cotton 2% Elastane 9.50 OZ Denim",
          },
          {
            name: "Ladies Low Rise Short",
            image: "/img/products/sub-cat/fashion/denim/15.jpg",
            description: "Fabric: 98% Cotton 2% Elastane 9.50 OZ Denim",
          },
          {
            name: "Ladies High Rise Skirt",
            image: "/img/products/sub-cat/fashion/denim/16.jpg",
            description: "Fabric: 100% Cotton 11 OZ Denim",
          },
          {
            name: "Ladies High Rise Balloon Skirt",
            image: "/img/products/sub-cat/fashion/denim/17.jpg",
            description: "Fabric: 100% Cotton 8.50 OZ denim",
          },
          {
            name: "MLadies High Rise Front Slit Skirt",
            image: "/img/products/sub-cat/fashion/denim/18.jpg",
            description: "Fabric: 100% Cotton 11 OZ Denim",
          },
          {
            name: "Ladies Mini Skirt",
            image: "/img/products/sub-cat/fashion/denim/19.jpg",
            description: "Fabric: 99% Cotton 1% Elastane 10 OZ Denim",
          },
          {
            name: "Ladies Pleated Overdyed Skirt",
            image: "/img/products/sub-cat/fashion/denim/20.jpg",
            description: "Fabric: 100% Cotton 11 OZ Denim",
          },
          {
            name: "Girls Basic Flare Jeans",
            image: "/img/products/sub-cat/fashion/denim/21.jpg",
            description: "Fabric: 98% Cotton 2% Elastane 9.5 OZ Denim",
          },
          {
            name: "Boys Cargo Long Pant",
            image: "/img/products/sub-cat/fashion/denim/22.jpg",
            description: "Fabric: 100% Cotton 10.0 OZ Denim",
          },
          {
            name: "Girls Slim Long Pant",
            image: "/img/products/sub-cat/fashion/denim/23.jpg",
            description: "Fabric: 98% Cotton 2% Elastane 9.75 OZ Denim",
          },
          {
            name: "Boys Long Straight Denim",
            image: "/img/products/sub-cat/fashion/denim/24.jpg",
            description: "Fabric: 100% Cotton 10.0 OZ Denim",
          },
        ],
      },
      {
        name: "Knitwear",
        image: "/img/products/sub-cat/fashion/knitwear-tops/knitware-tops.jpg",
        subCategories: [
          {
            name: "Ladies Printed Tops",
            image: "/img/products/sub-cat/fashion/knitwear/1.jpg",
            description: "Details- 100% Cotton S/J fabric",
          },
          {
            name: "Ladies Sleeveless Tee",
            image: "/img/products/sub-cat/fashion/knitwear/2.jpg",
            description: "Details: Cotton/Viscose Blend Knit fabric",
          },
          {
            name: "Ladies Y/Dyed Polo Shirt",
            image: "/img/products/sub-cat/fashion/knitwear/3.jpg",
            description: "Details: 100% Cotton Knit Fabric",
          },
          {
            name: "Ladies Dress",
            image: "/img/products/sub-cat/fashion/knitwear/4.jpg",
            description: "Details: 100% Cotton S/J Knit fabric",
          },
          {
            name: "Ladies V- neck Tank Top",
            image: "/img/products/sub-cat/fashion/knitwear/5.jpg",
            description: "Details: 100% Cotton S/J Knit Fabric",
          },
          {
            name: "Ladies SS Round Bottom",
            image: "/img/products/sub-cat/fashion/knitwear/6.jpg",
            description: "Details: 100% Cotton S/J Knit fabric",
          },
          {
            name: "Girls Casual Knit Dress",
            image: "/img/products/sub-cat/fashion/knitwear/7.jpg",
            description: "Details: 100% Cotton S/J Printed knit Fabric",
          },
          {
            name: "Ladies Sleeveless Asymmetrical Tops",
            image: "/img/products/sub-cat/fashion/knitwear/8.jpg",
            description: "Details: Cotton/Viscose Blend Knit Fabric",
          },
          {
            name: "Ladies Round Neck T- Shirt",
            image: "/img/products/sub-cat/fashion/knitwear/9.jpg",
            description: "Details: 100% Cotton S/J Knit Fabric",
          },
          {
            name: "Ladies Tank Top",
            image: "/img/products/sub-cat/fashion/knitwear/10.jpg",
            description: "Fabric: 100% Cotton Y/Dyed Rib",
          },
          {
            name: "Ladies Tank Top",
            image: "/img/products/sub-cat/fashion/knitwear/11.jpg",
            description: "Details: 100% Cotton S/J Knit Fabric",
          },
          {
            name: "Ladies Hood Long Dress",
            image: "/img/products/sub-cat/fashion/knitwear/12.jpg",
            description: "Details: 100% Cotton Terry Fabric",
          },
          {
            name: "Ladies Tank Top",
            image: "/img/products/sub-cat/fashion/knitwear/13.jpg",
            description: "Details: 100% Cotton Printed S/J Fabric",
          },
          {
            name: "Ladies Cargo Jogger Pant",
            image: "/img/products/sub-cat/fashion/knitwear/14.jpg",
            description: "Details: 100% Cotton Brushed Terry",
          },
          {
            name: "Girls Capri Pant",
            image: "/img/products/sub-cat/fashion/knitwear/15.jpg",
            description: "Details: 100% Cotton S/J Printed Knit Fabric",
          },
          {
            name: "Girls Long Pant",
            image: "/img/products/sub-cat/fashion/knitwear/16.jpg",
            description: "Fabric: 100% Cotton S/J Fabric",
          },
          {
            name: "Ladies Short Pant",
            image: "/img/products/sub-cat/fashion/knitwear/17.jpg",
            description: "Details: Cotton/Polyester Blend Knit Fabric",
          },
        ],
      },
      {
        name: "Woven Bottoms",
        image: "/img/products/sub-cat/fashion/woven-bottoms/wovenbottoms.jpg",

        subCategories: [
          {
            name: "Mens Chino Long Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/1.jpg",
            description: "Details: 100% Cotton Twill, * Heavy Enzyme Wash",
          },
          {
            name: "Mens Cargo Long Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/2.jpg",
            description: "Details: 98% Cotton 2% Elastane Twill, Enzyme Wash",
          },
          {
            name: "Mens Cargo Jogger Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/3.jpg",
            description: "Details: 98% Cotton 2% Elastane Twill, Enzyme wash",
          },
          {
            name: "Mens Cargo staraight fit Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/4.jpg",
            description: "Details: 100% Cotton Twill, Enzyme wash",
          },
          {
            name: "Mens Cargo Short Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/5.jpg",
            description: "Details: 100% Cotton Twill, * Enzyme wash",
          },
          {
            name: "Mens Chino Short Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/6.jpg",
            description: "Details: 100% Cotton Twill, * Heavy Enzyme wash",
          },
          {
            name: "Boys Cargo Short Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/7.jpg",
            description: "Details: 100% Cotton Poplin Checked Print, Normal Wash",
          },
          {
            name: "Boys Chino Short Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/8.jpg",
            description: "Details: 98% Cotton 2% Elastane Checked Print, Enzyme wash",
          },

          {
            name: "Ladies High Waist Paperbag Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/9.jpg",
            description: "Details: 73% Polyester / 22% * Viscose / 5% Elastane, Normal Wash",
          },
          {
            name: "Ladies Chino Long Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/10.jpg",
            description: "Details: 98% Cotton 2% Elastane Fine Twill, Enzyme wash",
          },
          {
            name: "Ladies Straight Relaxed Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/11.jpg",
            description: "Details: 78% Polyester / 20%  * Viscose / 2% Elastane",
          },
          {
            name: "Ladies Casual Elastic waist band Trousers",
            image: "/img/products/sub-cat/fashion/woven-bottoms/12.jpg",
            description: "Details: 65% Polyester / 35% Viscose, Normal wash",
          },
          {
            name: "Girls Pleated Skirt",
            image: "/img/products/sub-cat/fashion/woven-bottoms/13.jpg",
            description: "Details: 100% Cotton 14 W Corduroy Fabric",
          },
          {
            name: "Kids Long Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/14.jpg",
            description: "Details: 98% Cotton 2% Elastane 21W Corduroy Fabric",
          },
          {
            name: "Boys Long Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/15.jpg",
            description: "Details: 100% Cotton Twill, Enzyme Wash",
          },
          {
            name: "Boys Chino Long Pant",
            image: "/img/products/sub-cat/fashion/woven-bottoms/16.jpg",
            description: "Details: 100% Cotton Twill, Enzyme Wash",
          },
        ],
      },
      {
        name: "Woven Tops",
        image: "/img/products/sub-cat/fashion/woven-tops/woventops.jpg",
        subCategories: [
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/1.jpg",
            description: "Fabric: 100% Cotton or Cotton/Polyester Oxford Weave",
          },
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/2.jpg",
            description: "Fabric: 100% Cotton or Cotton/Polyester Plain Weave",
          },
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/3.jpg",
            description: "Fabric: 100% Cotton or Cotton/Polyester, Chambray Plain Weave",
          },
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/4.jpg",
            description: "Fabric: 100% Cotton or Cotton/Polyester, checked Plain Weave",
          },
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/5.jpg",
            description: "Fabric: 100% Cotton Poplin, checked * Plain weave",
          },
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/6.jpg",
            description: "Fabric: 100% Cotton Flannel Brushed checked shirts",
          },
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/7.jpg",
            description: "Fabric: 100% Cotton Medium * wash denim",
          },
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/8.jpg",
            description: "Fabric: 100% Cotton tinted * wash denim",
          },
          {
            name: "Men's Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/9.jpg",
            description: "Fabric: 100% Cotton Poplin, * checked Plain weave",
          },
          {
            name: "Ladies Vent Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/10.jpg",
            description: "Fabric: 98% Cotton 2% Elastane Poplin, Plain weave",
          },
          {
            name: "Ladies denim Tunic Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/11.jpg",
            description: "Fabric: Cotton/Tencel Light wash denim",
          },
          {
            name: "Ladies Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/12.jpg",
            description: "Fabric: 98% Cotton 2% Elastane Dark wash denim",
          },
          {
            name: "Ladies V-neck Pleated Blouse",
            image: "/img/products/sub-cat/fashion/woven-tops/13.jpg",
            description: "Description: Cotton/Polyester Curved hem sleeveless blouse",
          },
          {
            name: "Ladies Oversized Button-up Shirt",
            image: "/img/products/sub-cat/fashion/woven-tops/14.jpg",
            description: "Description: 80% Polyester 20% Silk satin dropped shoulder shirt",
          },
          {
            name: "Ladies Button-Front Shirt Dress ",
            image: "/img/products/sub-cat/fashion/woven-tops/15.jpg",
            description: "Description: 100% Cotton V-neck Empire waist office wear",
          },
          {
            name: "Ladies Striped Short-Sleeve Shirt Dress",
            image: "/img/products/sub-cat/fashion/woven-tops/16.jpg",
            description: "Description: Cotton/Linen Shirt Dress with Belt",
          },
        ],
      },
      {
        name: "Jacket",
        image: "/img/products/sub-cat/fashion/jacket.jpg",
        subCategories: [
          {
            name: "Men's Denim Jacket",
            image: "/img/products/sub-cat/fashion/jacket/1.jpg",
            description: "Details: 100% Cotton Denim, Light Washed",
          },
          {
            name: "Men's Denim Jacket",
            image: "/img/products/sub-cat/fashion/jacket/2.jpg",
            description: "Details: 100% Cotton Denim, Rinse Washed",
          },
          {
            name: "Men's Denim Sherpa Jacket",
            image: "/img/products/sub-cat/fashion/jacket/3.jpg",
            description: "Details: 100% Cotton Denim, Tinted washed",
          },
          {
            name: "Men's Twill Sherpa Jacket",
            image: "/img/products/sub-cat/fashion/jacket/4.jpg",
            description: "Details: 100% Cotton heavy weight Twill",
          },
          {
            name: "Men's quilted puffer jacket",
            image: "/img/products/sub-cat/fashion/jacket/5.jpg",
            description: "Details: 100% Polyester shell and lining",
          },
          {
            name: "Men's quilted puffer jacket",
            image: "/img/products/sub-cat/fashion/jacket/6.jpg",
            description: "Details: 100% Polyester shell and lining",
          },
          {
            name: "Men's Bomber jacket",
            image: "/img/products/sub-cat/fashion/jacket/8.jpg",
            description: "Details: 100% Polyester shell and lining",
          },
          {
            name: "Men's Utility jacket",
            image: "/img/products/sub-cat/fashion/jacket/7.jpg",
            description: "Details: Cotton/Polyester shell and Polyester lining",
          },
          {
            name: "Ladies Sherpa Jacket",
            image: "/img/products/sub-cat/fashion/jacket/13.jpg",
            description: "Details: 98% Cotton 2% Elastane 21W Corduroy",
          },
          {
            name: "Ladies Washed Denim Jacket",
            image: "/img/products/sub-cat/fashion/jacket/14.jpg",
            description: "Details: 98% Cotton 2% Elastane Tinted ",
          },
          {
            name: "Ladies Denim Vest",
            image: "/img/products/sub-cat/fashion/jacket/15.jpg",
            description: "Details: 100% Cotton Dark Washed Denim",
          },
          {
            name: "Ladies Cropped Denim Jacket",
            image: "/img/products/sub-cat/fashion/jacket/16.jpg",
            description: "Details: 100% Cotton Mid washed loose fit Denim",
          },
          {
            name: "Ladies Quilted Puffed Jacket",
            image: "/img/products/sub-cat/fashion/jacket/9.jpg",
            description: "Details: 100% Polyester shell and Lining",
          },
          {
            name: "Girls Matt Finish Puffed Jacket",
            image: "/img/products/sub-cat/fashion/jacket/10.jpg",
            description: "Details: 100% Polyester shell and Lining ",
          },
          {
            name: "Girls Quilted Puffed Vest",
            image: "/img/products/sub-cat/fashion/jacket/11.jpg",
            description: "Details: 100% Polyester Shell and Lining",
          },
          {
            name: "Girls Overdyed Jacket",
            image: "/img/products/sub-cat/fashion/jacket/12.jpg",
            description: "Details: 100% Cotton Twill and CVC Lining",
          },
        ],
      },
      {
        name: "Sweater",
        image: "/img/products/sub-cat/fashion/sweater.jpg",
        subCategories: [
          {
            name: "FINE GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/1.jpg",
            description: "Gauge: 12-14",
          },
          {
            name: "FINE GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/2.jpg",
            description: "Gauge: 12-14",
          },
          {
            name: "FINE GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/3.jpg",
            description: "Gauge: 12-14",
          },
          {
            name: "FINE GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/4.jpg",
            description: "Gauge: 14-16",
          },
          {
            name: "LOW GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/5.jpg",
            description: "Gauge: 3-5",
          },
          {
            name: "LOW GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/6.jpg",
            description: "Gauge: 3-5",
          },
          {
            name: "LOW GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/7.jpg",
            description: "Gauge: 4-5",
          },
          {
            name: "LOW GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/8.jpg",
            description: "Gauge: 5-7",
          },
          {
            name: "LOW GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/9.jpg",
            description: "Gauge: 5-7",
          },
          {
            name: "LOW GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/10.jpg",
            description: "Gauge: 5-7",
          },
          {
            name: "MEDIUM GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/11.jpg",
            description: "Gauge: 7-9",
          },
          {
            name: "MEDIUM GAUGE SWEATER",
            image: "/img/products/sub-cat/fashion/sweater/12.jpg",
            description: "Gauge: 8-10",
          },
        ],
      },
      {
        name: "Swimwear",
        image: "/img/products/sub-cat/fashion/swimwear.jpg",
        subCategories: [
          {
            name: "Mens Swim Short",
            image: "/img/products/sub-cat/fashion/swimwear/1.jpg",
            description: "Fabric: 100% Polyster",
          },
          {
            name: "Mens Swim Short",
            image: "/img/products/sub-cat/fashion/swimwear/2.jpg",
            description: "Fabric: 100% Polyster",
          },
          {
            name: "Mens Swim Short",
            image: "/img/products/sub-cat/fashion/swimwear/3.jpg",
            description: "Fabric: 100% Polyster",
          },
          {
            name: "Mens Swim Short",
            image: "/img/products/sub-cat/fashion/swimwear/4.jpg",
            description: "Fabric: 100% Polyster",
          },
          {
            name: "Kids Swim Short",
            image: "/img/products/sub-cat/fashion/swimwear/5.jpg",
            description: "Fabric: 100% Polyster",
          },
          {
            name: "Kids Swim Short",
            image: "/img/products/sub-cat/fashion/swimwear/6.jpg",
            description: "Fabric: 100% Polyster",
          },
          {
            name: "Kids Swim Short",
            image: "/img/products/sub-cat/fashion/swimwear/7.jpg",
            description: "Fabric: 100% Polyster",
          },
          {
            name: "Kids Swim Short",
            image: "/img/products/sub-cat/fashion/swimwear/8.jpg",
            description: "Fabric: 100% Polyster",
          },
        ],
      },
      {
        name: "Lingarie",
        image: "/img/products/sub-cat/fashion/lingarie.jpg",
        subCategories: [
          {
            name: "Underware Top",
            image: "/img/products/sub-cat/fashion/lingarie/1.jpg",
            description: "Composition: 88% Nylon, 12% Elastane",
          },
          {
            name: "Underware Top & Bottoms",
            image: "/img/products/sub-cat/fashion/lingarie/2.jpg",
            description: "Composition: 90% Polyester, 10% Spandex",
          },
          {
            name: "Underware Top",
            image: "/img/products/sub-cat/fashion/lingarie/3.jpg",
            description: "Composition: 88% Nylon, 12% Elastane",
          },
          {
            name: "Underware Top",
            image: "/img/products/sub-cat/fashion/lingarie/4.jpg",
            description: "Composition: 90% Polyster,10% Spandex",
          },
          {
            name: "Ladies Hipster",
            image: "/img/products/sub-cat/fashion/lingarie/5.jpg",
            description: "Fabric: 95% Cotton, 5% Elastane S/J, 160 GSM",
          },
          {
            name: "Ladies Brief",
            image: "/img/products/sub-cat/fashion/lingarie/6.jpg",
            description: "Fabric: 95% Cotton, 5% Elastane S/J, 160 GSM",
          },
          {
            name: "Ladies Brief",
            image: "/img/products/sub-cat/fashion/lingarie/7.jpg",
            description: "Fabric: 95% Cotton, 5% Elastane S/J, 160 GSM",
          },
          {
            name: "Kids Underware Bottoms",
            image: "/img/products/sub-cat/fashion/lingarie/11.jpg",
            description: "Composition: 95% Cotton, 5% Elastane S/J, 150 GSM",
          },
          {
            name: "Underware Bottoms",
            image: "/img/products/sub-cat/fashion/lingarie/8.jpg",
            description: "Composition: 100% Cotton S/J, 160 GSM",
          },
          {
            name: "Underware Bottoms",
            image: "/img/products/sub-cat/fashion/lingarie/9.jpg",
            description: "Composition: 95% Cotton, 5% Elastane S/J, 160 GSM",
          },
          {
            name: "Kids Underware Bottoms",
            image: "/img/products/sub-cat/fashion/lingarie/10.jpg",
            description: "Composition: 100% Cotton, S/J, 140 GSM",
          },
          {
            name: "Kids Underware Bottoms",
            image: "/img/products/sub-cat/fashion/lingarie/12.jpg",
            description: "Composition: 95% Cotton, 5% Elastane S/J, 160 GSM",
          },
          {
            name: "Girls Underware Top",
            image: "/img/products/sub-cat/fashion/lingarie/13.jpg",
            description: "Composition: 80% Cotton, 15% Polyster, 5% Elastnae, S/J, 160 GSM",
          },
          {
            name: " Girls BRA",
            image: "/img/products/sub-cat/fashion/lingarie/14.jpg",
            description: "Composition: 95% Cotton, 5% Elastane S/J, 160 GSM",
          },
          {
            name: "Girls BRA",
            image: "/img/products/sub-cat/fashion/lingarie/15.jpg",
            description: "Composition: 95% Cotton, 5% Elastane S/J, 160 GSM",
          },
          {
            name: "Underware Top",
            image: "/img/products/sub-cat/fashion/lingarie/16.jpg",
            description: "Composition: 67% Cotton, 28% Polyster, 5% Elastnae, S/J, 180 GSM",
          },
        ],
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
    categories: [
      {
        name: "Women",
        image: "/img/products/sub-cat/corporateware/women/1.jpg",

        subCategories: [
          {
            name: "Single Breasted Coat/ Slim Fit Bottom",
            image: "/img/products/sub-cat/corporateware/women/1.jpg",
            description: "Fabric: 73% Polyester / 22% Viscose / 5% Elastane",
          },
          {
            name: "Single Breasted 4 Button Coat/Slim Fit Bottom",
            image: "/img/products/sub-cat/corporateware/women/2.jpg",
            description: "Fabric: 73% Polyester / 22% Viscose / 5% Elastane",
          },
          {
            name: "Pleated Slim Shirt/Straight Fit Bottom",
            image: "/img/products/sub-cat/corporateware/women/7.jpg",
            description: "Fabric: 3% Elastane/65% Polyester 35% Viscose",
          },
          {
            name: "Single Breasted Coat/ Flare bottom",
            image: "/img/products/sub-cat/corporateware/women/8.jpg",
            description: "Fabric: 65% Polyester 33% Viscose 2% Elastane",
          },
          {
            name: "Single Breasted Coat/skirt",
            image: "/img/products/sub-cat/corporateware/women/3.jpg",
            description: "Fabric: Polyester/Cotton/Elastane",
          },
          {
            name: "Single Breasted Coat/Skirt",
            image: "/img/products/sub-cat/corporateware/women/4.jpg",
            description: "Fabric: 73% Polyester / 22% Viscose / 5% Elastane",
          },
          {
            name: "Single Breasted Coat/Skirt",
            image: "/img/products/sub-cat/corporateware/women/5.jpg",
            description: "Fabric: 78% Polyester / 20% Viscose / 2% Elastane",
          },
          {
            name: "Stripe Shirt/Chino Pant",
            image: "/img/products/sub-cat/corporateware/women/6.jpg",
            description: "Fabric: 100% Cotton/97% Cotton 3% Elastane",
          },
          {
            name: "Pleated Slim Shirt/Skirt",
            image: "/img/products/sub-cat/corporateware/women/9.jpg",
            description: "Fabric: 98% Cotton 2% Elastane/65% Polyester 35% Viscose",
          },
          {
            name: "Pleated Shirt/Slim Fit Bottom",
            image: "/img/products/sub-cat/corporateware/women/10.jpg",
            description: "Fabric: 98% Cotton 2% Elastane/81% Polyester 17% Viscose 2% Elastane",
          },
          {
            name: "Semi Sleeve/Skinny Fit Bottom",
            image: "/img/products/sub-cat/corporateware/women/11.jpg",
            description: "Fabric: 98% Cotton 2% Elastane/98% Cotton 2% Elastane",
          },
          {
            name: "Side Binding Coat/Skirt",
            image: "/img/products/sub-cat/corporateware/women/12.jpg",
            description: "Fabric: 81% Polyester / 17% Viscose / * 2% Elastane",
          },
        ],
      },
      {
        name: "Men",
        image: "/img/products/sub-cat/corporateware/man/13.jpg",

        subCategories: [
          {
            name: "Single Breasted Suit",
            image: "/img/products/sub-cat/corporateware/man/13.jpg",
            description: "Fabric: 73% Polyester / 22% Viscose / 5% Elastane",
          },
          {
            name: "Single Breasted Suit",
            image: "/img/products/sub-cat/corporateware/man/14.jpg",
            description: "Fabric: 73% Polyester / 22% Viscose / 5% Elastane",
          },
          {
            name: "Single Breasted Suit",
            image: "/img/products/sub-cat/corporateware/man/15.jpg",
            description: "Fabric: 81% Polyester / 17% Viscose / 2% Elastane",
          },
          {
            name: "Single Breasted Suit",
            image: "/img/products/sub-cat/corporateware/man/16.jpg",
            description: "Fabric: 78% Polyester / 20% Viscose / 2% Elastane",
          },
          {
            name: "Single Breasted Suit",
            image: "/img/products/sub-cat/corporateware/man/17.jpg",
            description: "Fabric: 73% Polyester / 22% Viscose / 5% Elastane",
          },
          {
            name: "Single Breasted Suit",
            image: "/img/products/sub-cat/corporateware/man/18.jpg",
            description: "Fabric: 65% Polyester 35% Viscose",
          },
          {
            name: "Single Breasted Suit",
            image: "/img/products/sub-cat/corporateware/man/19.jpg",
            description: "Fabric: 65% Polyester 35% Viscose",
          },
          {
            name: "Single Breasted 5 Button Front waistcoat/Formal Shirt",
            image: "/img/products/sub-cat/corporateware/man/20.jpg",
            description: "Fabric: 65% Polyester 35% Viscose/100% Cotton",
          },
        ],
      },
    ],
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
        image: "/img/products/sub-cat/home-textile/apron/3.jpg",
        subCategories: [
          {
            name: "Kitchen Apron",
            image: "/img/products/sub-cat/home-textile/apron/1.jpg",
            description: "Description: 100% Cotton 220 GSM (63x84 cm)",
          },
          {
            name: "Kitchen Apron",
            image: "/img/products/sub-cat/home-textile/apron/2.jpg",
            description: "Description: 100% Cotton 220 GSM (63x84 cm)",
          },
          {
            name: "Kitchen Apron",
            image: "/img/products/sub-cat/home-textile/apron/3.jpg",
            description: "Description: 100% Cotton 220 GSM (63x84 cm)",
          },
        ],
      },
      {
        name: "Table Cloth",
        image: "/img/products/sub-cat/home-textile/tablecloth/1.jpg",
        subCategories: [
          {
            name: "Table Cloth",
            image: "/img/products/sub-cat/home-textile/tablecloth/1.jpg",
            description: "Description: 90% Cotton 10% Jute 210 GSM (145X250 CM)",
          },
          {
            name: "Table Cloth",
            image: "/img/products/sub-cat/home-textile/tablecloth/2.jpg",
            description: "Description: 90% Cotton 10% Jute 210 GSM (145X250 CM)",
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
    categories: [
      {
        name: "Footwear",
        image: "/img/products/sub-cat/shoe&bag/shoe/1.jpg",

        subCategories: [
          {
            name: "Derby Shoe",
            image: "/img/products/sub-cat/shoe&bag/shoe/1.jpg",
            description:
              "Details: Cow Leather for Upper & Insole. Cow Lining Leather & Fabric for Lining * Outsole: Pre-fabricated Rubber",
          },
          {
            name: "Derby Casual Shoe",
            image: "/img/products/sub-cat/shoe&bag/shoe/2.jpg",
            description:
              "Details: Cow Tan Leather for Upper & Insole. Cow Lining Leather & Fabric for Lining * Outsole: Pre-fabricated Rubber",
          },
          {
            name: "Hybrid Derby Sneakers",
            image: "/img/products/sub-cat/shoe&bag/shoe/3.jpg",
            description:
              "Details: Cow Tan Leather for Upper & Insole. Cow Lining Leather & Fabric for Lining * Outsole: Moulded Rubber",
          },
          {
            name: "Chukka Boots (Ankle length)",
            image: "/img/products/sub-cat/shoe&bag/shoe/4.jpg",
            description:
              "Details: Cow Leather for Upper & Insole. Cow Lining Leather & Fabric for Lining * Outsole: Pre-fabricated Moulded Rubber",
          },
          {
            name: "Ladies Zip up Ankle Boot",
            image: "/img/products/sub-cat/shoe&bag/shoe/5.jpg",
            description: "Details: Upper Cow Leather, Synthetic Lining & TPR Outsole",
          },
          {
            name: "Ladies Ankle Boot",
            image: "/img/products/sub-cat/shoe&bag/shoe/6.jpg",
            description: "Details: Upper Cow Leather, Synthetic & Leather Lining, TPR Outsole",
          },
          {
            name: "Ladies Mid High Boot",
            image: "/img/products/sub-cat/shoe&bag/shoe/7.jpg",
            description: "Details: Upper Cow Leather, Synthetic Lining & Buffalo Outsole",
          },
          {
            name: "Ladies Knee High Boot",
            image: "/img/products/sub-cat/shoe&bag/shoe/8.jpg",
            description: "Details: Upper Cow Leather, Synthetic Lining & TPR Outsole",
          },
          {
            name: "Slip on Sneakers",
            image: "/img/products/sub-cat/shoe&bag/shoe/9.jpg",
            description: "Details: Upper Fly Knit, Mesh Lining & Phylon Outsole",
          },
          {
            name: "Retro Runner Sneaker",
            image: "/img/products/sub-cat/shoe&bag/shoe/10.jpg",
            description: "Details: Upper PU & Nylon Cloth, Mesh Lining, EVA & TPR Outsole",
          },
          {
            name: "Low-Top Lifestyle Sneaker",
            image: "/img/products/sub-cat/shoe&bag/shoe/11.jpg",
            description: "DUpper PU & Mesh, Mesh Lining &  * TPR Outsole",
          },
          {
            name: "Combat Boot",
            image: "/img/products/sub-cat/shoe&bag/shoe/12.jpg",
            description: "Details: Upper Leather & Mesh, Mesh Lining, EVA & Rubber Outsole",
          },
        ],
      },
      {
        name: "Bag",
        image: "/img/products/sub-cat/shoe&bag/bag/bag.jpg",
        subCategories: [
          {
            name: "Luxury Backpack",
            image: "/img/products/sub-cat/shoe&bag/bag/1.jpg",
            description: "Material: Leather",
          },
          {
            name: "City Backpack",
            image: "/img/products/sub-cat/shoe&bag/bag/2.jpg",
            description: "Material: Leather",
          },
          {
            name: "Hybrid Leather Laptop Bag",
            image: "/img/products/sub-cat/shoe&bag/bag/3.jpg",
            description: "Material: Leather",
          },
          {
            name: "Satchel Leather bag",
            image: "/img/products/sub-cat/shoe&bag/bag/4.jpg",
            description: "Material: Leather",
          },
          {
            name: "Ladies Barrel Bag",
            image: "/img/products/sub-cat/shoe&bag/bag/5.jpg",
            description: "Material: Leather",
          },
          {
            name: "Ladies Structured Satchel",
            image: "/img/products/sub-cat/shoe&bag/bag/6.jpg",
            description: "Material: Pebbled Leather",
          },
          {
            name: "Ladies Leather Tote",
            image: "/img/products/sub-cat/shoe&bag/bag/7.jpg",
            description: "Material: Pebbled Leather",
          },
          {
            name: "Ladies Crossbody Bag",
            image: "/img/products/sub-cat/shoe&bag/bag/8.jpg",
            description: "Materials: Suede & leather",
          },
          {
            name: "Ladies Baguette Bag",
            image: "/img/products/sub-cat/shoe&bag/bag/10.jpg",
            description: "Material: Leather",
          },
          {
            name: "Ladies crescent bag",
            image: "/img/products/sub-cat/shoe&bag/bag/11.jpg",
            description: "Material: Leather",
          },
          {
            name: "Ladies Satchel handbag",
            image: "/img/products/sub-cat/shoe&bag/bag/12.jpg",
            description: "Material: Leather",
          },
          {
            name: "Ladies Bucket bag",
            image: "/img/products/sub-cat/shoe&bag/bag/13.jpg",
            description: "Material: Leather",
          },
          {
            name: "Leather clutch wallet",
            image: "/img/products/sub-cat/shoe&bag/bag/14.jpg",
            description: "Material: Leather",
          },
          {
            name: "Wristlet clutch",
            image: "/img/products/sub-cat/shoe&bag/bag/15.jpg",
            description: "Material: Leather",
          },
          {
            name: "Zip-Around Wallet",
            image: "/img/products/sub-cat/shoe&bag/bag/16.jpg",
            description: "Material: Leather",
          },
          {
            name: "Leather Mini Wallet",
            image: "/img/products/sub-cat/shoe&bag/bag/17.jpg",
            description: "Materials: Suede & leather",
          },
        ],
      },
      {
        name: "Waist Belt",
        image: "/img/products/sub-cat/shoe&bag/belt/belt.jpg",
        subCategories: [
          {
            name: "Waist belt",
            image: "/img/products/sub-cat/shoe&bag/belt/1.jpg",
            description: "Material- Cow Leather",
          },
          {
            name: "Waist belt",
            image: "/img/products/sub-cat/shoe&bag/belt/2.jpg",
            description: "Material- Cow Leather",
          },
          {
            name: "Waist belt",
            image: "/img/products/sub-cat/shoe&bag/belt/3.jpg",
            description: "Material- Cow Leather",
          },
          {
            name: "Waist belt",
            image: "/img/products/sub-cat/shoe&bag/belt/4.jpg",
            description: "Material- Cow Leather",
          },
          {
            name: "Waist belt",
            image: "/img/products/sub-cat/shoe&bag/belt/5.jpg",
            description: "Material- Cow Leather",
          },
          {
            name: "Waist belt",
            image: "/img/products/sub-cat/shoe&bag/belt/6.jpg",
            description: "Material- Cow Leather",
          },
          {
            name: "Waist belt",
            image: "/img/products/sub-cat/shoe&bag/belt/7.jpg",
            description: "Material- Cow Leather",
          },
          {
            name: "Waist belt",
            image: "/img/products/sub-cat/shoe&bag/belt/8.jpg",
            description: "Material- Cow Leather",
          },
        ],
      },
    ],
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
            image: "/img/products/sub-cat/jute/cat/36.jpg",
            description: "Material: Kaisa Grass & plastic * Size: 45cm-15cm",
          },
          {
            name: "Placemat",
            image: "/img/products/sub-cat/jute/cat/35.jpg",
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
