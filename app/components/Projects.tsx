import Image from "next/image";
import Link from "next/link";
import { images } from "../constans";
import { Project } from "../page";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div id="projects" className="flex min-h-[100vh] flex-col">
      <h1 className="my-10 text-center text-4xl underline">
        Some of my Projects
      </h1>
      <div className="flex flex-wrap gap-8">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="mx-auto max-h-[500px] max-w-[450px] overflow-hidden rounded-lg shadow-md shadow-zinc-800"
          >
            {images.map((image) => {
              if (image.name.toLowerCase() === project.name.toLowerCase()) {
                return (
                  <Image
                    key={image.name}
                    src={image.src}
                    alt={project.name}
                    className="rounded-md duration-300 hover:scale-105"
                  />
                );
              }
            })}

            <div className="border-y-2 border-zinc-900 text-center">
              <p className="my-3 mx-auto min-h-[60px] max-w-[350px] text-xl">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center text-xl text-white">
              <Link
                aria-label="Website-Link"
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                className="m-5 cursor-pointer rounded-md bg-zinc-800 px-8 py-1 transition hover:underline"
              >
                Website
              </Link>
              <Link
                aria-label="Github-Link"
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                className="m-5 cursor-pointer rounded-md bg-zinc-800 px-8 py-1 transition hover:underline"
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
