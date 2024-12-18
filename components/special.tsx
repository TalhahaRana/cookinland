"use client"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full bg-muted py-8">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
            Special Offers
          </div>
          {/* <h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Enjoy a 10% discount on all orders this weekend! Use code HOMEMADE10 at checkout.
          </h2> */}
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            {/* Don't miss out on this limited-time offer.  */}
            Shop now and save big on our curated selection of home goods.
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
      </div>
    </section>
  )
}