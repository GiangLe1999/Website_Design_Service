import { FC } from "react";
import ContentContainer from "../content-container";
import { Link } from "@/app/navigation";
import { useTranslations } from "next-intl";
import { Clock8Icon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import FacebookIcon from "@/public/icons/facebook.webp";
import InstagramIcon from "@/public/icons/instagram.webp";
import YoutubeIcon from "@/public/icons/youtube.webp";
import { cn } from "@/lib/utils";
import FooterForm from "./footer-form";

interface Props {}

const flexStyle = "flex items-center gap-1";

const secondColumnData = [
  { title: "website_design", link: "/" },
  { title: "property_website", link: "/thiet-ke-website-bat-dong-san" },
  { title: "furniture_website", link: "/thiet-ke-website-noi-that" },
  { title: "ecommerce_website", link: "/thiet-ke-website-ban-hang" },
  { title: "travel_website", link: "/thiet-ke-website-du-lich" },
  { title: "business_website", link: "/thiet-ke-website-doanh-nghiep" },
  { title: "download_software", link: "/" },
];

const Footer: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("footer");
  const t_common = useTranslations("common");

  return (
    <footer className="bg-[#05141f]">
      <ContentContainer customClassName="py-10">
        <div className="grid grid-cols-12 gap-10">
          {/* Column 1 */}
          <div className="col-span-5 flex flex-col gap-12">
            {/* Row 1 */}
            <div>
              <Link href="/" className="uppercase text-white font-bold">
                {t_common("site_name")}
              </Link>
              <p className="text-[#bcbcbc] text-xs mt-2 leading-5 max-w-[85%]">
                Dịch vụ thiết kế website chuyên nghiệp của RiverLee hướng tới
                việc nâng tầm thương hiệu của bạn trên Internet và cung cấp hệ
                sinh thái các giải pháp Marketing toàn diện. Chúng tôi cam kết
                mang đến cho bạn và doanh nghiệp của bạn một bệ phóng vững chắc
                cho mọi hoạt động kinh doanh.
              </p>
            </div>

            {/* Row 2 */}
            <div>
              <p className="uppercase text-white font-bold">
                {t("contact_with_us")}
              </p>

              <ul className="text-[#bcbcbc] text-xs space-y-2 mt-2 leading-5">
                <li className={flexStyle}>
                  <b className={flexStyle}>
                    <MailIcon className="w-3 h-3" />
                    Email:
                  </b>
                  <a className="" href="mailto:legiangbmt09@gmail.com">
                    legiangbmt09@gmail.com
                  </a>
                </li>
                <li className={flexStyle}>
                  <b className={flexStyle}>
                    <PhoneIcon className="w-3 h-3" />
                    {t_common("tel")}:
                  </b>
                  <a className="" href="tel:+84962334807">
                    84962334807
                  </a>
                </li>
                <li className={cn(flexStyle, "flex-wrap")}>
                  <b className={flexStyle}>
                    <MapPinIcon className="w-3 h-3" />
                    {t_common("address")}:
                  </b>
                  <span>{t_common("address_text")}</span>
                </li>
                <li className={cn(flexStyle, "flex-wrap")}>
                  <b className={flexStyle}>
                    <Clock8Icon className="w-3 h-3" />
                    {t_common("work_hours")}:
                  </b>
                  <span>{t_common("work_hours_text")}</span>
                </li>
              </ul>
            </div>

            {/*  Row 3 */}
            <div>
              <p className="uppercase text-white font-bold">
                {t("connect_with_us")}
              </p>
              <ul className="flex items-center gap-2 mt-3">
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={FacebookIcon}
                      alt="Facebook Icon"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={YoutubeIcon}
                      alt="Youtube Icon"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={InstagramIcon}
                      alt="Instagram Icon"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-3 flex flex-col gap-12">
            {/* Row 1 */}

            <div>
              <p className="uppercase text-white font-bold">{t("service")}</p>
              <ul className="text-[#bcbcbc] text-xs space-y-2 mt-2 leading-5">
                {secondColumnData.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.link as any}
                      className="hover:text-white hover:underline transition"
                    >
                      {t(service.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Row 2 */}
            <div>
              <p className="uppercase text-white font-bold">{t("policy")}</p>
              <ul className="text-[#bcbcbc] text-xs space-y-2 mt-2 leading-5">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white hover:underline transition"
                  >
                    {t("terms_of_use")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-white hover:underline transition"
                  >
                    {t("privacy_policy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-white hover:underline transition"
                  >
                    {t("payment_methods")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-4">
            <p className="uppercase text-white font-bold">{t("rfq")}</p>
            <p className="text-[#bcbcbc] text-xs mt-2 leading-5">
              {t("rfq_description")}
            </p>

            <FooterForm />
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
