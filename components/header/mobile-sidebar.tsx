'use client';

import { Link } from '@/app/navigation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { FC, useMemo } from 'react';
import Logo from '../logo';
import { useTranslations } from 'next-intl';
import {
  GlobeIcon,
  HotelIcon,
  SofaIcon,
  PlaneIcon,
  ShoppingCartIcon,
  Building2Icon,
  RssIcon,
  HeadsetIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Props {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
  items: {
    title: string;
    href: string;
  }[];
}

const iconClassname = 'w-4 h-4';
const icons = [
  <GlobeIcon className={iconClassname} key={1} />,
  <HotelIcon className={iconClassname} key={2} />,
  <SofaIcon className={iconClassname} key={3} />,
  <ShoppingCartIcon className={iconClassname} key={4} />,
  <PlaneIcon className={iconClassname} key={5} />,
  <Building2Icon className={iconClassname} key={6} />,
  <RssIcon className={iconClassname} key={7} />,
  <HeadsetIcon className={iconClassname} key={8} />,
];

export const MobileSidebar: FC<Props> = ({ showSidebar, setShowSidebar, items }) => {
  const t = useTranslations('common');
  const sidebarItems = useMemo(
    () => items.map((item, index) => ({ ...item, icon: icons[index] })),
    [items]
  );
  const pathname = usePathname();
  return (
    <aside className="xl:hidden block">
      <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
        <SheetContent side="left" className="flex flex-col justify-between">
          <SheetHeader className="border-b pb-3">
            <div className="flex items-center gap-3">
              <Link className="w-[100px] relative aspect-[1.33]" href="/">
                <Logo />
              </Link>
              <div className="text-left">
                <SheetTitle>River Lee</SheetTitle>
                <SheetDescription>{t('site_field')}</SheetDescription>
              </div>
            </div>
          </SheetHeader>
          <ul className="flex-1 space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href as any}
                  onClick={() => {
                    setShowSidebar(false);
                  }}
                  className={cn(
                    'flex items-center gap-3 rounded-md p-3 group transition duration-500',
                    pathname.includes(item.href)
                      ? 'bg-[linear-gradient(to_right,#ee4207_0%,#ff9173_100%)] text-white'
                      : 'hover:translate-x-2 hover:text-secondary'
                  )}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <SheetFooter className="text-sm !justify-start border-t pt-6">
            © 2024 RiverLee - All rights reserved
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default MobileSidebar;
