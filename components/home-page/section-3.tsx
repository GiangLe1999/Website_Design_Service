import Image from "next/image";
import { FC } from "react";
import image1 from "@/public/home-page/thiet-ke-landing-page.webp";
import image2 from "@/public/home-page/thiet-ke-trang-web-river-lee.webp";
import image3 from "@/public/home-page/thiet-ke-website.webp";
import image4 from "@/public/home-page/thiet-ke-website-bat-dong-san.webp";
import image5 from "@/public/home-page/website-ban-hang-online.webp";

interface Props {}

const Section3: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex bg-[#ebf1ef]">
      <div className="w-1/3 aspect-square mr-3">
        <Image
          src={image1}
          alt="Dịch vụ thiết kế web"
          className="object-cover w-full h-full rounded-r"
        />
      </div>

      <div className="w-1/3 aspect-square mr-3">
        <div className="flex gap-3">
          <div className="w-1/2 flex flex-col gap-3">
            <Image
              src={image2}
              alt="Thiết kế landing page"
              className="w-full aspect-square rounded object-cover"
            />

            <Image
              src={image3}
              alt="Thiết kế website"
              className="w-full aspect-square rounded object-cover"
            />
          </div>
          <div className="flex-1 aspect-[1/2]">
            <Image
              src={image4}
              alt="Thiết kế website bất động sản"
              className="w-full h-full rounded object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 aspect-square">
        <Image
          src={image5}
          alt="Website bán hàng online"
          className="object-cover w-full h-full rounded-l"
        />
      </div>
    </div>
  );
};

export default Section3;
