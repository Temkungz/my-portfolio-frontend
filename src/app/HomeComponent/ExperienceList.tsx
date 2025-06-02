// components/ExperienceList.tsx
export default function ExperienceList() {
   const experiences =
   [
    {
      title:"Internship at Yeungnam University, South Korea",
      date:"July 1 – August 31, 2024",
      details: [
        "Trained machine learning models using the MNIST dataset",
        "Recognized handwritten digits",
      ],
    },
    {
      title:"Teaching Assistant – Programming & Unity Game Development",
      date:"July 1 – August 31, 2024",
      details: [
        "Assistant for the Computer Programming course",
        "Developed Unity games for learning",
      ],
    }
   ];
  
    return (
      <div className="space-y-4"> {/* วนค่า array จาก ExperienceList ซึ่งเป็นการวนซ้อน array อีกที */}
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="font-bold">{exp.title}</h3> 
            <p className="text-sm text-gray-500">{exp.date}</p>
            <ul className="list-disc list-inside mt-2">
              {exp.details.map((details, index) =>(
                <li key={index}>{details}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  