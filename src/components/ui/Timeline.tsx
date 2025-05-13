// components/Timeline.tsx
import { BookOpen, Monitor, Award, Globe, Trophy, ClipboardList } from "lucide-react";
import TimelineItem from "@/components/ui/Timelineitem";

export default function Timeline() {
  return (
    <div className="relative">
      {/* เส้น timeline หลัก */}
      <div className="absolute left-5 top-0 h-full border-l-2 border-gray-300"></div>

      <TimelineItem
        title="Knowledge Dissemination Project for Modern Entrepreneurs"
        date="2022"
        description={["About how the CEO works", "Learning work skills"]}
        Icon={BookOpen}
        iconColor="bg-gray-500"
      />
      <TimelineItem
        title="Training Low Code Platform"
        date="2023"
        description={["Develop database website application with Low-Code"]}
        Icon={Monitor}
        iconColor="bg-blue-500"
      />
      <TimelineItem
        title="Engineering Student Talent Award 2023 (ESTA)"
        date="2023"
        description={["Training on AI and basic English exam in engineering"]}
        Icon={Award}
        iconColor="bg-yellow-500"
      />
      <TimelineItem
        title="GCDP - Global Capstone Design Project"
        date="1-5 August, 2024"
        description={["Develop database website application"]}
        Icon={Globe}
        iconColor="bg-green-500"
      />
      <TimelineItem
        title="Cooperative Education Student Project Contest"
        date="3 December, 2024"
        description={["Won 3rd Place in Handwritten Digit Classification Project"]}
        Icon={Trophy}
        iconColor="bg-purple-500"
      />
      <TimelineItem
        title="Graduated Project"
        date="2024 - 2025"
        description={[
          "Item counting system for padding process of Majorette Thailand Co.,Ltd.",
        ]}
        Icon={ClipboardList}
        iconColor="bg-pink-500"
      />
    </div>
  );
}