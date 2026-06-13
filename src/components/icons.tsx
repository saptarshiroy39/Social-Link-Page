import {
  IconWorld,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandPython,
  IconDiamonds,
} from "@tabler/icons-react";

import { PyPI } from "@/components/ui/svgs/pypi";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <IconWorld {...props} />,
  linkedin: (props: IconProps) => <IconBrandLinkedin {...props} />,
  x: (props: IconProps) => <IconBrandX {...props} />,
  github: (props: IconProps) => <IconBrandGithub {...props} />,
  brandVscode: (props: IconProps) => <IconBrandVscode {...props} />,
  python: (props: IconProps) => <IconBrandPython {...props} />,
  openvsx: (props: IconProps) => <IconDiamonds {...props} />,
  pypi: (props: IconProps) => <PyPI {...props} />,
};
