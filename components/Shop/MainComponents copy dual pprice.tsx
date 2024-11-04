"use client";
import { useState, useMemo, JSX, SVGProps } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Component() {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedSize, setSelectedSize] = useState<{ [id: number]: string }>({});
  const [priceRange, setPriceRange] = useState<number[]>([10, 5000]);
  const [visibleItems, setVisibleItems] = useState(6);
  

  const menu = [
    {
      id: 1,
      name: "Buttercream Frosting Cake",
      description:
        "Delicious buttercream frosting cake perfect for celebrations.",
      price: 1300,
      image: "/Buttercream-froasting-cake.jpg",
      toppings: ["cake"],
      rating: 4.8,
      sizes: [{ size: "Standard", price: 1300 }],
    },
    {
      id: 2,
      name: "Chocolate Cake",
      description: "Rich and decadent chocolate cake, a classic favorite.",
      price: 2000,
      image: "/chocolate-cake.jpg?height=200&width=300",
      toppings: ["cake"],
      rating: 4.6,
      sizes: [{ size: "Standard", price: 1300 }],
    },
    {
      id: 3,
      name: "Dream Cake",
      description: "A delightful dream cake with layers of sweet goodness.",
      images: ["/Dream cake.jpg", "/Dream cake2.jpg"],
      toppings: ["cake"],
      rating: 4.7,
      sizes: [
        { size: "Personal tin", price: 850 },
        { size: "Family tin", price: 1550 },
      ],
    },
    {
      id: 4,
      name: "Fondant Cake",
      description:
        "Elegant fondant cake with a smooth finish for special occasions.",
      price: 1500,
      image: "/Fondant cake.jpg?height=200&width=300",
      toppings: ["cake"],
      rating: 4.9,
      sizes: [{ size: "Standard", price: 1300 }],
    },
  ];

  const filteredMenu = useMemo(() => {
    return menu
      .filter((item) =>
        selectedToppings.length === 0
          ? true
          : selectedToppings.every((topping) => item.toppings.includes(topping))
      )
      .filter((item) => {
        const selectedPrice = selectedSize[item.id]
          ? item.sizes.find((s) => s.size === selectedSize[item.id])?.price ?? 0
          : item.sizes[0].price ?? 0;
        return selectedPrice >= priceRange[0] && selectedPrice <= priceRange[1];
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "featured":
            return b.rating - a.rating;
          case "low":
            return (a.sizes[0].price ?? 0) - (b.sizes[0].price ?? 0);
          case "high":
            return (b.sizes[0].price ?? 0) - (a.sizes[0].price ?? 0);
          default:
            return 0;
        }
      });
  }, [selectedToppings, sortBy, priceRange, selectedSize]);
  const visibleItemsToShow = Math.min(visibleItems, filteredMenu.length);
  const handleLoadMore = () => setVisibleItems((prev) => prev + 6);

  const [cartItems, setCartItems] = useState<
    {
      id: number;
      name: string;
      description: string;
      price: number;
      image?: string;
      toppings: string[];
      rating: number;
    }[]
  >([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: {
    id: number;
    name: string;
    description: string;
    price?: number;
    image?: string;
    toppings: string[];
    rating: number;
  }) => {
    // Set a default price (e.g., 0) if `price` is undefined
    const itemWithDefaultPrice = {
      ...item,
      price: item.price ?? 0,
    };
    setCartItems([...cartItems, itemWithDefaultPrice]);
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCartItems([]);
    setIsCheckoutOpen(false);
    setIsSubmitted(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);

    // Force a re-render
    setTimeout(() => {
      setIsCartOpen((prev) => prev);
    }, 0);
  };

  const closeDeliveryForm = () => {
    setIsCheckoutOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container bg-primary text-primary-foreground py-1 flex justify-between items-center">
        <nav className="items-center justify-center  relative">
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
            className={` items-center md:flex md:flex-row md:space-x-2 lg:space-x-4 text-brown-700 md:static bg-brown-200 md:bg-transparent w-full md:w-auto p-4 md:p-0 md:h-auto ${
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
                href="/ContactUs"
                className="block py-2 md:py-0 hover:text-brown-900 text-right"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex ml-4 pb-1 relative flex-row-reverse">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary/80"
              onClick={handleToggleCart}
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {cartItems.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                  {cartItems.length}
                </div>
              )}
            </Button>
            <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
              {isCartOpen && (
                <div className="fixed bottom-0 left-0 bg-[#f29c5d] p-6 rounded-t-lg z-50 w-full max-w-xs shadow-lg">
                  <h2 className="text-lg font-bold mb-4">Your Cart</h2>
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex justify-between mb-2">
                        <span>{item.name}</span>
                        <span>RS{item.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="w-full bg-[#c8835A] hover:bg-[#c8835A]/80"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </div>
              )}
              <DrawerContent className="bg-[#c88535] p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Your Cart</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:bg-muted"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <XIcon className="w-6 h-6" />
                  </Button>
                </div>
                {cartItems.length === 0 ? (
                  <p className="text-muted-foreground">Your cart is empty.</p>
                ) : (
                  <div className="grid gap-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="rounded-md"
                          style={{ aspectRatio: "64/64", objectFit: "cover" }}
                        />
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-muted-foreground text-sm">
                            Rs{item.price.toFixed(2)}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:bg-muted"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          <XIcon className="w-5 h-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
                <Button onClick={handleCheckout}>Checkout</Button>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-4 ">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left pl-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Want to Bite your fingers?
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Our menu will make your taste buds happy.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="text-primary-foreground hover:bg-primary/80 border border-[#C8835A]"
              >
                Order Now
              </Button>
            </div>
            <div>
              <img
                src="/location.png"
                alt="Il Vesuvio Pizza"
                width="600"
                height="400"
                className="rounded-lg"
                style={{ aspectRatio: "800/480", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="container mx-auto px-4 gap-8 items-center my-6 note">
            <div className="text-center md:text-left pl-4 items-center">
              <p className="text-lg md:text-xl mb-5items-center">
                Looking for customization? We would love to help you!.
                <br />
                Note : We usually take pre orders at least, 24 hours before.
                Please reach out to us for any help.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-background py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Choices</h3>
                    <div className="grid gap-2 search-filter">
                      <Label className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedToppings.includes("cake")}
                          onCheckedChange={() =>
                            setSelectedToppings((prev) =>
                              prev.includes("cake")
                                ? prev.filter((t) => t !== "cake")
                                : [...prev, "cake"]
                            )
                          }
                        />
                        Cake
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedToppings.includes("brownies")}
                          onCheckedChange={() =>
                            setSelectedToppings((prev) =>
                              prev.includes("brownies")
                                ? prev.filter((t) => t !== "brownies")
                                : [...prev, "brownies"]
                            )
                          }
                        />
                        Brownies
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedToppings.includes("continantal")}
                          onCheckedChange={() =>
                            setSelectedToppings((prev) =>
                              prev.includes("continantal")
                                ? prev.filter((t) => t !== "continantal")
                                : [...prev, "continantal"]
                            )
                          }
                        />
                        Continental
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedToppings.includes("cookies")}
                          onCheckedChange={() =>
                            setSelectedToppings((prev) =>
                              prev.includes("cookies")
                                ? prev.filter((t) => t !== "cookies")
                                : [...prev, "cookies"]
                            )
                          }
                        />
                        Cookies
                      </Label>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Price Range</h3>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={10}
                      max={5000}
                      step={1}
                      className="w-full text-[#c8835A] pb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Rs{priceRange[0]}</span>
                      <span>Rs{priceRange[1]}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Sort By</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between border border-[#C8835A] bg-[#C8835A]"
                        >
                          {sortBy === "featured"
                            ? "Featured"
                            : sortBy === "low"
                            ? "Price: Low to High"
                            : "Price: High to Low"}
                          <ChevronDownIcon className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuRadioGroup
                          value={sortBy}
                          onValueChange={setSortBy}
                          className="bg-[#C8835A] w-44 "
                        >
                          <DropdownMenuRadioItem value="featured">
                            Featured
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="low">
                            Price: Low to High
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="high">
                            Price: High to Low
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Render only visible items */}
                {filteredMenu.slice(0, visibleItemsToShow).map((item) => (
                  <Card key={item.id} className="flex flex-col h-full">
                    {/* Image container with fixed size */}
                    <div className="w-full h-[350px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-4 flex-1">
                      <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <span>{item.rating.toFixed(1)}</span>
                          <span>
                                RS{item.price?.toFixed(2) ?? "0.00"}
                              </span>
                        </div>
                      </div>
                    </CardContent>
                    {/* Add to Cart button pinned to the bottom */}
                    <CardFooter className="mt-auto">
                      <Button
                        size="sm"
                        className="w-full bg-[#c8835A] hover:bg-[#c8835A]/50"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                {/* "Load More" */}
                {visibleItemsToShow < filteredMenu.length && (
                  <div className="flex justify-items-start mt-6">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-primary-foreground hover:bg-[#c8835A]/80 border border-[#C8835A]"
                      onClick={handleLoadMore}
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DrawerContent className="bg-[#c88535] p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-muted"
              onClick={() => setIsCartOpen(false)}
            >
              <XIcon className="w-6 h-6" />
            </Button>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-muted-foreground">Your cart is empty.</p>
          ) : (
            <div className="grid gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      Rs{item.price.toFixed(2)}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:bg-muted"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <XIcon className="w-5 h-5" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Checkout Button */}
          <div className="mt-6">
            <Button
              size="lg"
              className="w-full bg-[#c8835A] hover:bg-[#c8835A]/80"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Checkout
            </Button>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Checkout Form Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Enter Your Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium mb-1"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-50"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={closeDeliveryForm}
                  className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#c8835A] text-white p-2 rounded-lg hover:bg-[#c8835A]/80"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[400px] text-center">
            <h2 className="text-2xl font-bold mb-4">Order Successful!</h2>
            <p className="text-lg mb-4">Thank you, {userDetails.name}!</p>
            <p>Your order has been placed and will be delivered to:</p>
            <p className="font-medium">{userDetails.address}</p>
            <p>Phone: {userDetails.phone}</p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-[#c8835A] hover:bg-[#c8835A]/80"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ChevronDownIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ShoppingCartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
