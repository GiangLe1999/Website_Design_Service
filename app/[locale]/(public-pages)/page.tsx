import Section1 from "@/components/home-page/section-1";
import { NextPage } from "next";

interface Props {
  params: {
    locale: string;
  };
}

const page: NextPage<Props> = () => {
  return (
    <>
      <Section1 />
    </>
  );
};

export default page;
