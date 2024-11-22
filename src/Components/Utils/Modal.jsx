import { motion } from "motion/react";
import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, close }) {
  return createPortal(
    <div className="fixed w-screen h-screen z-10 top-0 left-0">
      <div
        className="absolute w-full h-full top-0 left-0 bg-black/80 cursor-pointer"
        onClick={close}
      ></div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        className="relative max-w-2xl bg-white mt-6 mx-auto px-10 py-8 rounded-sm"
      >
        {children}
      </motion.div>
    </div>,
    document.getElementById("modal")
  );
}
