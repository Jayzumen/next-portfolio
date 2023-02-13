"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className='w-full md:px-20 px-12 py-4 flex justify-between text-center gap-4 flex-row'>
      <Link
        href='/'
        className='text-3xl font-semibold rounded-full w-fit h-fit shadow-sm shadow-white'
      >
        <Image src='/favicon.ico' alt='my Icon' width={40} height={40} />
      </Link>
      <ul className='md:flex gap-4 justify-center text-2xl hidden'>
        {Links.map((link) => (
          <li key={link.name} className='hover:underline transition'>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className='flex flex-col md:hidden'>
        <button onClick={() => setNav(!nav)}>
          {nav ? (
            <AiOutlineClose className='text-3xl absolute top-5 right-5' />
          ) : (
            <GiHamburgerMenu className='text-3xl absolute top-5 right-5' />
          )}
        </button>

        <div className={`${nav ? "block" : "hidden"} md:hidden`}>
          <ul className='flex mt-10 gap-4 justify-center text-2xl'>
            {Links.map((link) => (
              <li key={link.name} className='hover:underline'>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
