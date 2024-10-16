'use client';

import { FC, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { MoveRightIcon } from 'lucide-react';

interface Props {
  className?: string;
  type_1?: boolean;
  type_2?: boolean;
  type_4?: boolean;
  type_5?: boolean;
  type_6?: boolean;
}

const SpecialCallButton: FC<Props> = ({
  className,
  type_1,
  type_2,
  type_4,
  type_5,
  type_6,
  ...props
}): JSX.Element => {
  const t_btn = useTranslations('common.button');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Button
      className={cn(
        'overflow-hidden relative rounded-[27px] px-[30px] sm:h-[54px] h-[48px] sm:text-lg text-base font-semibold text-white custom-btn sm:w-fit w-full',
        isHovered && 'after:animate-shine',
        'bg-transparent hover:bg-transparent rounded-none sm:h-[69px] h-[54px] !py-0 sm:w-[300px] w-[240px]',
        className
      )}
      style={{
        backgroundImage: 'url(/travel-page/button-normal-style.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <a href="tel:0962334807" className="flex items-center">
        {t_btn('call')} <MoveRightIcon className="w-5 h-5 ml-2" />
      </a>
    </Button>
  );
};

export default SpecialCallButton;
