const Header = dynamic(() => import('@/components/header'));
const Footer = dynamic(() => import('@/components/footer'));
import dynamic from 'next/dynamic';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PublicPagesLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PublicPagesLayout;
