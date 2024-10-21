import { FC, PropsWithChildren } from 'react';

import '../[locale]/globals.css';

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default AdminLayout;
