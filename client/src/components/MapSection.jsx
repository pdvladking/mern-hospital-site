import React from 'react';

const MapSection = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4552921448836!2d85.31781077474858!3d27.702707576180056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f3220380fb%3A0xa90cfa3a69cf361c!2sMindrisers%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1686060674283!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
