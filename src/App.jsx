import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  About,
  Blog,
  Careers,
  CaseStudies,
  Contact,
  Differentiators,
  FAQ,
  Hero,
  Industries,
  Services,
  Solutions,
} from "./sections";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Industries />
        <CaseStudies />
        <Careers />
        <Blog />
        <Differentiators />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
