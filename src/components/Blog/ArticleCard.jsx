import React from "react";
import Link from "next/link";

const ArticleCard = () => {
  const mainArticle = {
    img: "https://textiletoday.com.bd/storage/uploads/2025/7/3054d5hDvr3vb73iOv8k.jpeg",
    tags: ["World", "Textile"],
    title:
      "BGMEA Leaders and MS Executives discuss growth and collaboration in bangladesh RMG sector",
    text: "On 2nd July, Directors of the Bangladesh Garment Manufacturers and Exporters Association (BGMEA), Nafis-Ud-Doula and Shah Rayeed Chowdhury, met with Marks & Spencer (M&S) team The discussion focused on advancing the ready-made garment (RMG) industry and exploring opportunities for expanding M&S's business in Bangladesh.The meeting provided a platform for both sides to delve into key issues and the immense growth potential within the Bangladeshi apparel sector.",
    meta: "ByvDesk Report | July 3, 2025 11:32 AM",
    link: "https://www.textiletoday.com.bd/bgmea-leaders-and-ms-executives-discuss-growth-and-collaboration-in-bangladesh-rmg-sector",
  };

  const smallCards = [
    {
      img: "/img/history/textile.png",
      title: "𝐒𝐭𝐞𝐩 𝐢𝐧𝐭𝐨 𝐭𝐡𝐞 𝐄𝐩𝐢𝐜𝐞𝐧𝐭𝐞𝐫 𝐨𝐟 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡 𝐓𝐞𝐱𝐭𝐢𝐥𝐞 & 𝐀𝐩𝐩𝐚𝐫𝐞𝐥 𝐑𝐞𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧!",
      text: "Be a part of CEMS-Global USA’s Textile Series of Exhibitions - Exhibit at South Asia’s Oldest and Most Prestigious B2B Textile Exhibition for the past 24 years!",
      link: "https://www.facebook.com/cemstextileseries/videos/709528662013549/?mibextid=D5vuiz&rdid=lQf2qiYJsqDuNbWY#",
    },
    {
      img: "https://www.textiletoday.com.bd/storage/uploads/2025/7/6027uVPZZozCm8KLka0z.jpeg",
      title:
        "Spanish fashion giant Mango has appointed Helena Helmersson, former CEO of H&M Group, to its Board",
      text: "Directors as an independent member—marking a bold step in its push to strengthen corporate governance and global leadership as part of its ambitious 4E Strategic Plan.",
      link: "https://www.textiletoday.com.bd/mango-appoints-former-hm-ceo-helena-helmersson-to-its-board",
    },
    {
      img: "https://textiletoday.com.bd/storage/uploads/2022/12/BGMEA-and-RAJUK.jpg",
      title: "BGMEA urges RAJUK to allocate land at Purbachal for apparel club",
      text: "BGMEA President Faruque Hassan requested RAJUK to allocate land at Purbachal to build an apparel club to facilitate the meeting and recreation of foreign nationals working for global...",
      link: "https://www.textiletoday.com.bd/bgmea-urges-rajuk-allocate-land-purbachal-apparel-club",
    },
    {
      img: "https://textiletoday.com.bd/storage/uploads/2024/1/32170TttWdpmFvYSJrNg.jpeg",
      title: "Bangladesh RMG spreading its footprint across the world",
      text: "BGMEA President Faruque Hassan highlighted Bangladesh's garment export performance in the world market in the last 15 years (2009-2023).",
      link: "https://www.textiletoday.com.bd/bangladesh-rmg-spreading-its-footprint-across-the-world",
    },
  ];

  return (
    <article className="hero">
      <div className="heroTop">
        <Link href={mainArticle.link} className="heroImage">
          <img src={mainArticle.img} alt={mainArticle.title} />
        </Link>
        <div className="heroContent">
          <div className="tags">
            {mainArticle.tags.map((tag, idx) => (
              <span className="tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
          <Link href={mainArticle.link}>
            <h1>{mainArticle.title}</h1>
          </Link>
          <p className="lead">{mainArticle.text}</p>
          <div className="meta">{mainArticle.meta}</div>
        </div>
      </div>

      <div className="cards">
        {smallCards.map((card, index) => (
          <Link href={card.link} key={index} className="card">
            <img src={card.img} alt={card.title} />
            <div className="info">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default ArticleCard;
