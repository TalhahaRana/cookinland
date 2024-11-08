export default function Component() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 md:px-6 flex flex-col justify-center items-center">
        <div className="grid items-center ">
          <h2 className="text-3xl text-white text-center pb-8 pt-4 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Cookinland
          </h2>
          <div className="flex items-center gap-6 px-4 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed  xl:text-xl/relaxed text-justify">
                Cookinland was founded with a simple mission: to create
                mouthwatering confections that put a smile on every face at
                every occasion. With years of experience perfecting recipes and
                techniques, we're committed to delivering exceptional taste,
                quality, and presentation.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg border border-[#C8835A] bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Our Values </h3>
                <p className="text-muted-foreground">
                  - Quality: We use only the finest ingredients, carefully
                  selected to ensure every bite is a delight.
                  <br />
                  - Creativity: Our recipes blend classic flavors with
                  innovative twists to surprise and delight.
                  <br />- Customer Love: Your satisfaction is our top priority;
                  we strive to exceed expectations.
                </p>
              </div>
              <div className="rounded-lg border border-[#C8835A] bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">What We Offer</h3>
                <p className="text-muted-foreground">
                  - Custom cakes for special occasions (birthdays, weddings,
                  graduations)
                  <br />
                  - Artisanal desserts (cupcakes, cookies, brownies)
                  <br />- Seasonal treats (holiday-themed goodies)
                </p>
              </div>
              {/* <div className="rounded-lg border border-[#C8835A] bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Vibrant Community</h3>
                <p className="text-muted-foreground">
                  Connect with fellow food enthusiasts, share recipes, and engage in lively discussions.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
