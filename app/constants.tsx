import NetflixClone from "../assets/portfolio/netflixclone.jpg";
import Foodel from "../assets/portfolio/foodel.jpg";
import Pokefans from "../assets/portfolio/pokefans.jpg";
import CineScope from "../assets/portfolio/cinescope.jpg";
import { BsGit } from "react-icons/bs";
import {
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

export const images = [
  {
    name: "NetflixClone",
    src: NetflixClone,
  },
  {
    name: "foodel",
    src: Foodel,
  },
  {
    name: "pokefans",
    src: Pokefans,
  },
  {
    name: "cinescope",
    src: CineScope,
  },
];

export const skills = [
  {
    name: "TypeScript",
    icon: <SiTypescript size={50} className="text-sky-500" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={50} className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <SiReact size={50} className="text-sky-500" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={50} className="text-black" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={50} className="text-cyan-500" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={50} className="text-sky-500" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={50} className="text-sky-400" />,
  },
  {
    name: "Git",
    icon: <BsGit size={50} className="text-orange-600" />,
  },
];
