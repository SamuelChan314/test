import './globals.css';

export const metadata = {
  title: 'Ceanna Cheung | Chemistry Student & Researcher',
  description: 'Professional e-Portfolio of Ceanna Cheung, Chemistry student at the University of Alberta with internship experience at Suncor - Syncrude.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
