import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import About from '../src/pages/About';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About MK Legal Partners - Our Story & Legal Expertise | Top Law Firm</title>
        <meta name="description" content="Learn about MK Legal Partners, a leading law firm in India with 15+ years of experience in Intellectual Property Rights, Corporate Law, and Litigation. Meet our expert legal team." />
        <meta name="keywords" content="about MK Legal Partners, law firm story, legal expertise, IP lawyers, corporate attorneys, legal team, law firm history" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mklegalpartners.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About MK Legal Partners - Our Story & Legal Expertise" />
        <meta property="og:description" content="Learn about MK Legal Partners, a leading law firm in India with 15+ years of experience in Intellectual Property Rights, Corporate Law, and Litigation." />
        <meta property="og:url" content="https://mklegalpartners.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="About MK Legal Partners - Our Story & Legal Expertise" />
        <meta property="twitter:description" content="Learn about MK Legal Partners, a leading law firm in India with 15+ years of experience in Intellectual Property Rights, Corporate Law, and Litigation." />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;
