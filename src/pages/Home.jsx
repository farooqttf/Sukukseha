import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OpportunitySection from "../components/Opportunity";
import WhySukukSeha from "../components/WhySukukSeha";
import ShariahCompliance from "../components/ShariahCompliance";
import LicensedSection from "../components/LicensedSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OpportunitySection />
      <WhySukukSeha />
      <ShariahCompliance />
      <LicensedSection />
    </div>
  );
};

export default Home;
