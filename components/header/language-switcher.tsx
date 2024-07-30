'use client';

import { useParams } from 'next/navigation';
import { FC, useTransition } from 'react';
import { useRouter, usePathname } from '@/app/navigation';
import { useLocale, useTranslations } from 'next-intl';
// import { useQuery } from "@tanstack/react-query";
// import { getProjectSlugMappings } from "@/lib/slug-mappings";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import VNFlag from '@/public/icons/vietnam-flag.webp';
import ENFlag from '@/public/icons/england-flag.webp';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  type: 'type_1' | 'type_2' | 'type_3' | 'type_4' | 'type_5' | 'type_6' | 'type_7' | 'type_8';
  isScrolled: boolean;
}

const LanguageSwitcher: FC<Props> = ({ type, isScrolled }): JSX.Element => {
  // const { data: projectSlugMappings } = useQuery({
  //   queryKey: ["get-project-slug-mappings"],
  //   queryFn: () => getProjectSlugMappings(),
  // });

  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations('header');

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
        { locale: locale === 'vi' ? 'en' : 'vi' }
      );
    });
  };

  const changeToVietnameseLocale = () => {
    if (locale === 'vi') return;

    router.replace(
      // @ts-ignore
      { pathname, params },
      { locale: 'vi' }
    );
  };

  const changeToEnglishLocale = () => {
    if (locale === 'en') return;

    router.replace(
      // @ts-ignore
      { pathname, params },
      { locale: 'en' }
    );
  };

  return (
    // <button
    //   className="uppercase font-bold text-primary opacity-70 hover:opacity-100 transition-opacity text-sm"
    //   onClick={changeLocaleHandler}
    // >
    //   {locale}
    // </button>
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          <Image
            src={locale === 'vi' ? VNFlag : ENFlag}
            alt={locale}
            width={25}
            className="rounded-[2px]"
          />{' '}
          <div className="h-5 w-[1px] bg-[#ccc]"></div>
          <span
            className={cn(
              'uppercase font-bold text-sm',
              type === 'type_1'
                ? ' text-secondary'
                : type === 'type_2'
                ? `${isScrolled ? 'text-dark_blue' : 'text-[#ffffff]'}`
                : type === 'type_3'
                ? 'text-[#dfa041]'
                : ''
            )}
          >
            {locale}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent align="end" className="p-0 rounded w-fit">
        <ul>
          <li
            className={cn(
              'flex items-center gap-3 p-3 border-b cursor-pointer hover:bg-gray-100 transition',
              locale === 'vi' ? 'bg-gray-100' : 'bg-white',
              type === 'type_1'
                ? 'hover:text-secondary'
                : type === 'type_2'
                ? 'hover:text-dark_blue'
                : type === 'type_3'
                ? 'hover:text-[#dfa041]'
                : ''
            )}
            onClick={changeToVietnameseLocale}
          >
            <Image src={VNFlag} alt="Vietnamese Flag" width={25} className="rounded-[2px]" />{' '}
            <span className="text-xs font-semibold">{t('vietnamese')} ( VI )</span>
          </li>
          <li
            className={cn(
              'flex items-center gap-3 p-3 border-b cursor-pointer hover:bg-gray-100 transition',
              locale === 'vi' ? 'bg-gray-100' : 'bg-white',
              type === 'type_1'
                ? 'hover:text-secondary'
                : type === 'type_2'
                ? 'hover:text-dark_blue'
                : type === 'type_3'
                ? 'hover:text-[#dfa041]'
                : ''
            )}
            onClick={changeToEnglishLocale}
          >
            <Image src={ENFlag} alt="England flag" width={25} className="rounded-[2px]" />{' '}
            <span className="text-xs font-semibold">{t('english')} ( EN )</span>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;
