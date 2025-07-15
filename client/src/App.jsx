import ActionButtonRow from './components/ActionButtonRow';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import FooterCard from './components/FooterCard';
import NewsSection from './components/NewsSection';

import { ThemeProvider } from '@material-tailwind/react';
import DoctorCard from './components/DoctorCard';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <ActionButtonRow />
      <DoctorCard />
      <NewsSection />
      <FooterCard />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
