import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="py-16 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">{children}</div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
