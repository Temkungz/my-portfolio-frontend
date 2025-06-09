// components/TimelineItem.tsx
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps { //interface for defining the props of the TimelineItem component
  title: string;
  date: string;
  description: string[];
  Icon: LucideIcon; //LucideIcon is a type from lucide-react library
  iconColor: string;
}

export default function TimelineItem({
  title,
  date,
  description,
  Icon,
  iconColor = "bg-gray-400",
}: TimelineItemProps) { //object destructuring
  return (
    <div className="relative flex items-start mb-8"> {/* items-start จะจัดให้ items อยู่ชิดด้านบนของ container, relative ใช้เพื่อให้สามารถจัดตำแหน่ง absolute ข้างในได้, flex ทำให้เป็น flex container, mb-8 คือ margin-bottom 32px */}
      {/* เส้น timeline ตรงกลาง */}
      <div className="absolute left-5 top-0 h-full border-l-2 border-gray-300"></div>


      {/* จุด icon */}
      <div
        className={`z-10 w-10 h-10 flex  items-center justify-center rounded-full ${iconColor} text-white shadow-md`} 
      > {/* items-center จะจัดให้ items อยู่ตรงกลางของ container, justify-center จะจัดให้ items อยู่ตรงกลางของ container */}
        <Icon className="w-5 h-5" />
      </div>

      {/* Card content */}
      <div className="relative ml-6 flex-1 ">
        <Card className="bg-gray-100 shadow-md rounded-xl ">
          <CardContent className="p-6">
            <h4 className="font-semibold text-lg">{title}</h4>
            <span className="text-sm text-gray-500">{date}</span>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {description.map((item, index) => ( 
                <li key={index}>{item}</li>
              ))} {/* map ตัวแรกคือค้่ของ array, ตัวที่สองคือค่าของ index เช่น 0, 1, 2 */}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};