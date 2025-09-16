import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Font variables for Tailwind
const fontVariables = {
  sans: 'font-sans',
  heading: 'font-heading',
  mono: 'font-mono',
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            :root {
              --font-sans: 'Inter', sans-serif;
              --font-heading: 'Space Grotesk', sans-serif;
              --font-mono: 'Fira Code', monospace;
            }
            
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              min-height: 100vh;
              overflow-y: auto;
              overflow-x: hidden;
            }
            
            body {
              font-family: var(--font-sans);
              position: relative;
            }
            
            h1, h2, h3, h4, h5, h6 {
              font-family: var(--font-heading);
              font-weight: 700;
              line-height: 1.2;
              letter-spacing: -0.02em;
              margin: 0 0 1rem 0;
            }
            
            code, pre {
              font-family: var(--font-mono);
            }
            
            * {
              box-sizing: border-box;
            }
          `}
        </style>
      </head>
      <body className={cn(
        'min-h-screen bg-background text-foreground antialiased flex flex-col',
        'font-sans',
        'transition-colors duration-200 pt-20 md:pt-24'
      )}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider>
            <Header />
            <main className="container mx-auto px-4 flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
