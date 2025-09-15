import React from "react";
import NewsEventCard from "@/components/Events/NewsEventCard";
import ArticleCard from "@/components/Blog/ArticleCard";
import AsideCard from "@/components/Blog/AsideCard";

const Index = () => {
  return (
    <>
      <div className="container top-space">
        <NewsEventCard />

        <h2 className="section-title top-space">News</h2>
        <div className="news-container">
          <ArticleCard />
          {/* <AsideCard /> */}
        </div>
      </div>
    </>
  );
};

export default Index;
