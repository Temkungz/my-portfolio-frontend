// components/SoftSkillsList.tsx
export default function SoftSkillsList() {
  const softSkills = 
  [
    "Adaptability",
    "Communication skills"
  ];

  return(
    <ul className="list-disc list-inside space-y-1 sm:text-sm"> 
     {/* list-disc คือการแสดงรายการด้วย bullet points, list-inside คือการแสดงรายการด้วย bullet points ภายในของ container */}
    {/* วนค่า array จาก softSkillsList */}
      {softSkills.map((softSkills, index) => (
        <li key={index}>{softSkills}</li>
      ))}
    </ul>
  );
}
