import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import Contact from '../src/pages/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact MK Legal Partners - Top Law Firm in India | Free Consultation</title>
        <meta name="description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
        <meta name="keywords" content="contact law firm, legal consultation, lawyer contact, MK Legal Partners phone, email lawyers, legal services India, free legal advice" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mklegalpartners.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact MK Legal Partners - Top Law Firm in India | Free Consultation" />
        <meta property="og:description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
        <meta property="og:url" content="https://mklegalpartners.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Contact MK Legal Partners - Top Law Firm in India | Free Consultation" />
        <meta property="twitter:description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
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
              "url": "https://mklegalpartners.com",
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
