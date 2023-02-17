import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiOutlineArrowDown } from "react-icons/ai";
import { BsPenFill } from "react-icons/bs";

function Main() {
  return (
    <div
      id="home"
      className="flex min-h-screen flex-col gap-16 pt-44 text-center"
    >
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="text-md uppercase tracking-widest text-gray-600">
            Let&#39;s build something great
          </p>
          <h1 className="py-4 text-5xl font-semibold text-gray-700 md:text-7xl">
            Hi, I&#39;m <span className="text-sky-700"> Jan-Niklas</span>
          </h1>
          <h1 className="py-2 text-5xl font-semibold text-gray-700 md:text-7xl">
            A Software Developer
          </h1>
          <p className="text-md m-auto py-4 text-gray-600 sm:max-w-[70%]">
            I&#39;m specialized in frontend development with React and Next.js.
            I&#39;m always open to learn new technologies and improve my skills.
          </p>
          <div className="m-auto flex max-w-[330px] items-center justify-between py-4">
            <Link
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/jan-niklas-reinhardt/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full border border-zinc-500 p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              aria-label="GitHub"
              href="https://github.com/Jayzumen"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full border border-zinc-500 p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaGithub />
              </div>
            </Link>
            <a aria-label="Contact me" href="#contact">
              <div className="cursor-pointer rounded-full border border-zinc-500 p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <AiOutlineMail />
              </div>
            </a>
            <Link
              aria-label="Visit my Blog"
              href="https://jns-blog.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full border border-zinc-500 p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <BsPenFill />
              </div>
            </Link>
          </div>
          {/* 
            make a button, that scrolls down to the next section 
          */}
          <div className="flex items-center justify-center pt-36">
            <div className="flex animate-bounce flex-col items-center justify-center text-center">
              <p className="text-xl uppercase">Learn more</p>
              <AiOutlineArrowDown size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
