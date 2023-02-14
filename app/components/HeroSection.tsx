import Link from "next/link";

function HeroSection() {
  return (
    <div className="flex min-h-[100vh] flex-col gap-16 pt-28">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-4xl font-semibold">Hi, I am</p>
        <p className="text-5xl font-semibold md:text-7xl">
          Jan-Niklas Reinhardt
        </p>
        <p className="text-3xl font-semibold">
          a Software Developer based in Germany
        </p>
        <p className="text-xl italic">
          On a journey to build the future of the web 🚀
        </p>
      </div>
      <div className="mx-auto flex max-w-[500px] flex-col justify-center gap-8 pb-8 text-center text-white md:flex-row md:gap-16 md:pb-0">
        <a
          aria-label="Projects"
          className="min-w-[150px] rounded-md bg-zinc-700 py-4 text-xl shadow-md shadow-zinc-700 transition hover:bg-zinc-800"
          href="#projects"
        >
          Projects
        </a>
        <Link
          aria-label="Email me"
          className="min-w-[150px] rounded-md bg-zinc-700 py-4 text-xl shadow-md shadow-zinc-700 transition hover:bg-zinc-800"
          href="mailto:reinhardtjanniklas96@gmail.com"
        >
          Get in touch!
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
