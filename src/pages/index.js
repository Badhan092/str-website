import React, { useEffect, useState } from "react";
import Loader from "@/components/Layout/Loader";
import HeroBanner from "@/components/Home/HeroBanner";
import AboutUs from "@/components/Home/AboutUs";
import STRTab from "@/components/Home/STRTab";
import OurService from "@/components/Home/OurService";
import OurProducts from "@/components/Home/OurProducts";
import ContactUs from "@/components/Home/ContactUs";
import OurPartner from "@/components/Home/OurPartner";
import Donation from "@/components/Home/Donation";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <HeroBanner />
      <AboutUs />
      <STRTab />
      <OurService />
      <OurProducts />
      <Donation />
      <OurPartner />
      <ContactUs />
    </>
  );
};

export default IndexPage;
