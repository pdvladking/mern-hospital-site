import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FreeCheckupCard from '../components/FreeCheckupCard';
import FooterCard from '../components/FooterCard';

export default function Services() {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        breadcrumb="Home / Services"
        bgImage="/images/services-hero.jpg"
      />

      <section className="py-16 space-y-16">
        <FreeCheckupCard />
        <FooterCard />
      </section>
    </Layout>
  );
}
