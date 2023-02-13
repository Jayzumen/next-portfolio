import Link from "next/link";
import { BsGithub, BsLinkedin, BsPenFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className='flex flex-col items-center gap-4 justify-center w-full h-28'>
      <div className='flex items-center justify-center gap-8'>
        <Link
          title='Github'
          aria-label='Github-Link'
          className='hover:scale-105 duration-300'
          href='https://github.com/Jayzumen'
          target='_blank'
        >
          <BsGithub className='w-6 h-6' />
        </Link>
        <Link
          title='LinkedIn'
          aria-label='LinkedIn-Link'
          className='hover:scale-105 duration-300'
          href='https://www.linkedin.com/in/jan-niklas-reinhardt/'
          target='_blank'
        >
          <BsLinkedin className='w-6 h-6' />
        </Link>
        <Link
          title='My Blog'
          aria-label='Blog-Link'
          className='hover:scale-105 duration-300'
          href='https://jns-blog.hashnode.dev/'
          target='_blank'
        >
          <BsPenFill className='w-6 h-6' />
        </Link>
      </div>
      <p className='text-sm '>
        &copy; {new Date().getFullYear()} Jan-Niklas Reinhardt
      </p>
    </footer>
  );
}

export default Footer;
