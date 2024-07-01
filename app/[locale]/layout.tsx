import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '@/app/css/prism.css';
import '@/app/css/globals.css';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '../config';
import { unstable_setRequestLocale } from 'next-intl/server';
import CrispChat from '@/components/crisp-chat';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <body className={cn(nunito.className, 'antialiased')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex h-screen flex-col justify-between">
            <div className="mb-auto">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
      <CrispChat />
    </html>
  );
}
