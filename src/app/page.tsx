import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Portfolio from "./Home/Portfolio";
import Introduction from "./Home/Introduction";
import Curve from "./components/Curve";

export const generateMetadata = () => ({
  title: "Home Page",
  icons: {
    icon: "/home.svg", // ✅ favicon สำหรับหน้า Home
  },
});


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Introduction/>
      <Portfolio/>
    </div>
  );
}
