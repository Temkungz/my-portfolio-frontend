import {motion} from "framer-motion"

export default function ButtonENTH(){
    return(
        <div className=" flex gap-1">
             <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white border-2 border-black text-black px-4  rounded-full hover:bg-gray-700 hover:text-white"
                    >
                        EN
            </motion.button>

            <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white border-2 border-black text-black px-4  rounded-full hover:bg-gray-700 hover:text-white"
                    >
                        TH
            </motion.button>
        </div>
    );
}