import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
  title: 'Encantos Monte Verde',
  description:
    'Buquês, arranjos e presentes feitos à mão em São Tomé.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body suppressHydrationWarning>
        <Script id="sanitize-extension-markup" strategy="beforeInteractive">
          {`(() => {
          const injectedAttribute = /^(?:bis_skin_checked|bis_register|data-landmark-index|__processed_.*__)$/;
          const clean = (root) => {
            if (!(root instanceof Element)) return;
            for (const attribute of [...root.attributes]) {
              if (injectedAttribute.test(attribute.name)) root.removeAttribute(attribute.name);
            }
            for (const element of root.querySelectorAll('*')) {
              for (const attribute of [...element.attributes]) {
                if (injectedAttribute.test(attribute.name)) element.removeAttribute(attribute.name);
              }
            }
          };
          clean(document.documentElement);
          const observer = new MutationObserver((records) => {
            for (const record of records) {
              if (record.type === 'attributes' && record.attributeName && injectedAttribute.test(record.attributeName)) {
                record.target.removeAttribute(record.attributeName);
              }
              for (const node of record.addedNodes) clean(node);
            }
          });
          observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true });
          addEventListener('load', () => setTimeout(() => observer.disconnect(), 3000), { once: true });
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
