import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Calendar,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const workData = {
  unifynd: {
    title: "Unifynd",
    subtitle: "Loyalty Program Platform for Phoenix Malls",
    iframe: "https://www.phoenixnhance.com/",
    thumbnail: "/phoenix.webp",
    timeline: "29/01/2024 - 14/02/2025",
    role: "Associate Software Engineer",
    overview:
      "Engineered and optimized Nhance, a next-generation loyalty program platform for Phoenix Malls, boosting customer retention and engagement across India.",
    impact: [
      "Improved the reward system, resulting in increased customer interactions and higher repeat visits.",
    ],
    technologies: ["React", "Node.js", "MySQL", "Express", "AWS"],
    metrics: [
      { label: "User Engagement Increase", value: "+62%" },
      { label: "Loyalty Transactions Processed", value: "500K+" },
      { label: "Active Users", value: "1K+" },
    ],
    testimonial: {
      quote:
        "Nhance has transformed the way customers interact with our malls, making loyalty rewards more accessible and engaging than ever.",
      author: "Anish Jain",
      position: "CEO, Unifynd",
    },
    next: "/tbb",
  },

  tbb: {
    title: "The Banyan Branch",
    subtitle: "Therapy Website & Dashboard",
    iframe: "https://www.thebanyanbranch.com",
    thumbnail: "/tbb-logo.png",
    images: [
      "/tbb-dashboard-website.png",
      "/tbb-dashboard-website-2.png",
      "/tbb-dashboard-website-3.png",
    ],
    timeline: "29/01/2024 - 14/02/2025",
    role: "Freelance Full Stack Developer",
    overview:
      "A fully dynamic therapy website with integrated admin dashboard developed for Priya Rajan, enabling seamless client management and content updates.",
    impact: [
      "Enabled seamless client bookings and dynamic content updates.",
      "Integrated secure payment options and personalized therapy plans.",
      "Developed secure admin access for managing client data.",
      "Enabled real-time content updates without affecting live sessions.",
    ],
    technologies: ["React", "Redux", "Tailwind", "Django", "MySQL", "AWS"],
    metrics: [
      { label: "Client Retention", value: "+40%" },
      { label: "Booking Efficiency", value: "+65%" },
      { label: "Admin Efficiency", value: "+80%" },
      { label: "Data Accuracy", value: "99%" },
    ],
    testimonial: {
      quote:
        "The website and dashboard have streamlined our therapy sessions and significantly improved our workflow, allowing us to focus more on client care.",
      author: "Priya Rajan",
      position: "Founder, The Banyan Branch",
    },
    next: "/learnshackedu",
  },

  learnshackedu: {
    title: "LearnShackEDU",
    subtitle: "Educational Platform Website",
    thumbnail: "/learnshackedu-logo.png",
    iframe: "https://www.learnshackedu.com/",
    timeline: "01-03-2025- current",
    role: "Freelance",
    overview:
      "Developed an educational platform website offering structured learning experiences and easy content management.",
    impact: [
      "Built a responsive, content-driven platform tailored for educational delivery.",
      "Optimized the user experience to support student engagement and content scalability.",
    ],
    technologies: ["React", "Node.js", "MySQL", "Express", "AWS"],
    metrics: [
      { label: "Content Upload Speed", value: "+70%" },
      { label: "Student Engagement", value: "+50%" },
      { label: "Platform Uptime", value: "99.9%" },
    ],
    testimonial: {
      quote:
        "The platform has significantly enhanced our ability to deliver quality education at scale.",
      author: "Aman Gupta",
      position: "Founder, LearnShackEDU",
    },
    next: "/arigato",
  },

  arigato: {
    title: "Arigato Events",
    subtitle: "Event Management Website",
    thumbnail: "/arigato.png",
    iframe: "https://www.arigatoevents.com/",
    timeline: "01-06-2025 - 04-06-2025",
    role: "Freelance",
    overview:
      "Designed and built a visually appealing event management website with features for showcasing events, booking, and lead capture.",
    impact: [
      "Created a high-end aesthetic to reflect brand elegance and trust.",
      "Implemented booking and contact flows for lead generation.",
    ],
    technologies: ["React", "Node.js", "MySQL", "Express", "AWS"],
    metrics: [
      { label: "Leads Captured", value: "+300%" },
      { label: "Page Load Time", value: "<1.2s" },
      { label: "Bounce Rate Reduction", value: "-40%" },
    ],
    testimonial: {
      quote:
        "This website is exactly what we envisioned—modern, elegant, and conversion-optimized.",
      author: "Designs by Abhishek",
      position: "Creative Lead, Arigato Events",
    },
    next: "/unifynd",
  },
};

const WorkDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [workItem, setWorkItem] = useState(null);
  const [previewMode, setPreviewMode] = useState("website");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (id && id in workData) {
      setWorkItem(workData[id]);
      setPreviewMode(workData[id].iframe ? "website" : "images");
      setIsLoading(false);
    }

    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading || !workItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-48 bg-muted rounded-md"></div>
          <div className="h-6 w-64 bg-muted rounded-md"></div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % workItem?.images?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + workItem?.images?.length) % workItem?.images?.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 lg:top-4 left-2 p-2 z-50"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/80 dark:bg-dark/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="text-light dark:text-white w-5 h-5" />
        </Button>
      </motion.div>

      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-40">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{
            width: `${
              ((currentImageIndex + 1) / (workItem?.images?.length || 1)) * 100
            }%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <section className="relative pt-24 md:pt-32 overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-bold text-light dark:text-dark ">
                {workItem.title}
              </h1>
              <p className="text-xl md:text-2xl text-light/70 dark:text-dark/70">
                {workItem.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-light/70 dark:text-dark/70" />
                <span className="text-sm text-light dark:text-dark font-medium">
                  {workItem.timeline}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm">
                <Briefcase className="w-4 h-4 text-light/70 dark:text-dark/70" />
                <span className="text-sm text-light dark:text-dark font-medium">
                  {workItem.role}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {workItem.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs px-3 py-1.5 font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[80%] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[80%] bg-secondary/5 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="pt-12 md:pt-16">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="overview" className="max-w-[70dvw] mx-auto mb-16">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger
                  value="overview"
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="preview"
                  onClick={() => setActiveTab("preview")}
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="impact"
                  onClick={() => setActiveTab("impact")}
                >
                  Impact
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-4">
              <Card className="overflow-hidden border-none bg-background/60 backdrop-blur-sm shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative aspect-square overflow-hidden lg:w-1/3">
                      <img
                        src={workItem.thumbnail || "/placeholder.svg"}
                        alt={`${workItem.title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center items-center lg:w-2/3">
                      <h2 className="text-2xl font-bold mb-6 text-light dark:text-dark">
                        Project Overview
                      </h2>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1"></div>
                          <p className="text-light/70 dark:text-dark/70">
                            {workItem.overview}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {workItem.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-secondary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-5xl text-light dark:text-dark mb-6">
                      "
                    </div>
                    <p className="text-lg md:text-xl italic text-light dark:text-dark mb-8">
                      {workItem.testimonial.quote}
                    </p>
                    <div className="flex flex-col items-center">
                      <p className="font-semibold text-light dark:text-dark">
                        {workItem.testimonial.author}
                      </p>
                      <p className="text-sm text-light/70 dark:text-dark/70">
                        {workItem.testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </TabsContent>

            <TabsContent value="preview">
              {id === "tbb" ? (
                <div>
                  <div className="flex justify-center mb-6">
                    <div className="flex bg-background/60 backdrop-blur-sm rounded-lg p-1 shadow-md">
                      <button
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                          previewMode === "website"
                            ? "bg-primary text-light"
                            : "text-black/50 dark:text-dark/50 hover:text-black dark:hover:text-dark"
                        }`}
                        onClick={() => setPreviewMode("website")}
                      >
                        Website
                      </button>
                      <button
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                          previewMode === "images"
                            ? "bg-primary text-light"
                            : "text-black/50 dark:text-dark/50 hover:text-black dark:hover:text-dark"
                        }`}
                        onClick={() => setPreviewMode("images")}
                      >
                        Dashboard
                      </button>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl bg-background/60 backdrop-blur-sm shadow-xl">
                    {previewMode === "website" ? (
                      <div className="w-full overflow-hidden">
                        <iframe
                          src={workItem.iframe}
                          className="w-full aspect-[16/9] border-0"
                          style={{ minHeight: "400px" }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <>
                        <div className="aspect-[16/9] relative overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentImageIndex}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="absolute inset-0"
                            >
                              <img
                                src={
                                  workItem.images[currentImageIndex] ||
                                  "/placeholder.svg"
                                }
                                alt={`${workItem.title} screenshot ${
                                  currentImageIndex + 1
                                }`}
                                className="w-full h-full object-contain"
                              />
                            </motion.div>
                          </AnimatePresence>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background/90 z-10"
                            onClick={prevImage}
                          >
                            <ChevronLeft className="h-5 w-5" />
                            <span className="sr-only">Previous image</span>
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background/90 z-10"
                            onClick={nextImage}
                          >
                            <ChevronRight className="h-5 w-5" />
                            <span className="sr-only">Next image</span>
                          </Button>

                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium z-10">
                            {currentImageIndex + 1} / {workItem?.images?.length}
                          </div>
                        </div>

                        <div className="p-4 flex justify-center gap-2 overflow-x-auto">
                          {workItem.images.map((img, idx) => (
                            <button
                              key={idx}
                              className={`relative w-16 h-16 rounded-md overflow-hidden transition-all flex-shrink-0 ${
                                currentImageIndex === idx
                                  ? "ring-2 ring-primary ring-offset-2"
                                  : "opacity-70 hover:opacity-100"
                              }`}
                              onClick={() => setCurrentImageIndex(idx)}
                            >
                              <img
                                src={img || "/placeholder.svg"}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-xl bg-background/60 backdrop-blur-sm shadow-xl">
                  {workItem.iframe ? (
                    <div className="w-full overflow-hidden">
                      <iframe
                        src={workItem.iframe}
                        className="w-full aspect-[16/9] border-0"
                        style={{ minHeight: "400px" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <>
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                          >
                            <img
                              src={
                                workItem.images[currentImageIndex] ||
                                "/placeholder.svg"
                              }
                              alt={`${workItem.title} screenshot ${
                                currentImageIndex + 1
                              }`}
                              className="w-full h-full object-contain"
                            />
                          </motion.div>
                        </AnimatePresence>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background/90 z-10"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="h-5 w-5" />
                          <span className="sr-only">Previous image</span>
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background/90 z-10"
                          onClick={nextImage}
                        >
                          <ChevronRight className="h-5 w-5" />
                          <span className="sr-only">Next image</span>
                        </Button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium z-10">
                          {currentImageIndex + 1} / {workItem?.images?.length}
                        </div>
                      </div>

                      <div className="p-4 flex justify-center gap-2 overflow-x-auto">
                        {workItem.images.map((img, idx) => (
                          <button
                            key={idx}
                            className={`relative w-16 h-16 rounded-md overflow-hidden transition-all flex-shrink-0 ${
                              currentImageIndex === idx
                                ? "ring-2 ring-primary ring-offset-2"
                                : "opacity-70 hover:opacity-100"
                            }`}
                            onClick={() => setCurrentImageIndex(idx)}
                          >
                            <img
                              src={img || "/placeholder.svg"}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="impact">
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {workItem.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-background/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50"
                    >
                      <h3 className="text-sm font-medium text-light/70 dark:text-dark/70 mb-2">
                        {metric.label}
                      </h3>
                      <p className="text-4xl font-bold text-light dark:text-dark">
                        {metric.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <Card className="overflow-hidden border-none bg-background/60 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="max-w-3xl mx-auto">
                      <h2 className="text-2xl font-bold mb-6 text-center text-light dark:text-dark">
                        Project Impact
                      </h2>
                      <div className="space-y-8">
                        {workItem.impact.map((desc, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-primary/20"
                          >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <h3 className="font-semibold mb-2 text-light dark:text-dark">
                              Key Achievement {idx + 1}
                            </h3>
                            <p className="text-light/70 dark:text-dark/70">
                              {desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container px-4 mx-auto">
          <Separator className="mb-16" />
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-sm text-light/70 dark:text-dark/70 mb-2">
                  Continue Exploring
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-light dark:text-dark">
                  Ready to see more projects?
                </h2>
              </div>
              <Button
                size="lg"
                className="group bg-light dark:text-dark dark:bg-dark dark:text-light"
                onClick={() => navigate(workItem.next)}
              >
                Next project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkDetails;
