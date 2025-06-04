import { XIcon } from "lucide-react";
<<<<<<< Updated upstream
import { useState } from "react";
=======
import { useEffect } from "react";
>>>>>>> Stashed changes
import Image from "next/image";

 type ImageModalProps = { // กำหนดค่าของ props ที่จะส่งเข้าไปในฟังก์ชัน ImageModal
    openModal: boolean; // สถานะการเปิด modal
    imgSrc: string; // รูปภาพที่จะแสดงใน modal
    closeModal: () => void; // ฟังก์ชันสำหรับปิด modal
 };

 const ImageModal = ({openModal, imgSrc, closeModal}: ImageModalProps) => { // FC คือ Functional Component ที่สามารถรับ props เข้าไปได้
<<<<<<< Updated upstream
=======

    useEffect(() => {
      if(!openModal) return;

      const handleKeyDown = (e: KeyboardEvent) => { // กำหนดฟังก์ชันสำหรับปิด modal ด้วยการกดปุ่ม Escape
        if (e.key === 'Escape') {
          closeModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);

    },[openModal,closeModal]); // การเรียกใช้งาน useEffect ที่จะทำงานเมื่อ openModal หรือ closeModal เปลี่ยนแปลง

>>>>>>> Stashed changes
    if (!openModal) return null; // ถ้า openModal เป็น false จะไม่แสดง modal ซึ่งตามใน projects.tsx จะเป็น false เป็นค่า default 
   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}>
        
        <div className="bg-white p-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}> {/* ป้องกันการคลิกภายนอกจะทำให้ปิด modal */}
        <Image
          src={imgSrc}
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
export default ImageModal; // การส่งออกฟังก์ชัน ImageModal ที่สามารถเรียกใช้ได้จากนอกไฟล์

