// components/SkillsList.tsx
export default function SkillsList() {
    const skills = 
    [
      "Javascript, TypeScript",
      "React.js, Next.js",
      "Node.js, Nest.js", 
      "mySQL, PostgreSQL",
      "Git", 
      "PHP",
      "HTML",
      "Tailwind CSS"
    ];
  
    return (
      <ul className="list-disc list-inside space-y-1 sm:text-sm"> 
       {/* วนค่า array จาก SkillsList  */}
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    );
  };