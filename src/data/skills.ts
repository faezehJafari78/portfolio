import { SiSocketdotio, SiNextdotjs } from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import BootstrapSvg from "@/public/icons/Bootstrap.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import TrelloSvg from "@/public/icons/Trello.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
      },
    ],
  },
  // {
  //   sectionName: "Backend",
  //   skills: [
  //     {
  //       name: "Nodejs",
  //       icon: NodejsSvg,
  //     },
  //     {
  //       name: "Express",
  //       icon: SiExpress,
  //     },
  //     {
  //       name: "Socket.io",
  //       icon: SiSocketdotio,
  //     },
  //     {
  //       name: "Flask",
  //       icon: SiFlask,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Databases and ORMs",
  //   skills: [
  //     {
  //       name: "MongoDB",
  //       icon: MongoDBSvg,
  //     },
  //     {
  //       name: "Postgress",
  //       icon: PostgressSvg,
  //     },
  //     {
  //       name: "Prisma",
  //       icon: SiPrisma,
  //     },
  //   ],
  // },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Trello",
        icon: TrelloSvg,
      },
    ],
  },
];
