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
              Cookinland is a leading online platform that inspires home cooks and aspiring chefs to delve into the culinary world. With an extensive collection of recipes, detailed tutorials, and a lively community, Cookinland opens the door to mastering cooking techniques and exploring exciting new flavors.
              </p>
            </div>
            {/* <div className="grid gap-4">
              <div className="rounded-lg border border-[#C8835A] bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Vast Recipe Library</h3>
                <p className="text-muted-foreground">
                  Explore our ever-growing collection of recipes spanning various cuisines, dietary preferences, and skill
                  levels.
                </p>
              </div>
              <div className="rounded-lg border border-[#C8835A] bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Interactive Tutorials</h3>
                <p className="text-muted-foreground">
                  Learn from expert chefs through our interactive video tutorials and step-by-step guides.
                </p>
              </div>
              <div className="rounded-lg border border-[#C8835A] bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Vibrant Community</h3>
                <p className="text-muted-foreground">
                  Connect with fellow food enthusiasts, share recipes, and engage in lively discussions.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
