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
          </div>
        </div>

        <div className="grid items-center ">
          <h2 className="text-3xl text-white text-center pb-8 pt-4 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Values
          </h2>
          <div className="flex items-center gap-6 px-4 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed  xl:text-xl/relaxed text-justify">
                - Quality: We use only the finest ingredients, carefully
                selected to ensure every bite is a delight.
                <br />
                - Creativity: Our recipes blend classic flavors with innovative
                twists to surprise and delight.
                <br />- Customer Love: Your satisfaction is our top priority; we
                strive to exceed expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="grid items-center ">
          <h2 className="text-3xl text-white text-center pb-8 pt-4 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What We Offer
          </h2>
          <div className="flex items-center gap-6 px-4 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed  xl:text-xl/relaxed text-justify">
                - Custom cakes for special occasions (birthdays, weddings,
                graduations)
                <br />
                - Artisanal desserts (cupcakes, cookies, brownies)
                <br />- Seasonal treats (holiday-themed goodies)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
