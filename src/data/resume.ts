import home from "./home";
import stack from "./stack";
import experience from "./experience";
import education from "./education";
import projects from "./projects";
import about from "./about";
import header from "./header";
import theme from "./theme";
import navigation from "./navigation";

export const DATA = {
  ...home,
  about,
  stack,
  experience,
  education,
  projects,
  header,
  theme,
  navigation,
} as const;
