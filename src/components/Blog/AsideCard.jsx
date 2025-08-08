import React from "react";

const AsideCard = () => {
  return (
    <>
      <aside>
        <div className="asideCard newsletter">
          <h4>Subscribe</h4>
          <p>Get top stories delivered to your inbox.</p>
          <input placeholder="Your email address" />
          <button>Subscribe</button>
        </div>

        <div className="asideCard">
          <h4>Trending</h4>
          <ul className="trending">
            <li>1. Global climate summit — agreement breakdown</li>
            <li>2. New AI regulations proposed</li>
            <li>3. Breakthrough in battery tech</li>
            <li>4. Championship final tonight</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsideCard;
