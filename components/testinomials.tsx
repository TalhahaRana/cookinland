import Link from "next/link";
import { JSX, SVGProps } from "react";
import React from 'react';

export default function Widget() {
          return (
              <div className="py-8 container bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
                  <div className="max-w-4xl w-full p-4">
                      <h1 className="text-5xl font-extrabold text-center mb-8 text-accent">Customer Testimonials</h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-[#C8835A] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center">
                            <img src="https://openui.fly.dev/openui/150x150.svg?text=🍰" alt="cake" className="w-24 h-24 mb-4 rounded-full border-4 border-white shadow-lg" />
                              <p className="text-xl text-center mb-4 italic text-white">"Absolutely love the cakes from this bakery! They are always fresh and delicious."</p>
                              <p className="text-sm text-center text-white">- Sarah M.</p>
                          </div>
                          <div className="bg-[#C8835A] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center">
                            <img src="https://openui.fly.dev/openui/150x150.svg?text=🍪" alt="cookie" className="w-24 h-24 mb-4 rounded-full border-4 border-white shadow-lg" />
                              <p className="text-xl text-center mb-4 italic text-white">"The cookies here are to die for! I can't get enough of them."</p>
                              <p className="text-sm text-center text-white">- John D.</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              
          )
      }
