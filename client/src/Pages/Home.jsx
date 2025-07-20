import React from 'react';
import Layout from '../components/Layout';
import {
  Hero,
  ActionButtonRow,
  ServiceSection,
  AdvanceServiceSection,
  SpecialitiesSection,
  BookAppointment,
  DoctorCard,
  NewsSection,
  FooterCard,
} from '../components';

export default function Home() {
  return (
    <Layout>
      {/* Top Hero Section */}
      <Hero />

      {/* Call-to-Actions */}
      <ActionButtonRow />

      {/* Core Services */}
      <ServiceSection />
      <AdvanceServiceSection />
      <SpecialitiesSection />

      {/* Appointments & Team */}
      <BookAppointment />
      <DoctorCard />

      {/* News & Info */}
      <NewsSection />
      <FooterCard />
    </Layout>
  );
}
