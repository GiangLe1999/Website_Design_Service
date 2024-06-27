import MainLayout from '@/components/blog-page/layouts/main-layout';
import { MDXLayoutRenderer } from '@/components/blog-page/mdx-component';
import { allAuthors } from '@/.contentlayer/generated';
import AuthorLayout from '@/components/author-page/layout/author-layout';

export const metadata = {
  title: 'About - River Lee',
  description: 'About me - River Lee',
};

export default function About() {
  const author = allAuthors.find((p) => p.slug === 'about');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <AuthorLayout content={author}>
        <MDXLayoutRenderer content={author} />
      </AuthorLayout>
    </MainLayout>
  );
}
