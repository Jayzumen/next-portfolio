import Image from "next/image";
import Link from "next/link";
import { BsPenFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../../assets/contact.jpg";

function Contact() {
  return (
    <div id="contact" className="w-full pt-12">
      <div className="m-auto w-full max-w-[1240px] px-2 pb-8">
        <p className="text-center text-4xl font-semibold uppercase tracking-widest text-sky-700 underline">
          Contact
        </p>
        <h2 className="py-4 text-center text-xl">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5 ">
          {/* left */}
          <div className="col-span-3 h-full w-full rounded-xl border border-zinc-500 p-4 shadow-xl shadow-gray-400 lg:col-span-2 ">
            <div className="h-full lg:p-4 ">
              <div>
                <Image
                  className="h-auto w-auto rounded-xl"
                  src={ContactImg}
                  alt="image of laptop"
                />
              </div>
              <div>
                <p className="py-2 text-4xl font-semibold text-sky-700">
                  Jan-Niklas Reinhardt
                </p>
                <p className="text-xl">Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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
                    aria-label="github"
                    href="https://github.com/Jayzumen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer rounded-full border border-zinc-500 p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    aria-label="visit my blog"
                    href="https://jns-blog.hashnode.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer rounded-full border border-zinc-500 p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <BsPenFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 h-auto w-full rounded-xl border border-zinc-500 shadow-xl shadow-gray-400 lg:p-4 ">
            <div className="p-4">
              <form
                action="https://getform.io/f/2a4908f2-98d2-4614-b423-dd79654bd57d"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="py-2 text-sm uppercase">
                      Name
                    </label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="py-2 text-sm uppercase">
                    Email
                  </label>
                  <input
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="py-2 text-sm uppercase">
                    Subject
                  </label>
                  <input
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                    type="text"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="py-2 text-sm uppercase">
                    Message
                  </label>
                  <textarea
                    className="rounded-lg border-2 border-gray-300 p-3"
                    rows={10}
                    id="message"
                    name="message"
                    required
                  />
                </div>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-sky-500 to-sky-700 p-4 text-lg text-gray-100 transition hover:underline hover:shadow-md hover:shadow-slate-800">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* back to top button */}
        <div className="flex justify-center py-8">
          <a aria-label="back to top" href="#home">
            <div className="cursor-pointer rounded-full border border-zinc-500 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <HiOutlineChevronDoubleUp
                className="animate-bounce text-sky-700"
                size={30}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
