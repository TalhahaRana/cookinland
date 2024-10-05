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