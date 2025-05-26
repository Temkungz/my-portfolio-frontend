//Framer motion variants
export const text = { //ส่วนของ text ที่ใช้แสดง transition เมื่อเปลื่ยน route path
    initial: {
        opacity: 1, 
    },
    enter: {
        opacity: 0,
        top: -100,
        transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]},
        transitionEnd: {top: "47.5%"} //ตอนจบ transition ใช้ 47.5% เพราะจะได้ responsive ไม่ติดค่าตายตัวของ px
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: {duration: .5, delay: .4, ease: [0.33, 1, 0.68, 1]}
    }
}

//ตัว initialPath กับ targetPath ถูกสร้างไว้ใน Curve.tsx แล้วส่งเข้า function นี้
//curve() จะบอกว่า: “ให้เส้นโค้งของ path เปลี่ยนรูปร่างจาก A → B”

export const curve = (initialPath: string, targetPath: string) => {
    return {
        initial: {
            d: initialPath //d คือ attribute ของ <path> ใน SVG
            //Framer Motion สามารถ animate การเปลี่ยน d ได้ (เรียกว่า morphing)
            //ส่วนโค้้ง
        },
        enter: {
            d: targetPath, //เป้นตัวที่ทำให้มันเป็นพื้นเรียบ
            transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: initialPath, //
            transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
        }
    }
}

//translate = “ยกคลื่นทั้งแผ่นขึ้นมาปิดหน้าจอ” หรือก็คือตัวทำ animate SVG ของ initialPath กับ targetPath
//ใช้กับ <motion.svg> ที่ครอบ <path> (คลื่น)

export const translate = {
    initial: {
        top: "-300px"
    },
    enter: {
        top: "-100vh", //จุดเข้า: slide ขึ้นมาครอบทั้งหน้าจอ (top: -100vh)
        transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]},
        transitionEnd : {
            top: "100vh"
        }
    },
    exit: {
        top: "-300px",
        transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
    }
}