"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileNav({
  Links,
}: {
  Links: { name: string; href: string }[];
}) {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="flex flex-col md:hidden">
      <button
        aria-label="Open/Close Navbar Button"
        onClick={() => {
          setNav(!nav);
          setDropdownOpen(!dropdownOpen);
        }}
      >
        {nav ? (
          <AiOutlineClose className="absolute top-5 right-5 text-3xl" />
        ) : (
          <GiHamburgerMenu className="absolute top-5 right-5 text-3xl" />
        )}
      </button>

      {dropdownOpen && (
        <div
          className={`${
            nav ? "block" : "hidden"
          } absolute right-4 mt-10 rounded-md bg-zinc-800 p-2 text-2xl md:hidden`}
        >
          <ul className="flex flex-col gap-4">
            {Links.map((link) => (
              <li key={link.name} className="hover:underline">
                <a
                  onClick={() => {
                    setNav(!nav);
                    setDropdownOpen(!dropdownOpen);
                  }}
                  aria-label={`Link to ${link.name}`}
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="hover:underline">
              <Link
                onClick={() => {
                  setNav(!nav);
                  setDropdownOpen(!dropdownOpen);
                }}
                aria-label="Link to my Blog"
                href="https://jns-blog.hashnode.dev/"
                target="_blank"
              >
                My Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
