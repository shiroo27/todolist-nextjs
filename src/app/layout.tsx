import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);