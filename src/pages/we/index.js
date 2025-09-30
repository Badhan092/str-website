import React from "react";
import WeHeader from "@/components/We/WeHeader";
import WeContent from "@/components/We/WeContent";
import WhyChooseUs from "@/components/We/WhyChooseUs";
import OurMission from "@/components/We/OurMission";
import OurPartner from "@/components/We/OurPartner";
import Donation from "@/components/Home/Donation";

const index = () => {
  return (
    <>
      <WeHeader />
      <WeContent />
      <WhyChooseUs />
      <Donation />
      <OurMission />
      {/* <OurPartner /> */}
    </>
  );
};

export default index;
