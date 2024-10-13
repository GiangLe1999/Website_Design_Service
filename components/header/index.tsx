'use client';

import { FC, useEffect, useMemo, useState } from 'react';
import Logo from '../logo';
import { Link, usePathname } from '@/app/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher';
import ContentContainer from '../content-container';
import { AlignLeftIcon } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';
import { cn } from '@/lib/utils';

interface Props {}

const headerItems = [
  {
    title: 'website_design',
    href: '',
  },
  {
    title: 'property_website',
    href: 'thiet-ke-website-bat-dong-san',
  },
  {
    title: 'furniture_website',
    href: 'thiet-ke-website-noi-that',
  },
  {
    title: 'ecommerce_website',
    href: 'thiet-ke-website-ban-hang',
  },
  {
    title: 'travel_website',
    href: 'thiet-ke-website-du-lich',
  },
  {
    title: 'business_website',
    href: 'thiet-ke-website-doanh-nghiep',
  },
  {
    title: 'blog',
    href: 'blog',
  },
  {
    title: 'contact',
    href: 'lien-he',
  },
];

const Header: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('header');
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const currentHref = pathname.split('/')[1];
  const location = usePathname();
  const type = useMemo(() => {
    switch (location) {
      case '/':
        return 'type_1';
      case '/thiet-ke-website-bat-dong-san':
        return 'type_2';
      case '/thiet-ke-website-noi-that':
        return 'type_3';
      case '/thiet-ke-website-ban-hang':
        return 'type_4';
      case '/thiet-ke-website-du-lich':
        return 'type_5';
      case '/thiet-ke-website-doanh-nghiep':
        return 'type_6';
      case '/blog':
        return 'type_7';
      case '/lien-he':
        return 'type_8';
      default:
        return 'type_1';
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        itemType="https://schema.org/WPHeader"
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition',
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        )}
      >
        <ContentContainer>
          <div className="flex justify-between py-[10px] h-20">
            <button
              type="button"
              className="xl:hidden block w-[50px]"
              onClick={() => setShowSidebar(!showSidebar)}
              aria-label="Open sidebar"
            >
              <AlignLeftIcon
                className={cn(
                  'w-6 h-6 text-primary',
                  isScrolled || type === 'type_1' ? 'text-black' : 'text-white'
                )}
              />
            </button>

            <div className="flex items-center gap-[30px]">
              <Link className="w-[80px] aspect-[1.33] relative" href="/">
                <Logo />
              </Link>

              <nav className="h-full items-center hidden xl:flex">
                <ul className="flex items-center gap-6 h-full">
                  {headerItems.map((item) => (
                    <li key={item.title} className="leading-none text-[13px] font-bold h-full">
                      <Link
                        className={cn(
                          "flex items-center h-full relative transition-colors after:absolute after:contents-[''] after:left-0 after:bottom-5 after:h-[2px] after:transition-all",
                          type === 'type_1'
                            ? 'text-typography after:bg-secondary hover:text-secondary'
                            : type === 'type_2'
                            ? `${isScrolled ? 'text-typography' : 'text-white'} ${
                                isScrolled
                                  ? 'after:bg-dark_blue hover:text-dark_blue'
                                  : 'after:bg-[#ffffff] hover:text-[#ffffff]'
                              }`
                            : type === 'type_3'
                            ? `${
                                isScrolled ? 'text-typography' : 'text-white'
                              } hover:text-[#dfa041]`
                            : type === 'type_4'
                            ? `${isScrolled ? 'text-typography' : 'text-white'} ${
                                isScrolled
                                  ? 'after:bg-[#e30e27] hover:text-[#e30e27]'
                                  : 'after:bg-[#ffffff] hover:text-[#ffffff]'
                              }`
                            : 'text-white',
                          currentHref === item.href && type === 'type_1'
                            ? 'text-secondary after:w-full'
                            : currentHref === item.href && type === 'type_2'
                            ? `${isScrolled ? 'text-dark_blue' : 'text-[#ffffff]'} after:w-full`
                            : currentHref === item.href && type === 'type_3'
                            ? 'text-[#dfa041] after:bg-[#dfa041] after:w-full hover:text-[#dfa041]'
                            : currentHref === item.href && type === 'type_4'
                            ? `${isScrolled ? 'text-[#e30e27]' : 'text-[#ffffff]'} after:w-full`
                            : 'after:w-0 hover:after:!w-full'
                        )}
                        href={('/' + item.href) as any}
                      >
                        {t(item.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="h-full flex items-center">
              <LanguageSwitcher type={type} isScrolled={isScrolled} />
            </div>
          </div>
        </ContentContainer>
      </header>

      <MobileSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        items={headerItems}
        currentHref={currentHref}
      />
    </>
  );
};

export default Header;
