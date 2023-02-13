import Link from "next/link";

function HeroSection() {
  return (
    <div className='flex flex-col gap-16 pt-20'>
      <div className='flex flex-col gap-2 text-center'>
        <p className='md:text-7xl text-5xl font-semibold'>
          Jan-Niklas Reinhardt
        </p>
        <p className='text-3xl font-semibold'>
          Software Developer based in Germany
        </p>
        <p className='text-xl italic'>
          Passionate about developing software to help people
        </p>
      </div>
      <div className='flex justify-center md:flex-row flex-col gap-8 text-center md:justify-around pb-8 md:pb-0 md:gap-0'>
        <Link
          aria-label='Projects'
          className='min-w-[150px] py-4 bg-sky-700 shadow-md shadow-white border border-white rounded-md text-xl hover:bg-sky-800 transition'
          href='/projects'
        >
          Projects
        </Link>
        <Link
          aria-label='Email me'
          className='min-w-[150px] py-4 bg-sky-700 shadow-md shadow-white border border-white rounded-md text-xl hover:bg-sky-800 transition'
          href='mailto:reinhardtjanniklas96@gmail.com'
        >
          Get in touch!
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
