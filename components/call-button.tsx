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

const CallButton: FC<Props> = ({
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
        className
      )}
      style={{
        background: type_1
          ? 'linear-gradient(to right,#000248 0%,#565aca 100%)'
          : type_2
          ? 'linear-gradient(to right,#035980 0%,#00788a 100%)'
          : type_4
          ? 'linear-gradient(to right, #767a7e 0%, #666666 100%)'
          : type_5
          ? 'linear-gradient(to right, #00CBF3 0%, #09B0EA 100%)'
          : type_6
          ? 'linear-gradient(to right, #0053d4 0%, #598cdd 100%)'
          : '',
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

export default CallButton;
