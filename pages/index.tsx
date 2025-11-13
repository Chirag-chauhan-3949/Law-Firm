import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import Home from '../src/pages/Home';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>MK Legal Partners - Top Law Firm in India | Expert Legal Services</title>
        <meta name="title" content="MK Legal Partners - Top Law Firm in India | Expert Legal Services" />
        <meta name="description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation." />
        <meta name="keywords" content="law firm India, legal services, intellectual property rights, trademark registration, patent filing, copyright law, corporate lawyers, legal consultancy, litigation services, IPR law firm, MK Legal Partners" />
        <meta name="author" content="MK Legal Partners" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mklegalpartners.com/" />
        <meta property="og:title" content="MK Legal Partners - Top Law Firm in India | Expert Legal Services" />
        <meta property="og:description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation. Call +916375063727." />
        <meta property="og:image" content="https://mklegalpartners.com/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="MK Legal Partners" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mklegalpartners.com/" />
        <meta property="twitter:title" content="MK Legal Partners - Top Law Firm in India | Expert Legal Services" />
        <meta property="twitter:description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation. Call +916375063727." />
        <meta property="twitter:image" content="https://mklegalpartners.com/images/twitter-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jodhpur, Rajasthan" />
        <meta name="ICBM" content="26.2389,73.0243" />
        <meta name="category" content="Legal Services" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mklegalpartners.com/" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LawFirm",
              "name": "MK Legal Partners",
              "description": "MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication.",
              "url": "https://mklegalpartners.com",
              "telephone": "+916375063727",
              "email": "madhu.khatri14@outlook.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3 N 2 Kudi Bhagtasani Housing Board",
                "addressLocality": "Jodhpur",
                "addressRegion": "Rajasthan",
                "postalCode": "342005",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.2389",
                "longitude": "73.0243"
              },
              "openingHours": "Mo-Fr 08:00-18:00 Sa 09:00-14:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/mklegalpartners",
                "https://www.linkedin.com/company/mklegalpartners"
              ]
            })
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MK Legal Partners",
              "url": "https://mklegalpartners.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mklegalpartners.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
