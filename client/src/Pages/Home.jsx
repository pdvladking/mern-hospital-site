import React from 'react';
import {
  Header,
  Hero,
  ActionButtonRow,
  ServiceSection,
  AdvanceServiceSection,
  SpecialitiesSection,
  BookAppointment,
  DoctorCard,
  NewsSection,
  FooterCard,
  Footer,
} from '../components';

export default function Home() {
  return (
    <>
      {/* Top Nav & Hero */}
      <Header />
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

      {/* Footer Elements */}
      <FooterCard />
      <Footer />
    </>
  );
}
