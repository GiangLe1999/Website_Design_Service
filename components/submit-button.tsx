"use client";

import { ButtonHTMLAttributes, FC, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { MoveRightIcon, LoaderCircleIcon } from "lucide-react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type_1?: boolean;
  isLoading?: boolean;
}

const SubmitButton: FC<Props> = ({
  className,
  type_1,
  isLoading,
  ...props
}): JSX.Element => {
  const t_btn = useTranslations("common.button");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Button
      className={cn(
        "overflow-hidden relative rounded-[27px] px-[30px] h-[54px] text-lg font-semibold text-white custom-btn",
        isHovered && "after:animate-shine",
        type_1 && "bg-[linear-gradient(to_right,#ee4207_0%,#ff734e_100%)]",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type="submit"
      {...props}
    >
      {isLoading ? (
        <>
          {t_btn("loading")}{" "}
          <LoaderCircleIcon className="w-5 h-5 ml-2 animate-spin" />{" "}
        </>
      ) : (
        <>
          {t_btn("submit")} <MoveRightIcon className="w-5 h-5 ml-2" />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;