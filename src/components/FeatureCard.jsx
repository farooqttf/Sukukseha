const FeatureCard = ({ icon, title, desc, highlighted }) => {
  return (
    <div
      className={`group rounded-2xl p-8 shadow-lg transition-transform duration-300
        transform hover:scale-105
        ${highlighted ? "bg-[#d1d8f7ad] dark:bg-[#131e4b]" : "bg-white dark:bg-[#20327a]"}
      `}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shadow mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-[#0B1C3D] dark:text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {desc}
      </p>

      {/* Underline */}
      <div className="mt-6 h-1 w-12 bg-gray-300 dark:bg-gray-500 rounded-full transition-all duration-300 group-hover:w-24" />
    </div>
  );
};

export default FeatureCard;
