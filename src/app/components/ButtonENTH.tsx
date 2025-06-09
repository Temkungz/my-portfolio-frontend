import {motion} from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext";

export default function ButtonENTH(){
    const {setLang} = useLanguage(); 


    return(
        <div className=" flex gap-1">
             <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white border-2 border-black text-black px-4  rounded-full hover:bg-black hover:text-white"
                        onClick={() => setLang("en")}
                    >
                        EN
            </motion.button>

            <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white border-2 border-black text-black px-4  rounded-full hover:bg-black hover:text-white"
                        onClick={() => setLang("th")}
                    >
                        TH
            </motion.button>
        </div>
    );  
};  