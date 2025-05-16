// components/TimelineItem.tsx
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  title: string;
  date: string;
  description: string[];
  Icon: LucideIcon;
  iconColor?: string;
}

export default function TimelineItem({
  title,
  date,
  description,
  Icon,
  iconColor = "bg-gray-400",
}: TimelineItemProps) {
  return (
    <div className="relative flex items-start mb-8">
      {/* เส้น timeline ตรงกลาง */}
      <div className="absolute left-5 top-0 h-full border-l-2 border-gray-300"></div>

      {/* จุด icon */}
      <div
        className={`z-10 w-10 h-10 flex items-center justify-center rounded-full ${iconColor} text-white shadow-md`}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Card content */}
      <div className="ml-6 flex-1">
        <Card className="bg-gray-100 shadow-md rounded-xl">
          <CardContent className="p-6">
            <h4 className="font-semibold text-lg">{title}</h4>
            <span className="text-sm text-gray-500">{date}</span>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}