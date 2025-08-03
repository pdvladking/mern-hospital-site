import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Doctors from './Pages/Doctors';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import News from './Pages/News';
import FAQ from './Pages/FAQ';
import BookanAppointment from './components/BookanAppointment';
import Admin from './Pages/Admin';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book-appointment" element={<BookanAppointment />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
