import type { NavigationMenuItem } from "./NavigationMenu.types";

const NavigationMenuOptions: Record<string, NavigationMenuItem> = {
  home: {
    name: "Home",
    route: "/",
    url: "/",
  },
  aboutme: {
    name: "About Me",
    route: "/aboutme",
    url: "/aboutme",
  },
  contactme: {
    name: "Contact Me",
    route: "/contactme",
    url: "/contactme",
  },
  education: {
    name: "Education",
    route: "/education",
    url: "/education",
  },
  experience: {
    name: "Experience",
    route: "/experience",
    url: "/experience",
  },
  projects: {
    name: "Projects",
    route: "/projects",
    url: "/projects",
  },
  todo: {
    name: "Todo",
    route: "/todo",
    url: "/todo",
  },
};

export type { NavigationMenuItem };
export default NavigationMenuOptions;
