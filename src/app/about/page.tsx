export default function About(){
  return(
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto py-3">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          เกี่ยวกับฉัน👨‍💻 
        </h1>

        <p className=" text-gray-500 mb-6">
          ผมชื่อ <span className="text-red-800">สหภาพ พรมมานอก</span> ปัจจุบันกำลังศึกษาที่มหาวิทยาลัยราชมงคงธัญบุรี มีความสนใจการทำงานด้าน <span className="text-red-800">Full stack</span> ครับ
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        📚 การศึกษา
        </h2>

        <ul className="list-decimal list-inside text-gray-500 mb-6">
          <li className="list-disc"><span className="text-red-800 rounded-none">ปริญญาตรี:</span> มหาวิทยาลัยราชมงคลธัญยุรี</li>
          <li><span className="text-red-800 rounded-none">มัธยมต้นและมัธยมปลาย:</span> โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        🛠 ทักษะ
        </h2>

        <ul className="flex flex-wrap  gap-3 mb-3">
          <li className="bg-red-300 text-red-800 px-3 py-1 rounded">SQL</li>
          <li className="bg-gray-300 text-gray-800 px-3 py-1 rounded">Next.js</li>
          <li className="bg-green-300 text-green-800 px-3 py-1 rounded">Node.js</li>
          <li className="bg-blue-300 text-blue-800 px-3 py-1 rounded">Tailwind CSS</li>
          <li className="bg-yellow-300 text-yellow-800 px-3 py-1 rounded">Javascript</li>
        </ul>
      </div>
    </div>
  );
}