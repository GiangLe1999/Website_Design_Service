'use client';

import { Link } from '@/app/navigation';
import { cn } from '@/lib/utils';
import { FC, useEffect, useRef, useState } from 'react';

interface Props {}

const NavigationDots: FC<Props> = (props): JSX.Element => {
  const [sectionIds, setSectionIds] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const ids = sections.map((section) => section.id);
    setSectionIds(ids);

    // Create an IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Adjust threshold as needed
    );

    // Observe each section
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Cleanup on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <ul className="fixed sm:left-[10px] left-auto right-[10px] sm:right-auto top-1/2 -translate-y-1/2 z-[49] flex flex-col gap-4 w-fit">
      {sectionIds.map((id) => (
        <li key={id} onClick={() => setCurrentSection(id)}>
          <Link
            aria-label={`Go to section ${id}`}
            href={`#${id}` as any}
            className={cn(
              currentSection === id ? 'border-secondary' : 'border-primary',
              'w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] rounded-full  border grid place-items-center'
            )}
          >
            <span
              className={cn(
                currentSection === id ? 'bg-secondary' : 'bg-primary',
                'block w-[4px] h-[4px] sm:w-[7px] sm:h-[7px] rounded-[50%]'
              )}
            ></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationDots;
