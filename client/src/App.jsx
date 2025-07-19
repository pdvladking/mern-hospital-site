import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Doctors from './Pages/Doctors';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
