import Image from "next/image";
import { FC } from "react";
import logo from "@/public/logo.png";

interface Props {}

const Logo: FC<Props> = (props): JSX.Element => {
  return (
    <Image
      src={logo}
      alt="Logo"
      style={{ objectFit: "cover" }}
      fill
      sizes="100vw"
    />
  );
};

export default Logo;
