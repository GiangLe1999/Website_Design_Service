'use client';

import { ButtonHTMLAttributes, FC, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import { MoveRightIcon } from 'lucide-react';
import { animate } from 'framer-motion';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const SpecialConsultButtton: FC<Props> = ({
  className,

  ...props
}): JSX.Element => {
  const t_btn = useTranslations('common.button');
  const [isHovered, setIsHovered] = useState(false);
  const locale = useLocale();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollToSection = () => {
    const sectionId = locale === 'vi' ? 'bao_gia_thiet_ke_website' : 'website_design_quote';
    const section = document.getElementById(sectionId);

    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;

      animateScroll(targetPosition); // Animate to the target position
    }
  };

  const animateScroll = (targetPosition: number) => {
    animate(window.pageYOffset, targetPosition, {
      duration: 1, // Duration in seconds
      onUpdate: (latest) => window.scrollTo(0, latest),
      ease: 'easeInOut', // Easing function
    });
  };

  return (
    <Button
      onClick={scrollToSection}
      className={cn(
        'overflow-hidden relative rounded-[27px] px-[30px] sm:h-[54px] h-[48px] sm:text-lg text-base font-semibold text-white custom-btn sm:w-fit w-full',
        isHovered && 'after:animate-shine',
        'bg-transparent hover:bg-transparent rounded-none sm:h-[69px] h-[54px] !py-0 sm:w-[300px] w-[240px]',
        className
      )}
      style={{
        backgroundImage: 'url(/travel-page/button-normal-style-red.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {t_btn('consult')} <MoveRightIcon className="w-5 h-5 ml-2" />
    </Button>
  );
};

export default SpecialConsultButtton;
