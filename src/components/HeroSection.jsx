import Herobg from "../assets/herobg.png";

const HeroSection = () => {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={Herobg} className="w-full h-full object-cover" />
        /* Dark Overlay */
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0B1C3D]/80 to-[#0B1C3D]/95 dark:from-black/80 dark:via-[#0B1C3D]/85 dark:to-[#374aa0]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 pt-56 pb-4 md:pt-20">
        <h1 className="text-white text-2xl md:text-4xl   lg:text-6xl font-bold leading-tight">
          استثمر في القطاع الصحي{" "}
        </h1>

        <p className="mt-6 text-sm md:text-xl text-gray-200 leading-relaxed">
          حلول تمويلية ومتوافقة مع الشريعة لتحقيق عوائد مجزية في القطاع الصحى
        </p>

        <button
          onClick={() =>
            (window.location.href =
              "https://dip.sukukseha.com/DigitalInvestmentPlatform/Account/Login")
          }
          className="mt-8 px-8 py-4 text-sm  bg-[#374aa0] hover:bg-blue-700 transition rounded-xl text-white md:text-lg font-semibold shadow-lg hover:scale-105"
        >
          ابدأ الاستثمار الآن
        </button>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 backdrop-blur-md border  rounded-2xl p-6  border-blue-400/50">
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">
              15% تصل إلى
            </p>
            <p className="mt-3 text-lg text-gray-400">
              متوسط عائد الصكوك السنوية
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">+2 مليار ريال </p>
            <p className="mt-3 text-lg text-gray-400">حجم المشاريع التمويلية</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
