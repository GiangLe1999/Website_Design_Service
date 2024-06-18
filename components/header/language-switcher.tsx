"use client";

import { useParams } from "next/navigation";
import { FC, useTransition } from "react";
import { useRouter, usePathname } from "@/app/navigation";
import { useLocale, useTranslations } from "next-intl";
// import { useQuery } from "@tanstack/react-query";
// import { getProjectSlugMappings } from "@/lib/slug-mappings";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import VNFlag from "@/public/icons/vietnam-flag.webp";
import ENFlag from "@/public/icons/england-flag.webp";
import Image from "next/image";

interface Props {}

const LanguageSwitcher: FC<Props> = (props): JSX.Element => {
  // const { data: projectSlugMappings } = useQuery({
  //   queryKey: ["get-project-slug-mappings"],
  //   queryFn: () => getProjectSlugMappings(),
  // });

  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("header");

  const changeLocaleHandler = () => {
    startTransition(() => {
      // if (pathname.startsWith("/project") || pathname.startsWith("/du-an")) {
      //   const currentSlug = params.projectSlug as string;
      //   const newSlug =
      //     locale === "vi"
      //       ? projectSlugMappings[currentSlug]
      //       : Object.keys(projectSlugMappings).find(
      //           (key) => projectSlugMappings[key] === currentSlug
      //         );

      //   router.replace(
      //     { pathname, params: { ...params, projectSlug: newSlug } },
      //     { locale: locale === "vi" ? "en" : "vi" }
      //   );
      // } else
      //   router.replace(
      //     { pathname, params },
      //     { locale: locale === "vi" ? "en" : "vi" }
      //   );
      router.replace(
        // @ts-ignore
        { pathname, params },
        { locale: locale === "vi" ? "en" : "vi" }
      );
    });
  };

  const changeToVietnameseLocale = () => {
    if (locale === "vi") return;

    router.replace(
      // @ts-ignore
      { pathname, params },
      { locale: "vi" }
    );
  };

  const changeToEnglishLocale = () => {
    if (locale === "en") return;

    router.replace(
      // @ts-ignore
      { pathname, params },
      { locale: "en" }
    );
  };

  return (
    // <button
    //   className="uppercase font-bold text-primary opacity-70 hover:opacity-100 transition-opacity text-sm"
    //   onClick={changeLocaleHandler}
    // >
    //   {locale}
    // </button>
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          <Image
            src={locale === "vi" ? VNFlag : ENFlag}
            alt={locale}
            width={25}
            className="rounded-[2px]"
          />{" "}
          <div className="h-5 w-[1px] bg-[#ccc]"></div>
          <span className="uppercase font-philosopher font-bold text-sm">
            {locale}
          </span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="p-0 rounded w-fit">
        <ul>
          <li
            className="flex items-center gap-3 p-3 border-b cursor-pointer bg-white hover:bg-gray-100 transition"
            onClick={changeToVietnameseLocale}
          >
            <Image
              src={VNFlag}
              alt="Vietnamese Flag"
              width={25}
              className="rounded-[2px]"
            />{" "}
            <span className="text-xs font-semibold">
              {t("vietnamese")} ( VI )
            </span>
          </li>
          <li
            className="flex items-center gap-3 p-3 cursor-pointer bg-white hover:bg-gray-100 transition"
            onClick={changeToEnglishLocale}
          >
            <Image
              src={ENFlag}
              alt="England flag"
              width={25}
              className="rounded-[2px]"
            />{" "}
            <span className="text-xs font-semibold">{t("english")} ( EN )</span>
          </li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LanguageSwitcher;
