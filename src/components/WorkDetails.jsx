"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const workData = {
  unifynd: {
    images: [
      "/phoenix-website.png",
      "/phoenix-website-2.png",
      "/phoenix-website-3.png",
    ],
    timeline: "29/01/2024 - 14/02/2025",
    role: "Associate Software Engineer",
    descriptions: [
      "Led the development of a cutting-edge e-commerce platform, implementing advanced features such as real-time inventory management and personalized product recommendations.",
      "Optimized the website's performance, achieving a 40% reduction in load time and improving the overall user experience.",
      "Integrated a robust analytics system, providing valuable insights into user behavior and driving data-informed decisions for business growth.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
  },
  tbb: {
    images: ["/tbb-website.png", "/tbb-website-2.png", "/tbb-website-3.png"],
    timeline: "29/01/2024 - 14/02/2025",
    role: "Full Stack Developer",
    descriptions: [
      "Architected and developed a scalable content management system, enabling efficient creation and distribution of educational materials.",
      "Implemented an advanced search functionality with machine learning-powered recommendations, enhancing user engagement and content discovery.",
      "Designed and built a real-time collaboration feature, facilitating seamless interaction between educators and students.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
  },
  dashboard: {
    images: [
      "/tbb-dashboard-website.png",
      "/tbb-dashboard-website-2.png",
      "/tbb-dashboard-website-3.png",
    ],
    timeline: "29/01/2024 - 14/02/2025",
    role: "Full Stack Developer",
    descriptions: [
      "Architected and developed a scalable content management system, enabling efficient creation and distribution of educational materials.",
      "Implemented an advanced search functionality with machine learning-powered recommendations, enhancing user engagement and content discovery.",
      "Designed and built a real-time collaboration feature, facilitating seamless interaction between educators and students.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
  },
  stack: {
    images: ["/tbb-website.png", "/tbb-website-2.png", "/tbb-website-3.png"],
    timeline: "29/01/2024 - 14/02/2025",
    role: "Full Stack Developer",
    descriptions: [
      "Architected and developed a scalable content management system, enabling efficient creation and distribution of educational materials.",
      "Implemented an advanced search functionality with machine learning-powered recommendations, enhancing user engagement and content discovery.",
      "Designed and built a real-time collaboration feature, facilitating seamless interaction between educators and students.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
  },
  vtube: {
    images: [
      "/vtube-website.png",
      "/vtube-website-2.png",
      "/vtube-website-3.png",
    ],
    timeline: "29/01/2024 - 14/02/2025",
    role: "Full Stack Developer",
    descriptions: [
      "Architected and developed a scalable content management system, enabling efficient creation and distribution of educational materials.",
      "Implemented an advanced search functionality with machine learning-powered recommendations, enhancing user engagement and content discovery.",
      "Designed and built a real-time collaboration feature, facilitating seamless interaction between educators and students.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
  },
};

const WorkDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workItem, setWorkItem] = useState(null);

  useEffect(() => {
    if (id && id in workData) {
      setWorkItem(workData[id]);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!workItem) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 pb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 left-6 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-6 h-6 text-foreground" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-title capitalize text-4xl sm:text-5xl md:text-6xl font-bold text-center text-foreground mb-6"
          >
            {id.replace("-", " ")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 text-muted-foreground mb-8"
          >
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {workItem.timeline}
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {workItem.role}
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {workItem.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs px-2 py-1"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>

        {workItem.images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-24 last:mb-0"
          >
            <Card className="overflow-hidden bg-background/60 backdrop-blur-sm shadow-xl">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-stretch">
                  <div className="lg:w-3/5 h-full">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`${id} screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="lg:w-2/5 p-8 flex items-center bg-gradient-to-r from-background/90 to-background/70">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 text-foreground">
                        Key Achievement {index + 1}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {workItem.descriptions[index]}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkDetails;
