import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Donation = () => {

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <section class="donation-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Support Through Every Purchase</h2>
        <p class="section-description" data-aos="fade-up">
          Every product you buy contributes to meaningful causes. Your support goes a long way.
        </p>

        <div class="donation-cards">
          <div class="donation-card" data-aos="fade-up">
            <div class="icon">
              <img src="/img/icons/farmer.png" alt="Farmer Fund" />
            </div>
            <h3>Fund for Cotton &npm Jute Farmer</h3>
            <p>
              We have taken the initiative to establish a fund to support cotton and jute farmers
              and their families in cotton-growing areas. <b>1%</b> of the sales value of each
              product is paid into this fund, and we ensure that every purchase supports a noble
              cause.
            </p>
          </div>

          <div class="donation-card" data-aos="fade-up">
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
