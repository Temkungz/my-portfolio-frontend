import { XIcon } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

 type ImageModalProps = { // กำหนดค่าของ props ที่จะส่งเข้าไปในฟังก์ชัน ImageModal
    openModal: boolean; // สถานะการเปิด modal
    imgsrc: string; // รูปภาพที่จะแสดงใน modal
    closeModal: () => void; // ฟังก์ชันสำหรับปิด modal
 };

  export default function ImageModal ({openModal, imgsrc, closeModal}: ImageModalProps) { // FC คือ Functional Component ที่สามารถรับ props เข้าไปได้


    useEffect(() => {
      if(!openModal) return; // ถ้า openModal เป็น false จะไม่แสดง modal ซึ่งตามใน projects.tsx จะเป็น false เป็นค่า default

      const handleKeyDown = (e: KeyboardEvent) => { // กำหนดฟังก์ชันสำหรับปิด modal ด้วยการกดปุ่ม Escape
        if (e.key === 'Escape') {
          closeModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);

    },[openModal,closeModal]); // การเรียกใช้งาน useEffect ที่จะทำงานเมื่อ openModal หรือ closeModal เปลี่ยนแปลง

    if (!openModal) return null; // ถ้า openModal เป็น false จะไม่แสดง modal ซึ่งตามใน projects.tsx จะเป็น false เป็นค่า default 


   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => e.stopPropagation()}> {/* ป้องกันการคลิกภายนอกจะทำให้ปิด modal */}
        
        <div className="bg-white p-4 rounded-lg shadow-lg"> 
        <Image
          src={imgsrc} 
          alt="Modal image"
          width={1200}
          height={800}
          className="max-w-[60vw] max-h-[70vh]" // vw คือ viewport width หน่วยความกว้างของหน้าจอ และ vh คือ viewport height หน่วยความสูงของหน้าจอ
        />
        <button
          type="button"
          title="Close"
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          <XIcon className="w-6 h-6" />
        </button>
        </div>
      </div>
    );
 };

