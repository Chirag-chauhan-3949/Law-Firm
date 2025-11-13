import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import OurPeople from '../src/pages/OurPeople';

const OurPeoplePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Legal Team - Expert Lawyers & Attorneys | MK Legal Partners</title>
        <meta name="description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation." />
        <meta name="keywords" content="legal team, expert lawyers, attorneys, IP lawyers, corporate lawyers, litigation attorneys, legal professionals, MK Legal Partners team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mklegalpartners.com/our-people" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Legal Team - Expert Lawyers & Attorneys | MK Legal Partners" />
        <meta property="og:description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation. Call +916375063727." />
        <meta property="og:url" content="https://mklegalpartners.com/our-people" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Our Legal Team - Expert Lawyers & Attorneys" />
        <meta property="twitter:description" content="MK Legal Partners: Premier law firm in India with 15+ years expertise in IPR, Trademarks, Patents, Copyright, Corporate Law & Litigation. Call +916375063727." />
        <meta property="twitter:card" content="summary_large_image" />
        
        {/* Structured Data - Team */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "MK Legal Partners - Our Legal Team",
              "description": "Expert legal team specializing in Intellectual Property Rights, Corporate Law, Litigation, and more",
              "url": "https://mklegalpartners.com/our-people",
              "provider": {
                "@type": "LawFirm",
                "name": "MK Legal Partners",
                "url": "https://mklegalpartners.com"
              },
              "employee": [
                {
                  "@type": "Lawyer",
                  "name": "Madhu Khatri",
                  "jobTitle": "Founding Partner",
                  "description": "Expert in Intellectual Property Rights with 15+ years of experience",
                  "knowsAbout": ["Intellectual Property", "Trademarks", "Patents", "Copyright", "Corporate Law"]
                }
              ]
            })
          }}
        />
      </Head>
      <Layout>
        <OurPeople />
      </Layout>
    </>
  );
};

export default OurPeoplePage;
