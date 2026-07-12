import {
  IconWorld,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandPython,
  IconDiamonds,
  IconBook,
} from "@tabler/icons-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <IconWorld {...props} />,
  github: (props: IconProps) => <IconBrandGithub {...props} />,
  brandVscode: (props: IconProps) => <IconBrandVscode {...props} />,
  python: (props: IconProps) => <IconBrandPython {...props} />,
  openvsx: (props: IconProps) => <IconDiamonds {...props} />,
  book: (props: IconProps) => <IconBook {...props} />,
};
