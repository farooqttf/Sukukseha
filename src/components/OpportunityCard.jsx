import oppImage from "../assets/oppbg01.png"

const OpportunityCard = ({ badge, title, min, returnRate, duration }) => {
  return (
    <div className="rounded-3xl overflow-hidden bg-white dark:bg-[#131e4b] shadow-xl">
      
      {/* Image */}
      <div className="relative h-56">
        <img
          src={oppImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-black/50 text-white px-4 py-1 rounded-full text-sm">
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-sm md:text-lg text-[#0B1C3D] dark:text-white leading-relaxed">
          {title}
        </h3>

        <p className="mt-2 text-xs md:text-sm text-blue-600 dark:text-blue-400">
          استثمر في القطاع الصحي وقطاع التجارة الإلكترونية
        </p>

        <div className="mt-6 space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">الحد الأدنى</span>
            <span>{min}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">العائد المتوقع</span>
            <span className="text-green-600 font-semibold">{returnRate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">المدة</span>
            <span>{duration}</span>
          </div>
        </div>

        <div className="mt-6 h-1 w-16 mx-auto bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};

export default OpportunityCard;
