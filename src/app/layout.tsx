import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Rathcon Construction - #1 Construction Company Mumbai & Thane | Free Quote',
    template: '%s | Rathcon Construction'
  },
  description: 'Rathcon Construction is the #1 construction company in Mumbai and Thane. Specializing in residential construction, commercial projects, interior design, renovations, tile installation, granite work, and civil works. Get FREE quotes today!',
  keywords: [
    'construction company mumbai',
    'construction company thane',
    'best construction company mumbai',
    'top construction company thane',
    'residential construction mumbai',
    'commercial construction thane',
    'interior design mumbai',
    'renovation services mumbai',
    'civil works mumbai',
    'tile installation mumbai',
    'granite work mumbai',
    'marble work mumbai',
    'construction contractor mumbai',
    'building contractor thane',
    'home construction mumbai',
    'office construction thane',
    'construction services mumbai',
    'construction company near me',
    'building contractor near me',
    'construction services thane',
    'residential construction thane',
    'commercial construction mumbai',
    'interior design thane',
    'renovation services thane',
    'tile fitting mumbai',
    'granite installation mumbai',
    'marble installation thane',
    'construction company kalwa',
    'building contractor kalwa',
    'construction services kalwa',
    'naval base construction',
    'civil works thane',
    'construction projects mumbai',
    'building projects thane',
    'construction quote mumbai',
    'free construction quote',
    'construction estimate mumbai',
    'building estimate thane'
  ],
  authors: [{ name: 'Rathcon Construction Private Limited' }],
  creator: 'Rathcon Construction Private Limited',
  publisher: 'Rathcon Construction Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.rathconconstruction.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.rathconconstruction.com',
    siteName: 'Rathcon Construction',
    title: 'Rathcon Construction - #1 Construction Company Mumbai & Thane | Free Quote',
    description: 'Rathcon Construction is the #1 construction company in Mumbai and Thane. Specializing in residential construction, commercial projects, interior design, renovations, tile installation, granite work, and civil works. Get FREE quotes today!',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Rathcon Construction - #1 Construction Company Mumbai Thane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rathcon Construction - #1 Construction Company Mumbai & Thane | Free Quote',
    description: 'Rathcon Construction is the #1 construction company in Mumbai and Thane. Specializing in residential construction, commercial projects, interior design, renovations, tile installation, granite work, and civil works. Get FREE quotes today!',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rathcon Construction Private Limited",
              "description": "Leading construction company in Mumbai and Thane, specializing in residential construction, commercial projects, interior design, renovations, tile installation, granite work, and civil works.",
              "url": "https://www.rathconconstruction.com",
              "telephone": "+91-8928551747",
              "email": "contact@rathconconstructions.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "JAI BHIM NAGAR 2, NR. HANUMAN MANDIR",
                "addressLocality": "THANE KALWA",
                "addressRegion": "THANE",
                "postalCode": "400605",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.2183",
                "longitude": "72.9781"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "₹₹₹",
              "sameAs": [
                "https://www.facebook.com/rathconconstruction",
                "https://www.linkedin.com/company/rathcon-construction"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Construction",
                      "description": "Custom homes, apartments, and residential projects"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Construction",
                      "description": "Office buildings, retail spaces, and commercial projects"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interior Design & Finishing",
                      "description": "Interior design, finishing work, and decoration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Renovations & Remodeling",
                      "description": "Home renovations, remodeling, and upgrades"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tile Installation & Fitting",
                      "description": "Professional tile installation for floors and walls"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Granite & Marble Work",
                      "description": "Premium granite and marble installation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Civil Works & Finishing",
                      "description": "Comprehensive civil works and finishing services"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "12"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Rajesh Patel"
                  },
                  "reviewBody": "Rathcon Construction delivered our dream home exactly as promised. Their attention to detail and quality craftsmanship is exceptional."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Priya Sharma"
                  },
                  "reviewBody": "The kitchen renovation exceeded our expectations. The team was professional, creative, and delivered a beautiful, functional space."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Amit Kumar"
                  },
                  "reviewBody": "Rathcon Construction built our 5-story office complex with outstanding quality. Their project management skills and timely delivery impressed us."
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
