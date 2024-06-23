import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  customClassname?: string;
  type_1?: boolean;
  t: any;
}

const CustomHeading2: FC<Props> = ({
  customClassname,
  type_1,
  t,
}): JSX.Element => {
  return (
    <h2
      className={cn(
        "text-[50px] font-bold leading-[1.2] mb-5 ",
        type_1 && "text-primary",
        customClassname
      )}
    >
      {t.rich("heading", {
        orange: (chunks: any) => (
          <span className={type_1 ? "text-secondary" : ""}>{chunks}</span>
        ),
      })}
    </h2>
  );
};

export default CustomHeading2;
