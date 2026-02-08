import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const WhySukukSeha = () => {
  // ...icons same as before

  // Framer Motion variants for slide-in
  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, // start off-screen to left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };
  const ClockIcon = () => ( <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" /> </svg> ); const ChartIcon = () => ( <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 7-7" /> </svg> ); const ShieldIcon = () => ( <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" /> </svg> ); const BadgeIcon = () => ( <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2l3 6h6l-4.5 4 1.5 6L12 15l-6 3 1.5-6L3 8h6l3-6z" /> </svg> ); const ReportIcon = () => ( <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6M4 4h16v16H4z" /> </svg> ); const TeamIcon = () => ( <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M9 8a4 4 0 100-8 4 4 0 000 8M17 8a4 4 0 100-8 4 4 0 000 8" /> </svg> );

  return (
    <section dir="rtl" className="py-20 bg-[#b0b0b1/80] dark:bg-[#192866]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] dark:text-white">
            لماذا صكوك صحة؟
          </h2>
          <p className="mt-4 text-blue-600 dark:text-blue-400">
            نقدم لك تجربة استثمارية متكاملة بأعلى معايير الأمان والشفافية
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ClockIcon, title: "سيولة عالية", desc: "إمكانية الخروج من الاستثمار في أي وقت مع ضمان السيولة الفورية", highlighted: false },
            { icon: ChartIcon, title: "عوائد تنافسية", desc: "نوفر عوائد استثمارية تنافسية تصل إلى %15 سنويًا مع توزيعات ربع سنوية منتظمة", highlighted: true },
            { icon: ShieldIcon, title: "متوافقة مع الشريعة", desc: "جميع استثماراتنا معتمدة من هيئة شرعية مستقلة تضمن التوافق الكامل مع أحكام الشريعة الإسلامية", highlighted: false },
            { icon: BadgeIcon, title: "معتمد من هيئة السوق", desc: "فريق خبير من الخبراء الماليين والاستثماريين لإدارة محفظتك بكفاءة", highlighted: true },
            { icon: ReportIcon, title: "شفافية كاملة", desc: "تقارير دورية مفصلة عن أداء استثمارك مع إمكانية المتابعة اللحظية", highlighted: false },
            { icon: TeamIcon, title: "فريق خبير", desc: "فريق متخصص من الخبراء الماليين والاستثماريين لإدارة محفظتك بكفاءة", highlighted: true },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full"
            >
              <FeatureCard
                icon={<card.icon />}
                title={card.title}
                desc={card.desc}
                highlighted={card.highlighted}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySukukSeha;
