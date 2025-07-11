import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Section 1:Brand + Slogan*/}
        <div>
          <h2 className="text-3xl font-logo">MEDDICAL</h2>
          <p className="mt-2 text-sm">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        {/* Section 2 : Important Links*/}
        <div>
          <h3 className="text-lg font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/appointment" className="hover:text-white">
                Appointment
              </a>
            </li>
            <li>
              <a href="/doctors" className="hover:text-white">
                Doctors
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Info*/}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact us</h3>
          <p className="text-sm">Call: (237) 681-812-255</p>
          <p className="text-sm">Email: fildineesoe@gmai.com</p>
          <p className="text-sm">
            Address: 0123 Some place <br /> Some country
          </p>
        </div>

        {/* Section 4: Newsletter */}
        <div>
          <form class="relative max-w-md mx-auto mt-10">
            <input
              type="email"
              placeholder="Enter your email address"
              class="px-4 py-2 pr-[40px] rounded bg-blue-100 text-sm text-gray-900 placeholder-gray-600 border border-gray-400 w-full"
            />
            <button
              type="submit"
              class="absolute top-1/2 right-3 translate-y-[-50%] text-blue-600 text-sm"
            >
              <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line*/}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs ">
        © 2021 Hospital's name All Rights Reserved by PNTEC-LTD
        <div className="flex justify-end gap-4 relative right-[24px] items-center">
          <a href="#" className="hover:text-white">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="hover:text-white text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
