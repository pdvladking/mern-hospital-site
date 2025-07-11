import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

import { ThemeProvider } from '@material-tailwind/react';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
