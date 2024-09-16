"use client";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <section className="w-full py-8">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Our Blog</h2>
            <p className="text-center mt-2 text-white text-muted-foreground md:text-xl">
              Check out the latest recipes and news from our bakery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-lg border border-[#C8835A] bg-card p-4 shadow-sm transition-all hover:border-primary hover:shadow-md">
              <img
                src="/placeholder.svg"
                alt="Blog post image"
                width="300"
                height="200"
                className="mb-4 aspect-[3/2] w-full rounded-lg object-cover"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-primary">Baking the Perfect Sourdough Bread</h3>
                <p className="text-muted-foreground line-clamp-3">
                  Learn the secrets to baking the perfect sourdough bread at home. From starter to crust, we&apos;ve got
                  you covered.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group rounded-lg border border-[#C8835A] bg-card p-4 shadow-sm transition-all hover:border-primary hover:shadow-md">
              <img
                src="/placeholder.svg"
                alt="Blog post image"
                width="300"
                height="200"
                className="mb-4 aspect-[3/2] w-full rounded-lg object-cover"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-primary">The Art of Decorating Cakes</h3>
                <p className="text-muted-foreground line-clamp-3">
                  Discover the techniques and tools used by professional cake decorators to create stunning,
                  Instagram-worthy cakes.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group rounded-lg border border-[#C8835A] bg-card p-4 shadow-sm transition-all hover:border-primary hover:shadow-md">
              <img
                src="/placeholder.svg"
                alt="Blog post image"
                width="300"
                height="200"
                className="mb-4 aspect-[3/2] w-full rounded-lg object-cover"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-primary">The Best Chocolate Chip Cookies</h3>
                <p className="text-muted-foreground line-clamp-3">
                  Discover the secret to baking the perfect chocolate chip cookies every time. Crispy edges, gooey
                  centers, and unbeatable flavor.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-md space-y-4 text-center">
            <h3 className="text-2xl font-bold">Stay Updated with CookinLand</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter to get the latest recipes and updates.</p>
            <form className="flex gap-2 ">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 border border-[#C8835A]" />
              <Button type="submit" className="bg-[#C8835A] hover:bg-[#C8835A]/30">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}