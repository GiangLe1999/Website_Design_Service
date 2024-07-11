import { FC } from 'react';
import Reveal from '../reveal';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';

interface Props {}

const CallToActions: FC<Props> = (props): JSX.Element => {
  return (
    <Reveal customClassname="flex sm:flex-row flex-col items-center justify-center gap-[14px] mt-10">
      <ConsultButtton type_2 />
      <CallButton type_2 />
    </Reveal>
  );
};

export default CallToActions;
