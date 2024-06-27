import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxWidth?: string;
  padding?: string;
  customClassName?: string;
}

const ContentContainer: FC<Props> = ({
  children,
  maxWidth = "max-w-[1200px]",
  padding = "px-5 sm:px-9",
  customClassName = "",
}): JSX.Element => {
  return (
    <div className={cn("mx-auto", maxWidth, padding, customClassName)}>
      {children}
    </div>
  );
};

export default ContentContainer;
