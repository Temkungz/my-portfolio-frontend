// components/ExperienceList.tsx
import { useLanguage } from "../contexts/LanguageContext";
export default function ExperienceList() {
  const {t} = useLanguage() as {t: (key: string) => string | string[] | object };
  const experiences = t("experience1");

  if(!Array.isArray(experiences)) return null; // ถ้าไม่ใช่ array ก็ให้เป็น null
  
    return (
      <div className="space-y-4"> {/* วนค่า array จาก ExperienceList ซึ่งเป็นการวนซ้อน array อีกที */}
          {Array.isArray(experiences) ? experiences.map((exp, index) => (
            <div key={index}>
              <h3 className="font-bold">{exp.title}</h3> 
              <p className="text-sm text-gray-500">{exp.date}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.details.map((details: string, index: number) =>(
                  <li key={index}>{details}</li>
                ))}
            </ul>
          </div>
        )) : experiences}
      </div>
    );
  };
  