import About from "@/components/AboutUs/MainComponent"
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <>
    <div className="w-full mt-20">
      <About></About>
      <Footer />
      </div>
    </>
  );
};

export default page;