"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";    // สำหรับ Next 13+ App Router
import { text, curve, translate } from "./anime";

// กำหนดชื่อ route
const routes = {
  "/": "Home",
  "/about": "About",
  "/projects":"Projects",
  "/contact": "Contact",
};

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({
  children,
  backgroundColor = "black",
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor }}>
      {/* Background layer */}
      <div
        className={`fixed top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none `}
        style={{ opacity: dimensions.width === 0 ? 1 : 0, backgroundColor }}
      />

      {/* Route text */}
      <motion.p
        {...anim(text)}
        className="absolute left-1/2 top-[40%] -translate-x-1/2 text-white text-[46px] z-30 text-center"
      >
        {routes[pathname as keyof typeof routes]}
      </motion.p>

      {/* SVG curve */}
      {dimensions.width !== 0 && <SVG {...dimensions} backgroundColor={backgroundColor} />}

      {/* Page content */}
      {children}
    </div>
  );
}

const SVG = ({
  width,
  height,
  backgroundColor,
}: {
  width: number;
  height: number;
  backgroundColor: string;
}) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      {...anim(translate)}
      className="fixed top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none z-10"
    >
      <motion.path
        {...anim(curve(initialPath, targetPath))}
        fill={backgroundColor}
      />
    </motion.svg>
  );
};