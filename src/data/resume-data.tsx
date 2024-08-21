import { MonitoLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abe Chen",
  initials: "AC",
  location: "Taichung City, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taichung,+Taiwan",
  about:
    "Frontend Developer focused on building products with extra attention to details. My work ethos revolves around 'Solving problems, creating value'",

  summary:
    "As a Frontend Developer with over 3 years of experience, I've led the development of several products from start to finish, guiding teams to create optimal working environments. My expertise lies in TypeScript, React, Next.js, Vue3, and Nuxt3. I've honed my ability to balance remote and in-person collaboration, ensuring efficient task completion and effective teamwork.",
  avatarUrl: "https://avatars.githubusercontent.com/u/46858104?v=4",
  personalWebsiteUrl: "https://abechen.net/",
  contact: {
    email: "abe1272001@gmail.com",
    tel: "+886 955124733",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/abe1272001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abe127/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/abe_chen1212",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Yuan Ze University of Management",
      degree:
        "Bachelor's Degree of Business Administration(Global Business Management Program)",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "TWJOIN 哲煜科技",
      link: "https://twjoin.com/",
      badges: ["Partial Remote"],
      title: "Senior Frontend Developer",
      start: "2022.12",
      end: null,
      description:
        "Led a six-person frontend team, establishing project infrastructures from scratch. Responsibilities included task assignment, code reviews, mentoring new team members, and maintaining frontend documentation standards. Collaborated with PMs, UI/UX designers, backend engineers, and app engineers. Demonstrated capability to independently develop frontend projects. Technologies: TypeScript, Next.js/React, Nuxt3/Vue3, TanStack Query, Pinia, Jotai, TailwindCSS, ChakraUI, Shadcn/ui, VantUI, Docker",
    },
    {
      company: "Farmland 農田科技股份有限公司",
      link: "https://farmland.tw/",
      badges: [],
      title: "Frontend Developer",
      start: "2022.05",
      end: "2022.11",
      description:
        "Developed a management system using Next.js/React and created macOS Apps with SwiftUI, integrating SDKs and backend APIs. Technologies: TypeScript, Next.js, React, Redux RTK, TailwindCSS, ChakraUI",
    },
    {
      company: "Hyena Inc. 凱納股份有限公司",
      link: "https://www.hyena-ebike.com/?lang=zh-hant",
      badges: [],
      title: "Frontend Developer",
      start: "2021.10",
      end: "2022.04",
      description:
        "Developed the Hyena Service Tool, a desktop application using ElectronJS and VueJS, integrating electric bicycle SDK and backend APIs. Implemented state management with Vuex and Pinia, gaining experience in transitioning between the two. Managed version releases via Azure Pipeline and implemented client-side error and operation monitoring using Datadog. Collaborated with cross-functional teams and applied Agile development methodologies. Technologies: Electron.js, Vue, Vuex, Pinia, TypeScript, SCSS",
    },
    {
      company: "Project 普羅傑有限公司",
      link: "",
      badges: [],
      title: "Frontend Developer",
      start: "2021.02",
      end: "2021.10",
      description:
        "Maintained and optimized portal and admin websites for gaming companies, improving performance and user experience. Collaborated with backend engineers to implement new features and integrate new technologies. Technologies: JavaScript, React, Bootstrap, jQuery",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue3/Nuxt3",
    "Electron.js",
    "Node.js",
    "TailwindCSS",
    "TanStack Query",
    "Git Flow",
  ],
  hobbies: [
    "Investing",
    "Dancing",
    "Planting",
    "Reading",
    "Running",
    "Music",
    "Poker",
  ],
  projects: [
    {
      title: "AI Training Tool",
      techStack: [
        "TypeScript",
        "Next.js/React",
        "TanStack Query",
        "Shadcn/ui",
        "TailwindCSS",
        "D3",
      ],
      description:
        "A model training platform that assists users in training AI models for various tasks.",
    },
    {
      title: "CarFinder 智慧找車",
      techStack: [
        "TypeScript",
        "Nuxt3/Vue3",
        "TanStack Query",
        "VantUI",
        "UnoCSS",
        "SEO",
      ],
      description:
        "A web platform for the Yulon Group that helps users find their ideal car, compare prices, and schedule appointments with dealers.",
      link: {
        label: "https://carfinder.oppenai.io/",
        href: "https://carfinder.oppenai.io/",
      },
    },
    {
      title: "Wowprime 王品瘋美食",
      techStack: [
        "Next.js/React",
        "JavaScript",
        "ChakraUI",
        "Redux",
        "Google Maps",
        "GA4",
        "Flutter Webview",
      ],
      description:
        "A web application for the Wowprime group, enabling members to manage orders, payments, discover interesting restaurants and events.",
      link: {
        label: "wowprime-mobile-web.wowfmsapp.com",
        href: "https://wowprime-mobile-web.wowfmsapp.com/onboarding",
      },
    },
    {
      title: "Hyena Service Tool",
      techStack: ["ElectronJS", "Vue3", "Pinia", "Vuex", "Datadog", "SCSS"],
      description:
        "A desktop application supporting e-bike dealers in optimizing the maintenance of e-bikes and enhancing the end-user experience.",
      link: {
        label: "www.hyena-ebike.com",
        href: "https://www.hyena-ebike.com/software_service/service_tool/?lang=zh-hant",
      },
    },
  ],
} as const;
