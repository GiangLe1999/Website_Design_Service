import { FC, useMemo } from "react";
import SectionContainer from "../section-container";
import Logo from "../logo";
import { Link } from "@/app/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("header");

  const headerItems = useMemo(
    () => [
      {
        title: t("website_design"),
        href: "/",
      },
      {
        title: t("property_website"),
        href: "/thiet-ke-website-bat-dong-san",
      },
      {
        title: t("furniture_website"),
        href: "/thiet-ke-website-noi-that",
      },
      {
        title: t("ecommerce_website"),
        href: "/thiet-ke-website-ban-hang",
      },
      {
        title: t("travel_website"),
        href: "/thiet-ke-website-du-lich",
      },
      {
        title: t("business_website"),
        href: "/thiet-ke-website-doanh-nghiep",
      },
      {
        title: t("blog"),
        href: "/blog",
      },
      {
        title: t("contact"),
        href: "/lien-he",
      },
    ],
    [t]
  );

  return (
    <header className="container">
      <SectionContainer>
        <div className="flex justify-between py-[10px] h-[100px]">
          <div className="flex items-center gap-[30px]">
            <Link className="w-[107px]" href="/">
              <Logo />
            </Link>

            <nav className="flex items-center h-full">
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
            </nav>
          </div>

          <div className="h-full grid place-items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </SectionContainer>
    </header>
  );
};

export default Header;
