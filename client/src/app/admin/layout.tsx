import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
