import Header from '../components/Header';
import FooterCard from '../components/FooterCard';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import PageHeader from '../components/PageHeader';
import DoctorCard from '../components/DoctorCard';

export default function Doctors() {
  return (
    <>
      <Header />

      {/* Page Banner */}
      <PageHeader
        breadcrumb="Home / Doctors"
        title="Our Doctors"
        bgImage="/banner-doctors.webp"
      />

      {/* Doctor Cards Section - First Grid */}
      <DoctorCard />

      {/* Doctor Cards Section - Second Grid */}
      <DoctorCard />

      {/* News and Footer */}
      <NewsSection />
      <FooterCard />
      <Footer />
    </>
  );
}
