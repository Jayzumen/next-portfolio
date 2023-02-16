import Image from "next/image";
import Profile from "../../assets/profile.jpg";
import { skills } from "../constans";

export default function About() {
  return (
    <div id="about" className="flex flex-col py-16">
      <p className="text-center text-4xl font-semibold uppercase tracking-widest text-sky-700 underline">
        About me
      </p>
      <div className="flex w-full flex-col justify-around pt-12 xl:flex-row">
        <div className="mx-auto">
          <Image
            priority
            className="m-2 mx-auto rounded-full"
            width={400}
            height={400}
            src={Profile}
            alt="My Profile Picture"
          />
          <div className="py-4 text-center">
            <p className="pb-2 text-xl font-semibold underline">Tech-Stack</p>
            <div className="mx-auto flex max-w-[450px] flex-wrap justify-center gap-8 text-white">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex min-w-[100px] flex-col items-center rounded-lg bg-zinc-700 p-2"
                >
                  <Image
                    priority
                    title={skill.name}
                    className="m-2"
                    width={50}
                    height={50}
                    src={skill.src}
                    alt={skill.name}
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto pt-8 md:pt-0">
          <p className="mb-4 text-4xl font-bold">
            Hi, I&#39;m <span className="text-sky-700"> Jan-Niklas</span>.
          </p>
          <p className="mx-auto max-w-[500px] text-xl leading-9">
            I had the first contact with programming when I started to study
            "Data Science". This in turn wasn't much fun for me, but when I
            discovered frontend development, I was immediately hooked. Since
            then, I have used every day to improve my skills as a web developer.
            I currently work with React, TypeScript and Next.js but am always
            open to learn more technologies.
          </p>
          <p className="mx-auto mt-4 max-w-[500px] text-xl leading-9">
            I have a passion for football and gaming. When I'm not learning or
            working on my projects, I'm usually doing one of the two activities
            mentioned.
          </p>
        </div>
      </div>
    </div>
  );
}
