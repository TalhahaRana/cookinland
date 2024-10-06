import ContactUs from "@/components/ContactUs/Contact"
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <>
    <div className="w-full mt-20">
      <ContactUs></ContactUs>
      <Footer />
      </div>
    </>
  );
};

export default page;