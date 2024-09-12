import React from "react";
import Navbar from "../components/header/navbar/Navbar";
import Hero from "../components/hero/HeroSection";
import About from "../components/about/About";
import Services from "../components/service/Services";
import CTA from "../components/call-to-action-signup/CTASection";
import Footer from "../components/footer/Footer";
import TopBanner from "../components/header/topbanner/TopBanner";
import FeaturesSection from "../components/feature/FeaturesSection";
import FullWidthCards from "../components/about/FullWidthCards";
import CategorySection from "../components/service/CategorySection";
import TestimonialsSection from "../components/testimonial/TestimonialsSection";
import OrderingSteps from "../components/orderingsteps/OrderingSteps";
import TellUsYourRequirement from "../components/tellUsYourRequirement/TellUsYourRequirement";

const LandingPage = () => {
  return (
    <div className="">
      <TopBanner />
      <Navbar />
      {/* <CategoryMenu /> */}
      <Hero />
      <FeaturesSection />
      <About />
      <FullWidthCards />
      <CategorySection />
      {/* <Services /> */}
      <CTA />
      <OrderingSteps />
      <TellUsYourRequirement />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
