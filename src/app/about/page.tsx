import { title } from "process";
import AboutPage from "./about";
import { icons } from "lucide-react";

export const generateMetadata = () => ({
    title: "About page",
    icons:{
      icon: "/about.png",
    },
})

export default function About(){
  return(
    <div className="min-h-screen">
      <AboutPage/>
    </div>
  );
}