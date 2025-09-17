import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

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
            
            @keyframes gradient-shift {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            
            .animate-gradient-shift {
              animation: gradient-shift 15s ease infinite;
              background-size: 200% 200%;
            }
          `}
        </style>
      </head>
      <body className={cn(
        'min-h-screen text-foreground antialiased flex flex-col',
        'font-sans relative overflow-x-hidden',
        'transition-colors duration-200 pt-20 md:pt-24',
        // Base background
        'bg-slate-950',
        // Main gradient overlay
        'bg-gradient-to-br from-blue-900/30 via-slate-900/30 to-purple-900/30',
        // Subtle grid pattern
        'bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px)]',
        'bg-[length:40px_40px]'
      )}>
        {/* Starfield Background */}
        <StarField />
        
        {/* Gradient Overlay */}
        <div className="fixed inset-0 -z-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/80"></div>
        </div>
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
