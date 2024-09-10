import type { Metadata } from 'next';

import { ReactQuery } from '@/modules/Providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Shopilyze',
  description: 'E-commerce',
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function MainLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  return (
    <html lang={locale}>
      <body>
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
