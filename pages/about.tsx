import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import About from '../src/pages/About';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About MK Legal Partners - Our Story & Legal Expertise | Top Law Firm</title>
        <meta name="description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
        <meta name="keywords" content="about MK Legal Partners, law firm story, legal expertise, IP lawyers, corporate attorneys, legal team, law firm history" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mklegalpartners.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About MK Legal Partners - Our Story & Legal Expertise" />
        <meta property="og:description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
        <meta property="og:url" content="https://mklegalpartners.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="About MK Legal Partners - Our Story & Legal Expertise" />
        <meta property="twitter:description" content="MK Legal Partners is a premier law firm in India with over 15 years of distinguished legal expertise, specializing in Intellectual Property Rights, Trademarks, Patents, Copyright, Corporate Law, and Litigation. Our team of seasoned attorneys provides comprehensive legal solutions tailored to meet the diverse needs of businesses and individuals across India. We combine deep legal knowledge with practical experience to deliver strategic counsel and effective representation in complex legal matters. Our practice areas encompass trademark registration and protection, patent filing and prosecution, copyright enforcement, corporate compliance, commercial litigation, alternative dispute resolution, and emerging technology law. With offices strategically located in Jodhpur, Jaipur, Mumbai, and Chhattisgarh, we ensure accessible legal services nationwide. At MK Legal Partners, we are committed to excellence, integrity, and client success, offering personalized attention and innovative legal strategies. Our proven track record and client-centric approach have established us as trusted legal advisors in India's competitive legal landscape, consistently delivering favorable outcomes and protecting our clients' interests with unwavering dedication." />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;
