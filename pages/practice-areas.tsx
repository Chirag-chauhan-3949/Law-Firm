import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import PracticeAreas from '../src/pages/PracticeAreas';

const PracticeAreasPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Practice Areas - Intellectual Property Rights & Legal Services | MK Legal Partners</title>
        <meta name="description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
        <meta name="keywords" content="trademark registration, patent filing, copyright protection, intellectual property rights, corporate law, litigation services, ADR, cyber law, legal consultancy, IPR services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mklegalpartners.com/practice-areas" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Practice Areas - Intellectual Property Rights & Legal Services" />
        <meta property="og:description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
        <meta property="og:url" content="https://mklegalpartners.com/practice-areas" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Practice Areas - Intellectual Property Rights & Legal Services" />
        <meta property="twitter:description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
        <meta property="twitter:card" content="summary_large_image" />
        
        {/* Structured Data - Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "MK Legal Partners - Practice Areas",
              "description": "Comprehensive legal services including Trademarks, Patents, Copyright, Corporate Law, Litigation, ADR, and Cyber Law",
              "url": "https://mklegalpartners.com/practice-areas",
              "provider": {
                "@type": "LawFirm",
                "name": "MK Legal Partners",
                "url": "https://mklegalpartners.com"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Trademark Registration",
                      "description": "Comprehensive trademark registration and protection services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Patent Filing",
                      "description": "Expert patent filing and prosecution services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Copyright Protection",
                      "description": "Copyright registration and enforcement services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Law",
                      "description": "Corporate legal compliance and advisory services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Litigation Services",
                      "description": "Expert litigation and dispute resolution services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <Layout>
        <PracticeAreas />
      </Layout>
    </>
  );
};

export default PracticeAreasPage;
