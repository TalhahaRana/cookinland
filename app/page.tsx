import Hero from "@/components/hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Testinomials from "@/components/testinomials"
import AboutUs from "@/components/AboutUs/main";
import Special from "@/components/special";
import Blog from "@/components/Blog/blogs";
// import Contact from "@/components/Contact";
export default function Layout() {
  return (
    <div className="w-full mt-10 mb-10">
      <Hero />
      <Products />
      <AboutUs />
      <Testinomials />
      <Special />
      <Blog />
      <Footer />
    </div>
  );
}
