// components/SoftSkillsList.tsx
export default function SoftSkillsList() {
    const softSkills = ["Adaptability", "Communication skills"];
  
    return (
      <ul className="list-disc list-inside space-y-1">
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    );
  }