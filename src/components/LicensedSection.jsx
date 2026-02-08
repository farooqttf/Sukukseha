import CMAlogo from "../assets/capital-market-authority.png";

const LicensedSection = () => {
  const UserIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 14a4 4 0 01-8 0m8 0a4 4 0 10-8 0m8 0v4m-8-4v4M12 10a4 4 0 100-8 4 4 0 000 8z"
      />
    </svg>
  );

  return (
    <section dir="rtl" className="py-20 bg-[#F7FAF7] dark:bg-[#192866]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
            <UserIcon />
            الترخيص والامتثال التنظيمي
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] dark:text-white">
            مرخص ومنظم بالكامل
          </h2>
          <p className="mt-4 text-blue-600 dark:text-blue-400">
            نعمل وفق أعلى معايير الامتثال التنظيمي في المملكة العربية السعودية
          </p>
        </div>

        {/* License Card */}
        <div className="bg-white dark:bg-[#20327a] rounded-3xl shadow-lg p-6 md:p-10 border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col gap-6">
            {/* CMA Logo */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 items-center">
              <img
                src={CMAlogo}
                alt="هيئة السوق المالية"
                className="h-16 md:h-20 object-contain dark:bg-white p-2 rounded-lg"
              />
            

            {/* Info */}
            <div className="text-center md:text-right">
              <h3 className="text-lg md:text-xl font-bold text-[#0B1C3D] dark:text-white mb-3">
                هيئة السوق المالية
              </h3>

              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                مرخص من قبل هيئة السوق المالية السعودية (CMA) لإدارة وإصدار
                الصكوك الاستثمارية
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-y-4 md:gap-x-12">
                <div className=" rounded-lg">
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    رقم الترخيص
                  </span>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">19206-20</p>
                </div>

                <div className=" rounded-lg">
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    نوع الترخيص
                  </span>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">
                    إدارة الأصول
                  </p>
                </div>

                <div className=" rounded-lg sm:col-span-2">
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    الحالة
                  </span>

                  <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs md:text-sm font-medium mx-4">
                    ساري المفعول
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-[#E8EDF3] dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl p-6 text-sm leading-relaxed text-center border border-gray-300 dark:border-gray-700">
          <strong>شركة صكوك صحة</strong> تابعة{" "}
          <strong> لشركة إسناد المالية</strong> من{" "}
          <strong>هيئة السوق المالية السعودية</strong>
          السعودية برقم ترخيص <strong>19206-20</strong>. <br />
          <p className="pt-2">
            {" "}
            جميع الاستثمارات تخضع للمخاطر وقد تنخفض قيمة الاستثمارات أو ترتفع
            ولا يعد الأداء السابق ضمانًا للنتائج المستقبلية.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LicensedSection;
