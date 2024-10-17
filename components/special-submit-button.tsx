'use client';

import { ButtonHTMLAttributes, FC, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { MoveRightIcon, LoaderCircleIcon } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
}

const SpecialSubmitButton: FC<Props> = ({ className, isLoading, ...props }): JSX.Element => {
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
        backgroundImage: 'url(/travel-page/button-normal-style-red.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type="submit"
      {...props}
    >
      {isLoading ? (
        <>
          {t_btn('loading')} <LoaderCircleIcon className="w-5 h-5 ml-2 animate-spin" />{' '}
        </>
      ) : (
        <>
          {t_btn('submit')} <MoveRightIcon className="w-5 h-5 ml-2" />
        </>
      )}
    </Button>
  );
};

export default SpecialSubmitButton;
