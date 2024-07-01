import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';
import Reveal from './reveal';

interface Props {
  customClassname?: string;
  type_1?: boolean;
  type_2?: boolean;
  type_3?: boolean;
  t: any;
}

const CustomHeading2: FC<Props> = ({ customClassname, type_1, type_2, type_3, t }): JSX.Element => {
  return (
    <Reveal>
      <h2
        className={cn(
          'section-heading-2 font-bold mb-5',
          type_1 && 'text-primary',
          customClassname
        )}
      >
        {t.rich('heading', {
          orange: (chunks: any) => (
            <span
              className={
                type_1 ? 'text-secondary' : type_2 ? 'text-dark_blue' : type_3 ? 'text-white' : ''
              }
            >
              {chunks}
            </span>
          ),
        })}
      </h2>
    </Reveal>
  );
};

export default CustomHeading2;
