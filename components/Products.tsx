"use client";

import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { JSX, SVGProps } from "react";

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Cakes",
      description: "Delicious cakes ranging from Rs 1500 to Rs 3000. Perfect for every celebration, made with love and the finest ingredients.",
      imgSrc: "/1.png",
      imgAlt: "Cakes",
    },
    {
      title: "Cookies",
      description: "Enjoy our crispy and chewy cookies priced between Rs 590 and Rs 1600. A delightful treat for any time of the day.",
      imgSrc: "/2.png",
      imgAlt: "Cookies",
    },
    {
      title: "Brownies",
      description: "Rich and fudgy brownies available from Rs 900 to Rs 1500. An irresistible indulgence for chocolate lovers.",
      imgSrc: "/3.png",
      imgAlt: "Brownies",
    },
    
    // {
    //   title: "Donuts",
    //   description: "Delicious Italian dishes available for Rs 270 to Rs 470, perfect for a single serving. Experience the taste of Italy!",
    //   imgSrc: "/4.png",
    //   imgAlt: "Continental",
    // },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-8 bg-gradient-to-b from-brown-600 to-brown-900">
      
      <div className="container mx-auto flex flex-col  items-center justify-between" >
      <h1 className="text-5xl font-extrabold text-center mb-8 text-white text-accent">Our Products</h1>
      <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between" >
        {/* Carousel on the left */}
        <Carousel className="w-full lg:w-1/2 p-3"> {/* Added margin-right for spacing */}
          <CarouselContent
            className=" transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }} // Added transition effect
          >
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={slide.imgSrc}
                    width={600}
                    height={400}
                    alt={slide.imgAlt}
                    className="aspect-video object-cover w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-brown-700 bg-opacity-80 p-2 shadow-lg transition-colors hover:bg-brown-600"
            onClick={handlePrevious}
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </CarouselPrevious>
          <CarouselNext
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-brown-700 bg-opacity-80 p-2 shadow-lg transition-colors hover:bg-brown-600"
            onClick={handleNext}
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </CarouselNext>
        </Carousel>

        {/* Dynamic Text on the right */}
        <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{slides[activeIndex].title}</h2>
              <p className="mt-4 text-lg text-white">{slides[activeIndex].description}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
