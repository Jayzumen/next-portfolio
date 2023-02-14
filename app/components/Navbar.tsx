import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full flex-row justify-between gap-4 bg-zinc-900 px-12 py-4 text-center md:px-20">
      <Link
        href="/"
        className="h-fit w-fit rounded-full text-3xl font-semibold shadow-sm shadow-white"
      >
        <Image src="/favicon.ico" alt="my Icon" width={40} height={40} />
      </Link>
      <ul className="hidden justify-center gap-4 text-2xl md:flex">
        {Links.map((link) => (
          <li key={link.name} className="transition hover:underline">
            <a aria-label={`Link to ${link.name}`} href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
        <li className="transition hover:underline">
          <Link
            aria-label="Link to my Blog"
            href="https://jns-blog.hashnode.dev/"
            target="_blank"
          >
            My Blog
          </Link>
        </li>
      </ul>

      <MobileNav Links={Links} />
    </nav>
  );
}
