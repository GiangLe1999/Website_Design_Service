import Section1 from "@/components/home-page/section-1";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

const page: NextPage<Props> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Section1 />
    </>
  );
};

export default page;
