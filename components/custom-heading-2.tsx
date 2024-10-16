import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';
import Reveal from './reveal';

interface Props {
  customClassname?: string;
  type_1?: boolean;
  type_2?: boolean;
  type_3?: boolean;
  type_4?: boolean;
  type_5?: boolean;
  type_6?: boolean;
  t: any;
}

const CustomHeading2: FC<Props> = ({
  customClassname,
  type_1,
  type_2,
  type_3,
  type_4,
  type_5,
  type_6,
  t,
}): JSX.Element => {
  return (
    <Reveal>
      <h2
        className={cn(
          'section-heading-2 font-bold mb-5',
          type_1 && 'text-primary',
          type_2 && 'text-dark_blue',
          type_4 && 'text-[#666666]',
          type_2 || type_3 ? 'font-light' : 'font-bold',
          type_5 && 'text-[#535353]',
          type_6 && 'text-transparent bg-clip-text bg-gradient-to-r from-[#154F94] to-[#16a0be]',
          customClassname
        )}
      >
        {t.rich('heading', {
          bold: (chunks: any) => (
            <span
              className={
                type_1
                  ? 'text-secondary'
                  : type_2
                  ? 'text-dark_blue font-extrabold'
                  : type_3
                  ? 'text-white font-extrabold'
                  : type_5
                  ? 'text-[#E30E27] font-extrabold'
                  : type_6
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#154F94] to-[#16a0be] font-extrabold'
                  : ''
              }
            >
              {chunks}
            </span>
          ),
          br: () => <br />,
        })}
      </h2>
    </Reveal>
  );
};

export default CustomHeading2;
