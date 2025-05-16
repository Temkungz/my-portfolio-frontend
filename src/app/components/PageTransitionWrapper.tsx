// app/components/PageTransitionWrapper.tsx
"use client";
import { usePathname } from "next/navigation";
import Curve from "@/app/components/Curve";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    // ✅ ใช้ key pathname เพื่อ force remount Curve → transition ทำงานทุกหน้า
    <Curve key={pathname} backgroundColor="black">
      {children}
    </Curve>
  );
}