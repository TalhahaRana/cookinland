"use client";
import React, { useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Link from "next/link";

const Model = () => {
  const { scene } = useGLTF("/models/brownie.glb");
  return <primitive object={scene} scale={[3, 3, 3]} />;
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="container mx-auto px-4 gap-8 items-center my-6 note">
        <div className="text-center md:text-left pl-4 items-center">
          <p className="text-lg md:text-xl mb-5items-center">
            Long Live Palestine.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <nav className="items-center justify-center mb-8 relative">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="coffee and pastries"
              className="w-12 md:w-14 h-auto"
            />
            <a
              href="/"
              id="logo"
              className="text-lg md:text-xl font-bold text-brown-800 ml-1 md:ml-2"
            >
              CookinLand
            </a>
          </div>
          <ul
            className={` object-center items-center md:flex md:flex-row md:space-x-2 lg:space-x-4 text-brown-700 md:static bg-brown-200 md:bg-transparent w-full md:w-auto p-4 md:p-0 md:h-auto ${
              isOpen ? "top-16 right-0" : ""
            } transition-all duration-300 ease-in-out`}
          >
            <li>
              <a
                href="/"
                className="block py-2 md:py-0 hover:text-brown-900 text-right"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="block py-2 md:py-0 hover:text-brown-900 text-right"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="block py-2 md:py-0 hover:text-brown-900 text-right"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 md:py-0 hover:text-brown-900 text-right"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Hamburger button for mobile and iPad screens */}
          {/* <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-brown-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div> */}
          {/* Adjusted classes for responsive column layout on smaller screens and row layout on larger screens */}
          {/* <ul className={`flex-col md:flex md:flex-row md:space-x-2 lg:space-x-4 text-brown-700 md:static absolute bg-brown-200 md:bg-transparent w-full md:w-auto p-4 md:p-0 md:h-auto ${isOpen ? 'top-16 right-0' : 'top-[-400px] right-[-400px]'} transition-all duration-300 ease-in-out`}>
                    <li><a href="/" className="block py-2 md:py-0 hover:text-brown-900 text-right">Home</a></li>
                    <li><a href="/menu" className="block py-2 md:py-0 hover:text-brown-900 text-right">Menu</a></li>
                    <li><a href="/aboutus" className="block py-2 md:py-0 hover:text-brown-900 text-right">About</a></li>
                    <li><a href="/ContactUs" className="block py-2 md:py-0 hover:text-brown-900 text-right">Contact</a></li>
                </ul> */}
        </nav>
        <section className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left pl-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Craving Something Irresistible?
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8">
                Indulge in a menu crafted to excite your taste buds and leave
                you wanting more. Discover flavors that will make every bite
                unforgettable!
              </p>
              <div className="mt-6">
            <Link
              href="/menu"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#C8835A] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#C8835A]/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Shop Now
            </Link>
          </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/Chicken cheese lasagna.jpg"
                alt="Il Vesuvio Pizza"
                className="rounded-lg w-full h-full max-w-sm md:max-w-md object-cover"
              />
            </div>
          </div>
        </section>

        <div className="content flex flex-col md:flex-row items-center">
          <div className="text md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
              Golden Goodness <br /> Hole-y Satisfaction.
            </h1>
            <p className="text-justify text-brown-700">
              Indulge in the exquisite symphony of flavors that our handcrafted
              sweet items offer. Each bite is a masterpiece, designed to
              tantalize your taste buds and leave you craving more.
            </p>
          </div>
          <div className="image mb-32 w-full md:w-1/2 h-56 md:h-80 lg:h-96 relative">
            <Canvas>
              <ambientLight intensity={0.8} />
              <directionalLight position={[10, 10, 10]} />
              <OrbitControls />
              <Model />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
