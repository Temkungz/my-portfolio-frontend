import { icons } from "lucide-react";
import Contact from "./contact";
import { describe } from "node:test";

export const generateMetadata = () => ({
    title: "Contact",
    describe: "this is a Contact page",
    icons:{
        icon: "/contact.ico",
    },
});

export default function ContactPage(){
    return(
        <div className="min-h-screen">
            <Contact/>
        </div>
    );
};