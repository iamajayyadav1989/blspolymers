import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import VisionMission from "../components/About/VisionMission";
import HeritageSection from "../components/About/HeritageSection";
import ValuesSection from "../components/About/ValuesSection";
import LeadershipSection from "../components/About/LeadershipSection";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <HeritageSection />
      <ValuesSection />
      <LeadershipSection />
    </>
  );
};

export default AboutUs;
