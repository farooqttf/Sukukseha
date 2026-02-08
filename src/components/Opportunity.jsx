import OpportunityCard from "./OpportunityCard";
import oppBg from "../assets/oppbg01.png";
import locksvg from "../assets/lock-svgrepo-com (1).svg";

const OpportunitySection = () => {
  return (
    <section dir="rtl" className="py-20 bg-[#F6F9F6] dark:bg-[#192866]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-xl md:text-4xl font-bold text-[#0B1C3D] dark:text-white">
            الفرص الاستثمارية المتاحة
          </h2>
          <p className="mt-4  text-gray-600 dark:text-gray-300">
            اختر الفرصة الاستثمارية المناسبة لك من بين مجموعة متنوعة من المشاريع
            الصحية
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Opportunity Card 1 */}
          <OpportunityCard
            badge="مغلق"
            title="صكوك صحة - إسناد (أول صكوك مراجحة)"
            min="100,000 ريال"
            returnRate="15-18%"
            duration="3 سنوات"
          />

          {/* Opportunity Card 2 */}
          <OpportunityCard
            badge="مغلق"
            title="صكوك صحة - إسناد (ثاني صكوك مراجحة)"
            min="100,000 ريال"
            returnRate="15%"
            duration="3 سنوات"
          />
          {/* Coming Soon Card */}
          <div
            className="relative rounded-3xl overflow-hidden text-white shadow-xl bg-gradient-to-b from-[#143C6D] to-[#0B1C3D] bg-cover bg-center"
            style={{ backgroundImage: `url(${oppBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#143C6D] to-[#0B1C3D] opacity-90" />
            <span className="absolute top-5 left-5 bg-blue-600 text-sm px-4 py-1 rounded-full z-10">
              قريباً
            </span>

            <div className="relative p-8 h-full flex flex-col justify-between z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  فرص استثمارية قادمة
                </h3>
                <p className="text-white/80 mb-10">
                  سجل الآن لتكون أول من يطلع على الفرص القادمة
                </p>

                <div className="space-y-4 text-white/60">
                  <div className="h-10 bg-white/10 rounded-lg flex items-center justify-between pr-3">
                    <p>نسبة العائد</p>
                    <img
                      src={locksvg}
                      className="h-5 w-5 ml-2 "
                      alt="Lock Icon"
                    />
                  </div>
                  <div className="h-10 bg-white/10 rounded-lg flex items-center justify-between pr-3">
                    <p>مدة الاستثمار</p>
                    <img
                      src={locksvg}
                      className="h-5 w-5 ml-2 "
                      alt="Lock Icon"
                    />
                  </div>
                  <div className="h-10 bg-white/10 rounded-lg flex items-center justify-between pr-3">
                    <p>الحد الأدنى</p>
                    <img
                      src={locksvg}
                      className="h-5 w-5 ml-2 "
                      alt="Lock Icon"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  (window.location.href =
                    "https://dip.sukukseha.com/DigitalInvestmentPlatform/Account/Login")
                }
                className="mt-10 bg-[#374aa0] hover:bg-blue-700 transition py-4 rounded-xl text-md md:text-lg font-semibold"
              >
                سجل الآن
              </button>

              <p className="text-center text-sm text-white/60 mt-3">
                إنشاء حساب مجاني - بدون التزام
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() =>
              (window.location.href =
                "https://dip.sukukseha.com/DigitalInvestmentPlatform/Register/Register")
            }
            className="bg-[#374aa0] hover:bg-blue-700 transition text-white px-10 py-4 rounded-xl text-sm md:text-lg font-semibold"
          >
            سجل للوصول للفرص القادمة
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
