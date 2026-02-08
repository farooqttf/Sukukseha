const PrivacyPolicy = () => {
  return (
    <>
      <div className=" dark:bg-[#20327a]">
        <div className="flex items-center justify-center w-[95vw] lg:w-[90vw] 2xl:w-[80vw] max-w-screen-2xl m-auto mt-20">
          <div className="flex items-start justify-end   p-8">
            <div className="flex flex-col gap-4">
              <div className="">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-black dark:text-white text-right py-8">
                  السياسة و الخصوصية{" "}
                </h1>
                <div className="w-full h-1 bg-gray-300"></div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base md:text-xl font-semibold mb-3 text-right dark:text-white">
                  أولاً: الالتزام بحماية البيانات
                </h2>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  انطلاقًا من إيماننا العميق بأهمية حماية المعلومات، والتزامًا
                  بمبادئ الشفافية والثقة، فإننا في صكوك صحة نحرص على تطبيق أعلى
                  معايير الأمن والسرية لحماية خصوصية معلومات عملائنا
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <h2 className="text-base md:text-xl font-semibold mb-3 text-right dark:text-white">
                  ثانيًا: قبول السياسة{" "}
                </h2>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  يُعد استخدام منصة صكوك صحة موافقةً ضمنية من المستخدم على
                  الالتزام بهذه السياسة وكافة الشروط والأحكام المنظمة لاستخدام
                  المنصة وخدماتها. وفي حال عدم قبول المستخدم لهذه السياسة،
                  يتعيّن عليه الامتناع عن استخدام أي من خدمات المنصة{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base md:text-xl font-semibold mb-3 text-right dark:text-white">
                  ثالثًا: البيانات التي يتم جمعها وطرق جمعها{" "}
                </h2>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  تقوم الشركة بجمع ومعالجة البيانات الشخصية للعملاء لأغراض
                  مشروعة ومرتبطة بتقديم الخدمات الاستثمارية، وفقًا للأنظمة
                  واللوائح ذات الصلة. وتشمل هذه البيانات – على سبيل المثال لا
                  الحصر – ما يلي{" "}
                </p>
                <div className="pr-8">
                  <ul
                    className="list-disc pr-5 pl-0 space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300 py-4"
                    dir="rtl"
                    style={{ listStylePosition: "inside" }}
                  >
                    <li>البيانات الشخصية والوظيفية</li>
                    <li>البيانات المالية</li>
                    <li>البيانات الاستثمارية</li>
                    <li>بيانات التواصل</li>
                  </ul>
                </div>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  ويجوز جمع هذه البيانات من خلال{" "}
                </p>
                <div className="pr-8">
                  <ul
                    className="list-disc pr-5 pl-0 space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300 py-4"
                    dir="rtl"
                    style={{ listStylePosition: "inside" }}
                  >
                    <li>العميل مباشرة أو ممثليه النظاميين/القانونيين</li>
                    <li>الأطراف المتعاقدة مع الشركة أو ذوي العلاقة</li>
                    <li>جهات أو منظمات خارجية لأغراض التحقق</li>
                  </ul>
                </div>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  كما تحتفظ صكوك صحة أو أي طرف ثالث متعاقد معها بحق إجراء ما
                  تراه مناسبًا من تحريات أو تدقيق للتأكد من دقة البيانات{" "}
                </p>
              </div>
              <div>
                <h2 className="text-base md:text-xl font-semibold mb-3 text-right dark:text-white">
                  تصنيف البيانات{" "}
                </h2>
                <div className="pr-8">
                  <ul
                    className="list-disc pr-5 pl-0 space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300 py-4"
                    dir="rtl"
                    style={{ listStylePosition: "inside" }}
                  >
                    <li>
                      {" "}
                      <span className="font-bold dark:text-white">بيانات إلزامية</span>: يتعين
                      تقديمها لضرورتها في تقديم الخدمات أو المنتجات محل التعاقد
                    </li>
                    <li>
                      {" "}
                      <span className="font-bold dark:text-white">بيانات اختيارية</span>: يتم
                      جمعها لتطوير وتحسين جودة الخدمات وتجربة المستخدم
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base md:text-xl font-semibold mb-3 text-right dark:text-white">
                  رابعًا: حقوق المستخدم{" "}
                </h2>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  يتمتع المستخدمون بحقوقهم تجاه البيانات الشخصية التي تجمعها
                  الشركة، وتشمل على سبيل المثال{" "}
                </p>
                <div className="pr-8">
                  <ul
                    className="list-disc pr-5 pl-0 space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300 py-4"
                    dir="rtl"
                    style={{ listStylePosition: "inside" }}
                  >
                    <li>
                      الحق في الاطلاع على بياناتهم الشخصية وتصحيح أي بيانات غير
                      دقيقة أو غير مكتملة
                    </li>
                    <li>
                      الحق في سحب الموافقة على معالجة البيانات، مع مراعاة
                      الالتزامات النظامية للشركة
                    </li>
                    <li>
                      الحق في طلب حجب أو تقييد استخدام البيانات وفقًا للأنظمة
                      ذات العلاقة
                    </li>
                    <li>
                      الحق في الحصول على نسخة من بياناتهم الشخصية التي تحتفظ بها
                      الشركة لأغراض مشروعة
                    </li>
                  </ul>
                </div>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  وتلتزم الشركة بحماية هذه الحقوق وضمان استخدامها للأغراض
                  المحددة والمتوافقة مع أحكام السياسة{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base md:text-xl font-semibold mb-3 text-right dark:text-white">
                  خامسًا: الاحتفاظ بالبيانات وإتلافها{" "}
                </h2>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  تحتفظ صكوك صحة بالبيانات الشخصية للمدة اللازمة لتقديم الخدمات
                  أو وفق المتطلبات النظامية والرقابية، ويتم تخزين هذه البيانات
                  باستخدام وسائل تقنية آمنة تضمن حمايتها من الوصول أو المعالجة
                  غير المصرح بها{" "}
                </p>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  وعند انتهاء الغرض من الاحتفاظ أو انقضاء المدد النظامية، تقوم
                  الشركة بإتلاف البيانات بصورة نهائية وآمنة تحول دون استعادتها
                  أو إعادة استخدامها
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base md:text-xl font-semibold mb-3 text-right dark:text-white">
                  سادسًا: قنوات التواصل{" "}
                </h2>
                <p className="text-sm md:text-base text-right pr-10 text-gray-600 dark:text-gray-300">
                  للاستفسارات أو طلبات المساعدة أو تقديم الشكاوى المتعلقة بسياسة
                  الخصوصية، يمكن للمستخدمين التواصل معنا عبر قنوات الاتصال
                  المتاحة على المنصة{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
