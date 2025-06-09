import { useState } from "react";

// กำหนด type สำหรับ return value ของ useProjectModal
interface ProjectModalReturn {
  modalOpen: boolean;
  modalImage: string;
  closeModal: () => void; 
  openModal: (imgsrc: string) => void; 
  isMobile: () => boolean;
};

// เปลี่ยนชื่อฟังก์ชันเป็น useProjectModal เพื่อให้เป็น custom hook
export default function useProjectModal (): ProjectModalReturn {
  const [modalOpen, setModalOpen] = useState(false); // false คือ modal ปิด เป็นค่า default
  const [modalImage, setModalImage] = useState(""); // รูปภาพที่แสดงใน modal


  // ฟังก์ชันสำหรับเปิด modal
  const openModal = (imgsrc: string) => { // imgSrc คือรูปภาพที่จะแสดงใน modal
    setModalImage(imgsrc); // รูปภาพที่แสดงใน modal
    setModalOpen(true); // เปิด modal
  };

  // ฟังก์ชันสำหรับปิด modal
  const closeModal = () => {
    setModalImage(""); // รูปภาพที่แสดงใน modal จะถูกเอาออก
    setModalOpen(false); // ปิด modal
  };

  function isMobile() {
    if (typeof window === "undefined") return false; //คือถ้าไม่มี window ก็ให้เป็น false
    return window.innerWidth <= 768; // ปรับค่าตาม breakpoint ที่ต้องการ
  }

  return {modalOpen, modalImage, closeModal, openModal, isMobile};
};

