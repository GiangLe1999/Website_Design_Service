import { FC, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { MoveRightIcon } from 'lucide-react';

interface Props {
  className?: string;
  type_1?: boolean;
}

const CallButton: FC<Props> = ({ className, type_1 }): JSX.Element => {
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
        'overflow-hidden relative rounded-[27px] px-[30px] h-[54px] text-lg font-semibold text-white custom-btn',
        isHovered && 'after:animate-shine',
        type_1 && 'bg-[linear-gradient(to_right,#000248_0%,#565aca_100%)]',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {t_btn('call')} <MoveRightIcon className="w-5 h-5 ml-2" />
    </Button>
  );
};

export default CallButton;
