import Image from "next/image";
import { FC } from "react";
import logo from "@/public/logo.png";

interface Props {}

const Logo: FC<Props> = (props): JSX.Element => {
  return (
    <Image
      src={logo}
      alt="Logo"
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default Logo;
