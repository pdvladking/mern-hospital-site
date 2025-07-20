import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import WelcomeBanner from '../components/WelcomeBanner';
import TestimonialSection from '../components/TestimonialSection';
import DoctorCard from '../components/DoctorCard';
import NewsSection from '../components/NewsSection';
import FooterCard from '../components/FooterCard';

const AboutUs = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Caring Beyond Medicine"
        description="Our mission is to treat every patient like family—with integrity, empathy, and excellence."
        breadcrumb="Home / About Us"
        bgImage="/images/about-hero.jpg"
      />

      <section className="space-y-16 py-16">
        <WelcomeBanner />
        <TestimonialSection />
        <DoctorCard />
        <NewsSection />
        <FooterCard />
      </section>
    </Layout>
  );
};

export default AboutUs;
