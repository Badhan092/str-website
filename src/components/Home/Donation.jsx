import React from "react";

const Donation = () => {
  return (
    <section class="donation-section">
      <div class="container">
        <h2 class="section-title">Support Through Every Purchase</h2>
        <p class="section-description">
          Every product you buy contributes to meaningful causes. Your support goes a long way.
        </p>

        <div class="donation-cards">
          <div class="donation-card">
            <div class="icon">
              <img src="/img/icons/farmer.png" alt="Farmer Fund" />
            </div>
            <h3>Fund for Cotton and Jute Farmer</h3>
            <p>
              We have taken the initiative to establish a fund to support cotton and jute farmers
              and their families in cotton-growing areas. <b>1%</b> of the sales value of each
              product is paid into this fund, and we ensure that every purchase supports a noble
              cause.
            </p>
          </div>

          <div class="donation-card">
            <div class="icon">
              <img src="/img/icons/children.png" alt="Children Education" />
            </div>
            <h3>Fund for Children</h3>
            <p>
              This project aims to support 3rd world countries children between the ages of 5 and 12
              by supporting them to achieve better education through local schools by supporting the
              construction or renovation of schools and providing essential equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
