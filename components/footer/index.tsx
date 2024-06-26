import { FC } from "react";
import ContentContainer from "../content-container";
import { Link } from "@/app/navigation";
import { useTranslations } from "next-intl";
import { Clock8Icon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import FacebookIcon from "@/public/icons/facebook.webp";
import InstagramIcon from "@/public/icons/instagram.webp";
import YoutubeIcon from "@/public/icons/youtube.webp";

interface Props {}

const Footer: FC<Props> = (props): JSX.Element => {
  // const t = useTranslations("footer");
  const t_common = useTranslations("common");

  return (
    <footer className="bg-[#05141f]">
      <ContentContainer customClassName="py-10">
        <div className="grid grid-cols-12">
          {/* Column 1 */}
          <div className="col-span-5 flex flex-col gap-12">
            {/* Row 1 */}
            <div>
              <Link href="/" className="uppercase text-white font-bold">
                {t_common("site_name")}
              </Link>
              <p className="text-[#999999] text-xs mt-2 leading-5">
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
                Liên hệ với chúng tôi
              </p>

              <ul className="text-[#999999] text-xs space-y-2 mt-2 leading-5">
                <li className="flex items-center gap-1">
                  <b className="flex items-center gap-1">
                    <MailIcon className="w-3 h-3" />
                    Email:
                  </b>
                  <a className="" href="mailto:legiangbmt09@gmail.com">
                    legiangbmt09@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-1">
                  <b className="flex items-center gap-1">
                    <PhoneIcon className="w-3 h-3" />
                    {t_common("tel")}:
                  </b>
                  <a className="" href="tel:+84962334807">
                    84962334807
                  </a>
                </li>
                <li className="flex items-center gap-1 flex-wrap">
                  <b className="flex items-center gap-1">
                    <MapPinIcon className="w-3 h-3" />
                    {t_common("address")}:
                  </b>
                  <span>{t_common("address_text")}</span>
                </li>
                <li className="flex items-center gap-1 flex-wrap">
                  <b className="flex items-center gap-1">
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
                Liên hệ với chúng tôi
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
          <div className="col-span-3"></div>

          {/* Column 2 */}
          <div className="col-span-4"></div>
        </div>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
