'use client';

import { FC, useEffect, useMemo, useState } from 'react';
import Logo from '../logo';
import { Link } from '@/app/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher';
import { cn } from '@/lib/utils';
import ContentContainer from '../content-container';
import { AlignLeftIcon } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';
import Reveal from '../reveal';

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition',
          scrolled ? 'bg-white shadow border-b' : 'bg-transparent'
        )}
      >
        <ContentContainer>
          <div className="flex justify-between py-[10px] h-[100px]">
            <button
              type="button"
              className="xl:hidden block w-[30px]"
              onClick={() => setShowSidebar(!showSidebar)}
              aria-label="Open sidebar"
            >
              <AlignLeftIcon className="w-6 h-6 text-primary" />
            </button>

            <div className="flex items-center gap-[30px]">
              <Reveal>
                <div className="w-[107px] aspect-[1.33]">
                  <Link className="w-full relative h-full block" href="/">
                    <Logo />
                  </Link>
                </div>
              </Reveal>

              <nav className="h-full">
                <Reveal customClassname="items-center h-full hidden xl:flex">
                  <ul className="flex items-center gap-6 h-full">
                    {headerItems.map((item) => (
                      <li key={item.href} className="text-[13px] font-bold h-full">
                        <Link
                          className="flex items-center h-full relative text-typography hover:text-secondary transition-colors after:absolute after:contents-[''] after:left-0 after:bottom-6 after:w-0 hover:after:!w-full after:bg-secondary after:h-[2px] after:transition-all"
                          href={item.href as any}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </nav>
            </div>

            <div className="h-full grid place-items-center">
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
