// components/SoftSkillsList.tsx
import { useLanguage } from "../contexts/LanguageContext";
export default function SoftSkillsList() {
  const {t} = useLanguage();
  const softSkills = t("softskillslist");
 
  if(!Array.isArray(softSkills)) return null; // ถ้าไม่ใช่ array ก็ให้เป็น null

  return(
    <ul className="list-disc list-inside space-y-1 sm:text-sm"> 
     {/* list-disc คือการแสดงรายการด้วย bullet points, list-inside คือการแสดงรายการด้วย bullet points ภายในของ container */}
    {/* วนค่า array จาก softSkillsList */}
    {Array.isArray(softSkills) ? softSkills.map((soft, index) => ( //ถ้าเป็น array ก็ให้แสดงผลตามนี้
      <span key={index}>
        {soft}
        <br />
      </span>
     )) : softSkills} {/* : คือ ถ้าไม่ใช่ array ก็ให้เป็น string */}
    </ul>
  );
}
