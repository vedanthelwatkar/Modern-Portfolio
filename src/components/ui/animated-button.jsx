import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AnimatedButton({ text, path, icon }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      className="relative overflow-hidden bg-light dark:bg-dark text-dark dark:text-black px-6 py-2 rounded-md font-medium"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(path)}
    >
      <motion.span
        className="inline-block"
        animate={{ x: isHovered ? 160 : 0 }}
        transition={{ duration: 0.25 }}
      >
        {text}
      </motion.span>
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-2xl"
        initial={{ x: -160 }}
        animate={{ x: isHovered ? 0 : -160 }}
        transition={{ duration: 0.25 }}
      >
        {icon}
      </motion.div>
    </button>
  );
}
