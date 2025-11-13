import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import Contact from '../src/pages/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact MK Legal Partners - Top Law Firm in India | Free Consultation</title>
        <meta name="description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation." />
        <meta name="keywords" content="contact law firm, legal consultation, lawyer contact, MK Legal Partners phone, email lawyers, legal services India, free legal advice" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://www.mklegalpartners.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact MK Legal Partners - Get Legal Consultation" />
        <meta property="og:description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation. Call +916375063727." />
        <meta property="og:url" content="https://www.mklegalpartners.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Contact MK Legal Partners - Top Law Firm in India | Free Consultation" />
        <meta property="twitter:description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation. Call +916375063727." />
        <meta property="twitter:card" content="summary_large_image" />
        
        {/* Structured Data - Contact */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LawFirm",
              "name": "MK Legal Partners",
              "description": "Leading law firm in India specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation",
              "url": "https://www.mklegalpartners.com",
              "telephone": "+916375063727",
              "email": "madhu.khatri14@outlook.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "3 N 2 Kudi Bhagtasani Housing Board",
                  "addressLocality": "Jodhpur",
                  "addressRegion": "Rajasthan",
                  "postalCode": "342005",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "385, Shanti Nagar, Durgapura Railway Station",
                  "addressLocality": "Jaipur",
                  "addressRegion": "Rajasthan",
                  "postalCode": "302018",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "53A Mittal Tower, 210 Nariman Point",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400021",
                  "addressCountry": "IN"
                }
              ],
              "openingHours": "Mo-Fr 08:00-18:00 Sa 09:00-14:00",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+916375063727",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
};

export default ContactPage;
