'use client';
import { motion } from 'framer-motion';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import CustomHeading2 from '../custom-heading-2';
import ContentContainer from '../content-container';
import { allBlogs } from '@/.contentlayer/generated';
import { sortedBlogPost } from '@/lib/content-layer';
import { Link } from '@/app/navigation';

interface Props {}

const Section15: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_15');
  const t_id = useTranslations('home_page.section_ids');

  const activePosts = allBlogs.filter((p) => p.draft === false);
  const posts = sortedBlogPost(activePosts);

  return (
    <section id={t_id('knowledge')} className="relative bg-white xl:pt-0 pt-14 pb-[150px]">
      <ContentContainer>
        <CustomHeading2 customClassname="text-center" t={t} type_1 />
        <p className="text-center">{t('sub_heading')}</p>

        <ul>
          {posts.map(({ slug, title, tags, summary }, index) => (
            <motion.li
              key={slug}
              className="py-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index / 10 }}
            >
              <Link href={`/blog/${slug}` as any} aria-label={`Read "${title}"`} legacyBehavior>
                <article className="cursor-pointer gap-3 space-y-2 bg-opacity-20 py-5 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-3 xl:col-span-4">
                    <span className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}` as any}>
                        <span className="text-primary-500 duration-300 hover:text-primary-400">
                          {title}
                        </span>
                      </Link>
                    </span>
                    {/* {showTags && tags && (
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )} */}
                    <div className="prose max-w-none text-gray-900 dark:text-gray-100">
                      {summary}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.li>
          ))}
        </ul>
      </ContentContainer>
    </section>
  );
};

export default Section15;
