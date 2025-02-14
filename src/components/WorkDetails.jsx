import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const images = [
  "/phoenix-website.png",
  "/phoenix-website-2.png",
  "/phoenix-website-3.png",
];

export default function WorkDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div
        className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-6 h-6 text-gray-800 dark:text-white" />
      </div>

      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-title text-light dark:text-dark capitalize text-5xl sm:text-7xl md:text-8xl font-bold text-center text-gray-800 mb-8"
        >
          {id}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16 text-gray-600 dark:text-gray-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-light dark:text-dark font-semibold">
              Timeline:
            </span>
            <span>29/01/2024 - 14/02/2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-light dark:text-dark font-semibold">
              Role:
            </span>
            <span>Frontend Developer</span>
          </div>
        </motion.div>
      </div>

      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-16 last:mb-0"
        >
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img
              src={src || "/placeholder.svg"}
              alt={`${id} website screenshot ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
