import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Dermistech",
    href: "/projects",
    tags: [
      "next js",
      "tailwind",
      "redux toolkit",
      "redux thunk",
      "github",
      "pwa",
      "rest api",
    ],
    image: {
      LIGHT: "/images/projects/Dermistech/Dermistech.webp",
      DARK: "/images/projects/Dermistech/Dermistech.webp",
    },
  },
  {
    index: 2,
    title: "Cafe Restaurant",
    href: "/projects",
    tags: ["react-i18", "css module", "rest api", "firebase"],
    image: {
      LIGHT: "/images/projects/cafe resturant/Restaurant9.webp",
      DARK: "/images/projects/cafe resturant/Restaurant9.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Json tree",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Cafe Restaurant",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/cafe resturant/Restaurant.webp",
      "/images/projects/cafe resturant/Restaurant1.webp",
      "/images/projects/cafe resturant/Restaurant2.webp",
    ],
    description: "Firebase is banned in Iran,please open it with VPN",
    sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://reactrestaurant1400.netlify.app/",
  },
  {
    name: "Dermistech",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/Dermistech/Dermistech (1).webp",
      "/images/projects/Dermistech/Dermistech1 (1).webp",
      "/images/projects/Dermistech/Dermistech2 (1).webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "",
    liveWebsiteHref: "https://dermistech.ir/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Mizban yab",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/Mizban yab/5.webp",
      "/images/projects/Mizban yab/6.webp",
      "/images/projects/Mizban yab/7.webp",
      "/images/projects/Mizban yab/8.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "",
  },
  {
    name: "Yashami",
    favicon: "",
    imageUrl: [
      "/images/projects/Yashami/1.webp",
      "/images/projects/Yashami/2.webp",
      "/images/projects/Yashami/3.webp",
      "/images/projects/Yashami/4.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
