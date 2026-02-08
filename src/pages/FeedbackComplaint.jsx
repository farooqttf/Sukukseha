import React from "react";

const FeedbackComplaint = () => {
  return (
    <div className="flex items-center justify-center w-[95vw] lg:w-[90vw] 2xl:w-[80vw] max-w-screen-2xl m-auto">
      <div className="flex items-start justify-end   p-8">
        <div className="flex flex-col gap-4">
          <div className="">
            <h1 className="text-2xl lg:text-3xl font-bold text-black text-right py-8">
              الشكاوى والاقتراحات{" "}
            </h1>
            <div className="w-full h-1 bg-gray-200 mb-8"></div>
            <p className="text-right pr-10 text-gray-600">
              تحرص منصة صكوك صحة على الإصغاء لعملائها والاهتمام بملاحظاتهم، سواء
              كانت شكاوى أو مقترحات، إدراكًا منها بأن هذه الملاحظات تمثل عنصرًا
              أساسيًا في تطوير خدماتها وتعزيز جودة تجربة المستخدمين
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-3 text-right">
              آلية استقبال الشكاوى والاقتراحات{" "}
            </h2>
            <div className="pr-8">
              <ul
                className="list-disc pr-5 pl-0 space-y-2 text-gray-600 py-4"
                dir="rtl"
                style={{ listStylePosition: "inside" }}
              >
                <li>
                  يمكنكم التقدم بالشكاوى أو الاقتراحات عبر الموقع الالكتروني ،
                  أو من خلال قنوات التواصل المخصصة
                </li>
                <li>
                  تتم مراجعة جميع الطلبات بعناية واهتمام، مع الالتزام بالرد خلال
                  فترة زمنية محددة
                </li>
                <li>
                  في حال كانت الشكوى تتطلب وقتًا أطول للمعالجة، سيتم إشعاركم
                  بالجدول الزمني المتوقع والتواصل معكم بشكل دوري حتى إغلاقها
                  نهائيًا
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-3 text-right">
              ساعات العمل الرسمية{" "}
            </h2>
            <p className="text-right pr-10 text-gray-600">
              من الأحد إلى الخميس، من الساعة 9:00 صباحًا حتى 5:00 مساءً{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-3 text-right">
              قنوات التواصل{" "}
            </h2>

            <div className="pr-8">
              <ul
                className="list-disc pr-5 pl-0 space-y-2 text-gray-600 py-4"
                dir="rtl"
                style={{ listStylePosition: "inside" }}
              >
                <li> الموقع الإلكتروني</li>
                <li>عبر منصة X </li>
              </ul>
            </div>
            <p className="text-right pr-10 text-gray-600">
              إننا في صكوك صحة نعتبر ملاحظاتكم وشكواكم فرصة للتطوير، ونسعى
              دائمًا لتقديم حلول فعالة وخدمات ترقى لتوقعاتكم{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackComplaint;
