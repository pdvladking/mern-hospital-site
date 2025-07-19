import React from 'react';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import FooterCard from '../components/FooterCard';
import Footer from '../components/Footer';
import FreeCheckupCard from '../components/FreeCheckupCard';

export default function Services() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Services Banner */}
      <PageHeader
        title="Our Services"
        breadcrumb="Home / Services"
        bgImage="/images/services-hero.jpg"
      />
      <FreeCheckupCard />

      {/* Footer Elements */}
      <FooterCard />
      <Footer />
    </>
  );
}
