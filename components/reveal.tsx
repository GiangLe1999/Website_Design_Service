'use client';

import { FC, ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Props {
  children: ReactNode;
  customClassname?: string;
}

const Reveal: FC<Props> = ({ children, customClassname }): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={customClassname || ''}
      variants={{
        hidden: { opacity: 0, y: 55 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.3, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
