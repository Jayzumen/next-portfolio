import Image from "next/image";
import Profile from "../../assets/profile.jpg";
import { skills } from "../constans";

export default function About() {
  return (
    <div className='w-full flex xl:flex-row justify-around flex-col pt-12'>
      <div className='mx-auto'>
        <Image
          className='rounded-full m-2 mx-auto'
          width={400}
          height={400}
          src={Profile}
          alt='My Profile Picture'
        />
        <div className='text-center py-4'>
          <p className='text-xl font-semibold underline pb-2'>Tech-Stack</p>
          <div className='flex flex-wrap justify-center gap-8 max-w-[450px] mx-auto'>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className='flex flex-col items-center bg-sky-900 p-2 rounded-lg min-w-[100px]'
              >
                <Image
                  title={skill.name}
                  className='m-2'
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
      <div className='mx-auto'>
        <p className='text-4xl font-bold mb-4'>Hey, I'm Jan-Niklas. </p>
        <p className='text-xl leading-9 max-w-[500px] mx-auto'>
          I had the first contact with programming when I started to study "Data
          Science". This in turn wasn't much fun for me, but when I discovered
          frontend development, I was immediately hooked. Since then, I have
          used every day to improve my skills as a web developer. I currently
          mostly work with React and JavaScript but am always open to learn more
          technologies.
        </p>
        <p className='mt-4 text-xl leading-9 max-w-[500px] mx-auto'>
          I have a passion for football and gaming. When I'm not learning or
          working on my projects, I'm usually doing one of the two activities
          mentioned.
        </p>
      </div>
    </div>
  );
}
