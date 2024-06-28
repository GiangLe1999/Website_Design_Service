'use client';

import { ButtonHTMLAttributes, FC, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { MoveRightIcon } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type_1?: boolean;
}

const ConsultButtton: FC<Props> = ({ className, type_1, ...props }): JSX.Element => {
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
        type_1 && 'bg-[linear-gradient(to_right,#ee4207_0%,#ff9173_100%)]',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {t_btn('consult')} <MoveRightIcon className="w-5 h-5 ml-2" />
    </Button>
  );
};

export default ConsultButtton;
