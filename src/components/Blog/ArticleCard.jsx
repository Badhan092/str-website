import React from "react";
import Link from "next/link";

const ArticleCard = () => {
  const mainArticle = {
    img: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/9c55/live/643d85b0-6cfb-11f0-a946-676c1a094566.jpg.webp?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
    tags: ["World", "Politics"],
    title: "Trump to hit India with 25% tariffs - plus 'penalty' for trade with Russia",
    text: "The US will impose 25% tariffs on goods imported from India plus an unspecified penalty for buying Russian oil and weapons, President Donald Trump has saidPosting on his Truth Social platform, he said the measures would take effect from 1 August.",
    meta: "By Nikita Yadav | BBC News, Delhi — 30 July 2025",
    link: "https://www.bbc.com/news/articles/cz71w1dgl84o",
  };

  const smallCards = [
    {
      img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      title: "Markets Rally as Tech Stocks Lead Recovery",
      text: "Stocks climbed after upbeat earnings from several major tech companies, easing recession fears.",
      link: "/news/markets-recovery",
    },
    {
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      title: "Local Startup Raises $25M to Expand AI Platform",
      text: "The company plans to use the funds to grow engineering and launch new features next year.",
      link: "/news/ai-startup-funding",
    },
    {
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      title: "Health Officials Update Recommendations for Seasonal Vaccines",
      text: "New guidelines aim to increase vaccination rates among high-risk groups.",
      link: "/news/vaccine-update",
    },
    {
      img: "https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      title: "Art Biennale Draws Crowds with Immersive Installations",
      text: "Artists explore technology and identity through large-scale experiential works.",
      link: "/news/art-biennale",
    },
  ];

  return (
    <article className="hero">
      {/* <div className="heroTop">
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
      </div> */}

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
