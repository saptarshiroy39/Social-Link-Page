import {
  IconWorld,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGithub,
} from "@tabler/icons-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <IconWorld {...props} />,
  linkedin: (props: IconProps) => <IconBrandLinkedin {...props} />,
  x: (props: IconProps) => <IconBrandX {...props} />,
  github: (props: IconProps) => <IconBrandGithub {...props} />,
};
