import React from 'react';
import Layout from '../components/Layout';
import {
  Hero,
  ActionButtonRow,
  ServiceSection,
  AdvanceServiceSection,
  SpecialitiesSection,
  DoctorCard,
  NewsSection,
  FooterCard,
} from '../components';
import AppointmentSection from '../components/AppointmentSection';

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
      <AppointmentSection />
      <DoctorCard />

      {/* News & Info */}
      <NewsSection />
      <FooterCard />
    </Layout>
  );
}
