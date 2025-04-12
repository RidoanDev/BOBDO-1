import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplet,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Youtube,
  Users,
  Globe,
} from 'lucide-react';

const Footer = () => {
  // Function to get appropriate email link based on screen width
  const getEmailLink = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
        ? 'mailto:bobdo5800@gmail.com'
        : 'https://mail.google.com/mail/?view=cm&fs=1&to=bobdo5800@gmail.com';
    }
    return 'mailto:bobdo5800@gmail.com'; // Default fallback
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplet className="h-6 w-6 text-blood-500" />
              <span className="text-xl font-bold">বিওবিডিও</span>
            </div>
            <p className="text-gray-400">
              বগুড়া অনলাইন ব্লাড ডোনেশন অর্গানাইজেশন (বিওবিডিও) স্বেচ্ছায়
              রক্তদানের মাধ্যমে জীবন বাঁচাতে নিবেদিত। প্রয়োজনে রক্তের প্রাপ্যতা
              নিশ্চিত করতে আমাদের মিশনে যোগ দিন।
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/BOBDO.B5800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/groups/bobdo.b5800/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook Group"
              >
                <Users className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@BograOnlineBloodDonationOrgani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  to="/donate-blood"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  রক্ত দিন
                </Link>
              </li>
              <li>
                <Link
                  to="/get-blood"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  রক্ত নিন
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">জড়িত হোন</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/be-a-donor"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  দাতা হোন
                </Link>
              </li>
              <li>
                <Link
                  to="/be-a-volunteer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  স্বেচ্ছাসেবক হোন
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  আর্থিক অনুদান
                </Link>
              </li>
              <li>
                <Link
                  to="/medical-knowledge"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  চিকিৎসা জ্ঞান
                </Link>
              </li>
              <li>
                <Link
                  to="/notice"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  নোটিশ বোর্ড
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ করুন</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-gray-400">জরুরি হটলাইন:</p>
                  <a
                    href="tel:01722528164"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ০১৭২২-৫২৮১৬৪
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-gray-400">ইমেইল:</p>
                  <a
                    href={getEmailLink()}
                    className="text-gray-400 hover:text-white transition-colors"
                    target={window.innerWidth < 768 ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    bobdo5800@gmail.com
                  </a>
                </div>
              </li>
              <li className="text-gray-400">
                <p className="font-semibold mb-1">ঠিকানা:</p>
                <p>বগুড়া, বাংলাদেশ</p>
              </li>
              <li className="text-gray-400">
                <p className="font-semibold mb-1">জরুরি সেবা:</p>
                <p>২৪/৭ উপলব্ধ</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left text-gray-400">
              <p>
                &copy; ২০১৬-{new Date().getFullYear()} বিওবিডিও। সর্বস্বত্ব
                সংরক্ষিত।
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
