'use client';

import { FC, useMemo, useState } from 'react';
import Logo from '../logo';
import { Link } from '@/app/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher';
import ContentContainer from '../content-container';
import { AlignLeftIcon } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('header');
  const [showSidebar, setShowSidebar] = useState(false);

  const headerItems = useMemo(
    () => [
      {
        title: t('website_design'),
        href: '/',
      },
      {
        title: t('property_website'),
        href: '/thiet-ke-website-bat-dong-san',
      },
      {
        title: t('furniture_website'),
        href: '/thiet-ke-website-noi-that',
      },
      {
        title: t('ecommerce_website'),
        href: '/thiet-ke-website-ban-hang',
      },
      {
        title: t('travel_website'),
        href: '/thiet-ke-website-du-lich',
      },
      {
        title: t('business_website'),
        href: '/thiet-ke-website-doanh-nghiep',
      },
      {
        title: t('blog'),
        href: '/blog',
      },
      {
        title: t('contact'),
        href: '/lien-he',
      },
    ],
    [t]
  );

  return (
    <>
      <header
        itemType="https://schema.org/WPHeader"
        className="fixed inset-x-0 top-0 z-50 transition bg-white shadow border-b"
      >
        <ContentContainer>
          <div className="flex justify-between py-[10px] h-20">
            <button
              type="button"
              className="xl:hidden block w-[30px]"
              onClick={() => setShowSidebar(!showSidebar)}
              aria-label="Open sidebar"
            >
              <AlignLeftIcon className="w-6 h-6 text-primary" />
            </button>

            <div className="flex items-center gap-[30px]">
              <Link className="w-[80px] aspect-[1.33] relative" href="/">
                <Logo />
              </Link>

              <nav className="h-full items-center hidden xl:flex">
                <ul className="flex items-center gap-6 h-full">
                  {headerItems.map((item) => (
                    <li key={item.href} className="leading-none text-[13px] font-bold h-full">
                      <Link
                        className="flex items-center h-full relative text-typography hover:text-secondary transition-colors after:absolute after:contents-[''] after:left-0 after:bottom-5 after:w-0 hover:after:!w-full after:bg-secondary after:h-[2px] after:transition-all"
                        href={item.href as any}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="h-full flex items-center">
              <LanguageSwitcher />
            </div>
          </div>
        </ContentContainer>
      </header>

      <MobileSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        items={headerItems}
      />
    </>
  );
};

export default Header;
