import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios
      .get('/api/faqs')
      .then((res) => setFaqs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.length > 0 ? (
          faqs.map((faq) => (
            <div key={faq._id} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No FAQs available.</p>
        )}
      </div>
    </section>
  );
};

export default FAQ;
