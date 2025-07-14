import ActionButtonRow from './components/ActionButtonRow';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import FooterCard from './components/FooterCard';

import { ThemeProvider } from '@material-tailwind/react';
import DoctorCard from './components/DoctorCard';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <ActionButtonRow />
      <DoctorCard />
      <FooterCard />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
