import ActionButtonRow from './components/ActionButtonRow';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import FooterCard from './components/FooterCard';
import NewsSection from './components/NewsSection';
import BookAppointment from './components/BookAppointment';
import SpecialtiesSection from './components/SpecialitiesSection';
import ServicesSection from './components/ServicesSection';

import { ThemeProvider } from '@material-tailwind/react';
import DoctorCard from './components/DoctorCard';
import AdvancedServicesSection from './components/AdvancedServiceSection';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <ActionButtonRow />
      <ServicesSection />
      <AdvancedServicesSection />
      <SpecialtiesSection />
      <BookAppointment />
      <DoctorCard />
      <NewsSection />
      <FooterCard />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
