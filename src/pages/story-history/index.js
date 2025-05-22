import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HistoryStoryHeader from "@/components/story-history/HistoryStoryHeader";
import JamdaniHistory from "@/components/story-history/JamdaniHistory";
import JuteHistory from "@/components/story-history/JuteHistory";
import MuslinHistory from "@/components/story-history/MuslinHistory";

const index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HistoryStoryHeader />
      <JamdaniHistory />
      <JuteHistory />
      <MuslinHistory />
    </>
  );
};

export default index;
