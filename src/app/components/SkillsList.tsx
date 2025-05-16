// components/SkillsList.tsx
export default function SkillsList() {
    const skills = ["Javascript", "React.js, Next.js", "mySQL", "Git", "PHP", "HTML", "Tailwind CSS"];
  
    return (
      <ul className="list-disc list-inside space-y-1">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    );
  }