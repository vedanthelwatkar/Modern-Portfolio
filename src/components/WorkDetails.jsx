import { ArrowLeft } from "lucide-react";
import { motion, time } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WorkDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [timeline, setTimeline] = useState(null);
  const [role, setRole] = useState(null);
  console.log("role: ", role);

  useEffect(() => {
    switch (id) {
      case "unifynd": {
        setImages([
          "/phoenix-website.png",
          "/phoenix-website-2.png",
          "/phoenix-website-3.png",
        ]);
        setTimeline("29/01/2024 - 14/02/2025");
        setRole("Assosiate Software Engineer");
        break;
      }
      case "tbb": {
        setImages([
          "/tbb-website.png",
          "/tbb-website-2.png",
          "/tbb-website-3.png",
        ]);
        setTimeline("29/01/2024 - 14/02/2025");
        setRole("Full Stack Developer");
        break;
      }
      case "tbb-dashboard": {
        setImages([
          "/tbb-dashboard-website.png",
          "/tbb-dashboard-website-2.png",
          "/tbb-dashboard-website-3.png",
        ]);
        setTimeline("29/01/2024 - 14/02/2025");
        setRole("Full Stack Developer");
        break;
      }
      case "tech-stack": {
        setImages([
          "/phoenix-website.png",
          "/phoenix-website-2.png",
          "/phoenix-website-3.png",
        ]);
        break;
      }
      case "vtube": {
        setImages([
          "/vtube-website-3.png",
          "/vtube-website.png",
          "/vtube-website-2.png",
        ]);
        setTimeline("29/01/2024 - 14/02/2025");
        setRole("Personal Project");
        break;
      }
    }

    return () => {
      setImages([]);
      setRole(null);
      setTimeline(null);
    };
  }, [id]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div
        className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => {
          navigate(-1);
          setImages([]);
          setRole(null);
          setTimeline(null);
        }}
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

        {id !== "tech-stack" && (
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
              <span>{timeline}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-light dark:text-dark font-semibold">
                Role:
              </span>
              <span>{role}</span>
            </div>
          </motion.div>
        )}
      </div>

      {images?.map((src, index) => (
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
};

export default WorkDetails;
