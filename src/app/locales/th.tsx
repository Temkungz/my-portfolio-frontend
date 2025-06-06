
const th = {
    /* Header */
    home: "หน้าแรก",
    about: "เกี่ยวกับ",
    projects: "โปรเจกต์",
    contact: "ติดต่อ",
    myportfolio: "ผลงาน",

    /* Home/Introduction */
    aboutmearticle: "เกี่ยวกับฉัน",
    aboutme: "สวัสดีครับ ผมชื่อสหภาพ พรมมานอก หรือเรียกสั้น ๆ ว่า เทม ปัจจุบันกำลังมองหาตำแหน่งงานในสาย Full-Stack ผมมีความสนใจอย่างมากในสาขานี้ และตั้งใจพัฒนาทักษะของตัวเองให้ดียิ่งขึ้น เหตุผลที่ผมสนใจเข้าร่วมงานกับบริษัทของคุณก็เพราะชื่อเสียงที่ดีและสภาพแวดล้อมการทำงานที่ดี ผมหวังว่าจะมีโอกาสได้ทำงานร่วมกับทีมของคุณและมีส่วนช่วยผลักดันความสำเร็จของบริษัทครับ",
    languagearticle: "ภาษา",
    language: ["อังกฤษ (พื้นฐาน)", "ไทย (เจ้าของภาษา)"],
    socialmedia: "โซเชียล",
   

    /* Home/Portfolio */
    fullname: "สหภาพ พรมมานอก",
    fullstack: "นักพัฒนา Full-Stack",
    contactme: "ติดต่อฉัน",
    phone: "0917202227",
    email: "koontem1@gmail.com",
    address: [
        "99/275 หมู่ 6 หมู่บ้านพรทวีวัฒน์ โครงการ 3,",
        "ตำบลคลองสอง อำเภอคลองหลวง,",
        "ปทุมธานี 12120 ประเทศไทย"
      ],

    /* Projects */
    projectsarticle: "โปรเจกต์",

    /* Projects/Project1 */
    projecthead1: "โปรเจกต์จบการศึกษา",
    date1: "พฤศจิกายน 2024 - มีนาคม 2025",
    description1: "ระบบนับถาดในกระบวนการพิมพ์ลายของบริษัทมาจอร์เร็ต จำกัด",

    /* Projects/Project2 */
    projecthead2: "โปรแกรมทำนายตัวเลขด้วยลายมือ",
    date2: "กรกฎาคม 2024 - สิงหาคม 2024",
    description2: "สร้างโมเดลการเรียนรู้ของเครื่องจักรกลด้วยการใช้งาน Convolutional Neural Network (CNN) บนข้อมูล MNIST เพื่อทำนายตัวเลขลายมือ",

    /* Projects/Project3 */
    projecthead3: "ใบรับรองการเรียนรู้ React Foundations",
    date3: "3 มิถุนายน 2025",
    description3: "สำเร็จการเรียนรู้ระบบการพัฒนา React Foundations",


    /* About */
    skills: "ทักษะ",
    softskills: "ทักษะด้านบุคลิกภาพ",
    experience: "ประสบการณ์",
    universityexperience: "ประสบการณ์จากการศึกษา",

    /* HomeComponent/SoftSkillsList */
    softskillslist: ["ปรับตัวได้", "การสื่อสาร"],

    /* HomeComponent/ExperienceList */
    experience1:[
      {
        title:"งานฝึกงานที่มหาวิทยาลัย Yeungnam ประเทศเกาหลีใต้",
        date:"กรกฎาคม 1 - สิงหาคม 31, 2024",
        details: [
          "ฝึกฝนโมเดลการเรียนรู้ของเครื่องจักรกลโดยใช้ข้อมูล MNIST",
          "ทำนายตัวเลขด้วยลายมือ",
        ],
      },
      {
        title:"ผู้ช่วยสอนวิชาการเขียนโปรแกรมและสร้างเกม Unity",
        date:"กรกฎาคม 1 - สิงหาคม 31, 2024",
        details: [
          "ผู้ช่วยสอนวิชาการเขียนโปรแกรม",
          "สร้างเกม Unity สำหรับการเรียนรู้",
        ],
      }
     ],
    
     /* HomeComponent/Timeline */
     timeline1: [
      {
        title:"โครงการกระจายความรู้สู่ผู้ประกอบการยุคใหม่ From Gen Z to be CEO ",
        date:"2022",
        description:["เรียนรู้เกี่ยวกับการทำงานของ CEO", "ฝึกฝนทักษะการทำงาน"],
        Icon:"BookOpen",
        iconColor:"bg-gray-400"
      },
      {
        title:"ฝึกฝนการพัฒนาโปรแกรมด้วย Low Code Platform",
        date:"2023",
        description:["พัฒนาโปรแกรมฐานข้อมูลด้วย Low Code Platform"],
        Icon:"Monitor",
        iconColor:"bg-blue-500"
      },
      {
        title:"Engineering Student Talent Award 2023 (ESTA)",
        date:"2023",
        description:["ฝึกฝนการใช้งาน AI และการทำข้อสอบภาษาอังกฤษด้วยการเรียนรู้จากการศึกษา"],
        Icon:"Award",
        iconColor:"bg-yellow-500"
      },
      {
        title:"GCDP - Global Capstone Design Project",
        date:"1-5 สิงหาคม, 2024",
        description:["เข้าร่วมโครงการทางวิชาการ โดยทำโปรเจกต์เกี่ยวกับการพัฒนาโรงเรือนอัจฉริยะเพื่อหาความหวานของแตงโม"],
        Icon:"Globe",
        iconColor:"bg-green-500"
      },
      {
        title:"ประกวดโครงงานสหกิจศึกษา",
        date:"3 ธันวาคม, 2024",
        description:["รางวัลชนะเลิศอันดับ 3 โปรแกรมคาดการตัวเลขที่เขียนด้วยลายมือด้วยชุดข้อมูล MNIST"],
        Icon:"ClipboardList",
        iconColor:"bg-purple-500"
      },
      { 
        title:"โปรเจกต์จบการศึกษา",
        date:"พฤศจิกายน 2024 - มีนาคม 2025",
        description:["ระบบนับชิ้นงานในกระบวนการพิมพ์ลายของบริษัท มาจอเร็ตต์ จำกัด"],
        Icon:"BookOpen",
        iconColor:"bg-pink-500"
      }
     ],
};

export default th;