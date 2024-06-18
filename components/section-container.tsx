import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxWidth?: string;
  padding?: string;
}

const SectionContainer: FC<Props> = ({
  children,
  maxWidth = "max-w-[1200px]",
  padding = "px-5",
}): JSX.Element => {
  return <div className={cn("mx-auto", maxWidth, padding)}>{children}</div>;
};

export default SectionContainer;
