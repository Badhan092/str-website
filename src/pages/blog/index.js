import React from "react";
import ArticleCard from "@/components/Blog/ArticleCard";
import AsideCard from "@/components/Blog/AsideCard";


const Index = () => {
  return (
    <div className="container top-space">


      <div className="news-container">
      
        <ArticleCard/>
        <AsideCard/>

     

      </div>
    </div>
  );
};

export default Index;
