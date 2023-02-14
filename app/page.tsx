import HeroSection from "@/app/components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";

export interface Project {
  id: number;
  homepage: string;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  stargazers_count: number;
}

const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch("https://api.github.com/users/Jayzumen/repos");
  const data: Project[] = await response.json();
  const filteredData: Project[] = data.filter(
    (repo) => repo.homepage && repo.description && repo.stargazers_count > 0
  );
  filteredData.sort((a, b) => {
    const dateA: Date = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });
  return filteredData;
};

export default async function Home() {
  const projects = await fetchProjects();
  return (
    <>
      <HeroSection />
      <About />
      <Projects projects={projects} />
    </>
  );
}
