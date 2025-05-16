import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProjectsPage from "./projects";

export const generateMetadata = () => ({
  title: "Projects",
  icons: {
    icon: "/project.svg", // ✅ favicon สำหรับหน้า Home
  },
});


export default function Project() {
  return (
    <div className="min-h-screen">
      <ProjectsPage/>
    </div>
  );
}
