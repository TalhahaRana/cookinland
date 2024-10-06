"use client";
import { useEffect, useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Link from "next/link";
import './styles.css';

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
        <style jsx>{`
                .image {
                    width: 40%; /* Adjust as needed */
                    height: 600px; /* Increase or decrease to your liking */
                    position: relative;
                    padding-bottom: 20px;
                }            
            `}</style>
        {/* About Us Section */}
        <nav className="mb-4">
            <img src="/logo.png" alt="coffee and pastries" className='max-w-16'/>
            <a href="/" id="logo">CookinLand</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/aboutus">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <section className="relative h-[80vh] w-full overflow-hidden">
            
          <div className="absolute inset-0 bg-gradient-to-b from-[--background] to-transparent z-1000" />
          <Parallax
            className="h-full w-full object-cover object-center"
            translateY={[-20, 20]}
            style={{
              transform: `scale(${1 + scrollY / 1000})`,
              transition: "transform 0.2s",
            }}
          >
            <img
              src="/location.png"
              alt="About Us"
              width={1920}
              height={1080}
              className="h-full w-full object-cover object-center"
              style={{
                transform: "scale(1.1)",
                transition: "transform 10s ease-out",
                willChange: "transform",
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
            />
          </Parallax>
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
            <p className="max-w-3xl text-[--muted-foreground] md:text-xl">
              We are a team of passionate individuals dedicated to creating innovative solutions that empower our clients to achieve their goals.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[brown] px-8 text-sm font-medium text-[--primary-foreground] shadow transition-colors hover:bg-[--primary]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[--ring] disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Our Story Section */}
        <section
          className="relative  w-full overflow-hidden"
          style={{
            opacity: scrollY > 200 ? 1 : 0,
            transform: `translateY(${scrollY > 200 ? 0 : 100}px)`,
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            marginTop: "30px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[--background] to-transparent" />
          <Parallax
            className="h-full w-full object-cover object-centern story"
            translateY={[-20, 20]}
            style={{
              transform: `scale(${1 + scrollY / 1000})`,
              transition: "transform 0.2s",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-center"
              style={{
                transform: "scale(1.1)",
                transition: "transform 10s ease-out",
                willChange: "transform",
              }}
            >
              <source src="/about-video.mp4" type="video/mp4" />
            </video>
          </Parallax>
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 p-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Story</h2>
            <p className="max-w-3xl text-[--muted-foreground] md:text-xl">
            The story began back in 2018 when the newlywed Mrs. FHK relocated to Karachi and was finding her dream job in physiotherapy. While searching, she stumbled upon her hidden talent for baking out of sheer boredom, whipping up delightful treats for Mr. FHK. As she poured her heart into a batch of cookies, it unexpectedly reignited her deep love for baking. Those very cookies, infused with affection, cast a spell on Mr. FHK, sparking a conversation between the couple about sharing their creations with others. And that's how "Cookiesland" came into existence, a heartfelt venture that later blossomed into "Cookinland" as they broadened their range. Every single product is painstakingly baked with an abundance of love and care, aiming not just to fill stomachs but to bring warmth and joy straight from our oven to your table.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">100+</span>
                <span className="text-[--muted-foreground]">Clients</span>
              </div>
              {/* <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">20+</span>
                <span className="text-[--muted-foreground]">Team Members</span>
              </div> */}
              <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">5+</span>
                <span className="text-[--muted-foreground]">Years in Business</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">99%</span>
                <span className="text-[--muted-foreground]">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}
