import Link from "next/link";
import { JSX, SVGProps } from "react";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Footer() {
  return (
    <footer className="${poppins.className} bg-primary  py-6 w-full">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="pl-4 flex items-center">
        <img src="/logo.png" alt="coffee and pastries" className='max-w-16'/>
          <span className="font-bold text-xl">COOKIN-LAND</span>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline" prefetch={false}>Home</Link></li>
            <li><Link href="/menu" className="hover:underline" prefetch={false}>Menu</Link></li>
            <li><Link href="#" className="hover:underline" prefetch={false}>About</Link></li>
            <li><Link href="/ContactUs" className="hover:underline" prefetch={false}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
