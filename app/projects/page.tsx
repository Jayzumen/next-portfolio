import Image from "next/image";
import Link from "next/link";
import { images } from "../constans";

interface Project {
  id: number;
  homepage: string;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
}

const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch("https://api.github.com/users/Jayzumen/repos");
  const data: Project[] = await response.json();
  const filteredData: Project[] = data.filter((repo) => repo.homepage);
  filteredData.sort((a, b) => {
    const dateA: Date = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });
  return filteredData;
};

export default async function Projects() {
  const projects = await fetchProjects();
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl text-center my-10 underline'>Projects</h1>
      <div className='flex flex-wrap gap-8'>
        {projects?.map((project) => (
          <div
            key={project.id}
            className='max-h-[500px] max-w-[450px] overflow-hidden mx-auto rounded-lg shadow-md shadow-white'
          >
            {images.map((image) => {
              if (image.name.toLowerCase() === project.name.toLowerCase()) {
                return (
                  <Image
                    key={image.name}
                    src={image.src}
                    alt={project.name}
                    className='rounded-md duration-300 hover:scale-105'
                  />
                );
              }
            })}

            <div className='border-y-2 border-white text-center'>
              <p className='my-3 mx-auto min-h-[60px] max-w-[350px] text-xl'>
                {project.description}
              </p>
            </div>
            <div className='flex flex-wrap items-center justify-center text-xl'>
              <Link
                aria-label='Website-Link'
                href={project.homepage}
                target='_blank'
                rel='noreferrer'
                className='m-5 cursor-pointer rounded-md bg-slate-800 px-8 py-1 transition hover:text-white hover:underline'
              >
                Website
              </Link>
              <Link
                aria-label='Github-Link'
                href={project.html_url}
                target='_blank'
                rel='noreferrer'
                className='m-5 cursor-pointer rounded-md bg-slate-800 px-8 py-1 transition hover:text-white hover:underline'
              >
                Github
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
