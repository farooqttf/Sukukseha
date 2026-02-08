import ShariahLogo from "../assets/shariaa-compliant.webp";
import ShariahCertificate from "../assets/certificate.pdf";

const ShariahCompliance = () => {
  const CheckIcon = ({ className = "" }) => (
    <svg
      className={`w-5 h-5 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <section dir="rtl" className="py-20 bg-[#F7FAF7] dark:bg-[#192866]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
            <CheckIcon />
            الامتثال الشرعي
          </span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] dark:text-white leading-relaxed">
            استثمار متوافق مع أحكام الشريعة الإسلامية
          </h2>
          <p className="mt-4 text-blue-600 dark:text-blue-400">
            جميع منتجاتنا الاستثمارية تخضع للرقابة الشرعية من قبل هيئة مستقلة من
            العلماء المتخصصين
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Right Card */}
          <div className="bg-white dark:bg-[#20327a] rounded-3xl p-10 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <img
              src={ShariahLogo}
              alt="Shariah Review Bureau"
              className="h-28 object-contain"
            />

            {/* Content */}
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-xl font-bold text-[#0B1C3D] dark:text-white mb-3">
                شهادة الامتثال الشرعي
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                تخضع صكوك صحة للمراجعة الشرعية من لجنة شرعية متخصصة ومستقلة
                لضمان امتثالها لأحكام الشريعة الإسلامية
              </p>

              <a
                href={ShariahCertificate}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#374aa0] hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl font-semibold"
              >
                شهادة الشريعة
              </a>
            </div>
          </div>
          {/* Left Card */}
          <div className="relative bg-white dark:bg-[#20327a] rounded-3xl p-10 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="absolute top-8 right-8 bg-green-100 dark:bg-green-900 p-3 rounded-xl">
              <CheckIcon className="text-green-600 dark:text-green-400" />
            </div>

           <div className="pr-20">
             <h3 className="text-xl font-bold text-[#0B1C3D] dark:text-white mb-4">
              استثمارات حلال %100
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
              جميع الأصول والأنشطة الاستثمارية متوافقة تمامًا مع أحكام الشريعة
              الإسلامية
            </p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShariahCompliance;
