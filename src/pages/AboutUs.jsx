import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-start justify-center w-[95vw] lg:w-[90vw] 2xl:w-[80vw] max-w-screen-2xl m-auto min-h-screen">
      <div className="flex items-start justify-end   p-8">
        <div className="flex flex-col gap-4">
          <div className="">
            <h1 className="text-2xl lg:text-3xl font-bold text-black text-right py-8">
              معلومات عن المنصة{" "}
            </h1>
            <div className="w-full h-1 bg-gray-200"></div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-right pr-10 text-gray-600">
              منصة صكوك صحة التابعة لشركة إسناد المالية والمرخصة من هيئة السوق
              المالية برقم(20-19206) والتي يتم تشغيلها بالشراكة مع شركة نحو
              المستقبل وتعد منصة صكوك صحة منصة مبتكرة تهدف إلى تعزيز سوق ادوات
              الدين في المملكة العربية السعودية{" "}
            </p>
            <p className="text-right pr-10 text-gray-600">
              و تركز رؤيتنا على تمكين جميع الشركات من اصدار ادوات الدين بسهولة
              وموثوقية، مع اتاحة فرص الاستثمار للمستثمرين، بما يسهم في تنويع
              الادوات الاستثمارية وتوسيع قاعدة التمويل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
