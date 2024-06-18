import Header from "@/components/header";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PublicPagesLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PublicPagesLayout;
