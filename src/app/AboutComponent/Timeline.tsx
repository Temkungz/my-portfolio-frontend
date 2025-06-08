// components/Timeline.tsx
import { BookOpen, Monitor, Award, Globe, Trophy, ClipboardList } from "lucide-react"; // icon จาก library lucide-react
import TimelineItem from "./Timelineitem";
import { useLanguage } from "../contexts/LanguageContext";

export default function Timeline() {
  const {t} = useLanguage() as {t: (key: string) => string | string[] | object };
  const timeline = t("timeline1");
  
  if (!Array.isArray(timeline)) return null;

  return (
    <div className="relative"> {/*  */} 
      {/* เส้น timeline หลัก */}
      <div className="absolute left-5 top-0 h-full border-l-2 border-gray-300"></div>
      {timeline.map((item, idx) => {
        // แปลงชื่อ icon (string) เป็น component จริง
        const iconMap = {
          BookOpen,
          Monitor,
          Award,
          Globe,
          Trophy,
          ClipboardList
        };
        // ดึง iconMap component, 
        const IconComponent = iconMap[item.Icon as keyof typeof iconMap];
        return (
          <TimelineItem
            key={idx}
            title={item.title}
            date={item.date}
            description={item.description}
            Icon={IconComponent  || BookOpen} // fallback เป็น BookOpen ถ้าไม่พบ icon ที่กำหนดไว้
            iconColor={item.iconColor || "bg-gray-400"} // ถ้าไม่มี iconColor ก็ให้เป็น bg-gray-400
          />
        );
      })}
    </div>
  );
};