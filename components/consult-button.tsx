'use client';

import { ButtonHTMLAttributes, FC, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { MoveRightIcon } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type_1?: boolean;
  type_2?: boolean;
  type_4?: boolean;
  type_5?: boolean;
}

const ConsultButtton: FC<Props> = ({
  className,
  type_1,
  type_2,
  type_4,
  type_5,
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
          ? 'linear-gradient(to right,#ee4207 0%,#ff9173 100%)'
          : type_2
          ? 'linear-gradient(to right,#c30017 0%, #ff4646 100%)'
          : type_4
          ? 'linear-gradient(to right, #daaa60 0%, #8d5520 100%)'
          : type_5
          ? 'linear-gradient(to right, #FF283F 0%, #FF5226 100%)'
          : '',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {t_btn('consult')} <MoveRightIcon className="w-5 h-5 ml-2" />
    </Button>
  );
};

export default ConsultButtton;
