'use client';

import { Crisp } from 'crisp-sdk-web';
import { FC, useEffect } from 'react';

interface Props {}

const CrispChat: FC<Props> = (props): null => {
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_MY_CRISP_WEBSITE_ID as string);
  }, []);
  return null;
};

export default CrispChat;
