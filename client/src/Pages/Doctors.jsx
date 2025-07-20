import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import DoctorCard from '../components/DoctorCard';
import TestimonialSection from '../components/TestimonialSection';
import NewsSection from '../components/NewsSection';
import FooterCard from '../components/FooterCard';

export default function Doctors() {
  return (
    <Layout>
      {/* Page Banner */}
      <PageHeader
        breadcrumb="Home / Doctors"
        title="Our Doctors"
        bgImage="/banner-doctors.webp"
      />

      <section className="space-y-16 py-16">
        {/* Doctor Cards Section - First Grid */}
        <DoctorCard showHeading={false} />

        {/* Doctor Cards Section - Second Grid */}
        <DoctorCard showHeading={false} />

        {/* Optional Testimonial Section */}
        <TestimonialSection />

        {/* News Section */}
        <NewsSection />

        {/* Footer Promo */}
        <FooterCard />
      </section>
    </Layout>
  );
}
