"use client";
import { useEffect, useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Link from "next/link";
// import '';

export default function Component() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ParallaxProvider>
      <div className="container">
        {/* Other sections */}
        <nav className="mb-4">
          <img src="/logo.png" alt="logo" className='max-w-16'/>
          <a href="/" id="logo">CookinLand</a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Contact Us Section */}
        <section id="contact" className="relative h-auto w-full p-10 bg-[--background] text-white">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <form className="max-w-xl mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[brown] rounded-md hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </ParallaxProvider>
  );
}
