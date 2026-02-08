const Footer = () => {
  const EmailIcon = () => (
    <svg
      className="w-4 h-4 text-blue-700 dark:text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeWidth="2" d="M4 6h16v12H4z" />
      <path strokeWidth="2" d="M4 6l8 6 8-6" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      className="w-4 h-4 text-blue-700 dark:text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeWidth="2"
        d="M3 5l4-2 4 7-3 2c2 4 6 6 10 6l2-3 7 4-2 4c-10 0-18-8-18-18z"
      />
    </svg>
  );

  const LocationIcon = () => (
    <svg
      className="w-4 h-4 text-blue-700 dark:text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeWidth="2"
        d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z"
      />
    </svg>
  );

  const LayersIcon = () => (
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeWidth="2" d="M12 2l10 5-10 5L2 7l10-5z" />
      <path strokeWidth="2" d="M2 12l10 5 10-5" />
    </svg>
  );

  const SocialIcon = ({ icon }) => (
    <div className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 text-[#374aa0] dark:text-blue-400 transi">
      {icon === "linkedin" ? "in" : "X"}
    </div>
  );

  return (
    <footer
      dir="rtl"
      className="bg-[#f9fafb] dark:bg-[#192866] border-t border-gray-100 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                <LayersIcon />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                صكوك صحة
              </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-300">
              منصة استثمارية رائدة في القطاع الصحي. توفر فرص استثمارية متوافقة
              مع الشريعة الإسلامية.
            </p>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
              الشروط والأحكام
            </h4>

            <ul className="space-y-4 text-sm text-blue-700 dark:text-blue-400">
              <li className="hover:underline cursor-pointer">
                <a href="/terms">الشروط والأحكام</a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a href="/privacy">السياسة و الخصوصية</a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a href="/security">التوعية الامنية</a>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
              تواصل معنا
            </h4>

            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <EmailIcon />
                customercare@sukukseha.com
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                +966 11 234 5678
              </li>
              <li className="flex items-center gap-3">
                <LocationIcon />
                الرياض، المملكة العربية السعودية
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {/* <SocialIcon icon="linkedin" /> */}
              <a
                href="https://www.linkedin.com/company/sukukseha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon icon="linkedin" />
              </a>
              <a
                href="https://x.com/sukukseha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon icon="x" />
              </a>
            </div>
          </div>

          {/* Brand */}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} صكوك صحة. جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};

export default Footer;
