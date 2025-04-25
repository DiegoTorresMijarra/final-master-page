
import { Html, Head, Main, NextScript } from 'next/document';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
      <ThemeProvider>
        <Main />
        <NextScript />
      </ThemeProvider>
      </body>
    </Html>
  );
}
