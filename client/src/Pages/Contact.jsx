import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import MapSection from '../components/MapSection';
import ContactForm from '../components/ContactForm';
import ContactInfoGrid from '../components/ContactInfoGrid';
import NewsSection from '../components/NewsSection';

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We're Here to Help"
        description="Feel free to reach out to us via phone, email, or this quick contact form. Our team will get back to you as soon as possible."
        breadcrumb="Home / Contact"
        bgImage="/images/contact-hero.jpg"
      />

      <MapSection />

      <section className="py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Heading + Form */}
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-[#1F87C3] mb-2">
                GET IN TOUCH
              </h4>
              <h2 className="text-3xl font-logo font-bold text-blue-900 dark:text-white">
                Contact
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* Right Column: Info Cards */}
          <div>
            <ContactInfoGrid />
          </div>
        </div>
      </section>

      <NewsSection />
    </Layout>
  );
};

export default Contact;
