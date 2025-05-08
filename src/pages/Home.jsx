import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import tbb from "/tbb-website.png";
import unifynd from "/phoenix-website.png";
import vtube from "/vtube-website.png";
import tbbDashboard from "/tbb-dashboard-website.png";
import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Contact,
  Database,
  LayoutDashboard,
  Server,
  VideoIcon,
  Workflow,
  WrenchIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AvailableIndicator from "@/components/AvailableIndicator";
import AnimatedButton from "@/components/ui/animated-button";

const Skeleton = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-full sm:w-1/3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center"
      >
        <Code className="h-8 w-8 text-blue-500 mb-2" />
        <p className="text-sm text-center font-semibold text-light dark:text-neutral-300">
          Frontend
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-2">
          React.js
        </p>
      </motion.div>

      <motion.div className="h-full relative z-20 w-full sm:w-1/3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center">
        <Server className="h-8 w-8 text-green-500 mb-2" />
        <p className="text-sm text-center font-semibold text-light dark:text-neutral-300">
          Backend
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-2">
          Flask / Django
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-full sm:w-1/3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center"
      >
        <Database className="h-8 w-8 text-orange-500 mb-2" />
        <p className="text-sm text-center font-semibold text-light dark:text-neutral-300">
          Database
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-2">
          MySQL
        </p>
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Unifynd Technologies",
      description:
        "Developed frontend solutions for customer loyalty programs and rewards systems.",
      header: (
        <img
          src={unifynd}
          alt="Unifynd Website"
          className="h-[180px] w-full object-cover"
        />
      ),
      icon: <Workflow className="h-4 w-4 text-light dark:text-dark" />,
      onClick: () => navigate("unifynd"),
    },
    {
      title: "Arigato Events",
      description:
        "Responsive website for a premium event management agency with booking and gallery features.",
      header: (
        <img
          src="/arigatoevents.png"
          alt="Arigato Events"
          className="h-[180px] w-full object-cover"
        />
      ),
      icon: <LayoutDashboard className="h-4 w-4 text-light dark:text-dark" />,
      onClick: () => navigate("arigato"),
    },
    {
      title: "Therapy Services Website & Dashboard",
      description:
        "Comprehensive platform including a client-facing website and a management dashboard for appointments, analytics, and content.",
      header: (
        <div className="grid grid-cols-2 gap-2 h-[180px]">
          <img src={tbb} className="object-cover w-full h-full rounded" />
          <img
            src={tbbDashboard}
            className="object-cover w-full h-full rounded"
          />
        </div>
      ),
      icon: <Brain className="h-4 w-4 text-light dark:text-dark" />,
      onClick: () => navigate("tbb"),
    },
    {
      title: "Development Technology Stack",
      description:
        "Full-stack development environment utilizing React.js frontend, Flask/Django backend, and MySQL database.",
      header: <Skeleton />,
      icon: <WrenchIcon className="h-4 w-4 text-light dark:text-dark" />,
    },
    {
      title: "Learnshack Education Platform",
      description:
        "Edtech platform for online courses and skill-based learning built for scaling across devices.",
      header: (
        <img
          src="/learnshackedu.png"
          alt="Learnshack"
          className="h-[180px] w-full object-cover"
        />
      ),
      icon: <VideoIcon className="h-4 w-4 text-light dark:text-dark" />,
      onClick: () => navigate("learnshackedu"),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center pb-20 px-4 sm:px-0">
      <div className="mt-24 mb-12 flex-col title relative flex gap-5 items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <AvailableIndicator />
        </div>
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-text flex items-center justify-center font-title mx-2 sm:mx-5 text-light text-4xl sm:text-6xl md:text-8xl font-semibold dark:text-dark"
          >
            Hi. I'm Vedant.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="title-text items-center justify-center mx-2 sm:mx-5 text-light flex text-xl sm:text-2xl md:text-3xl font-medium dark:text-dark"
          >
            <p className="dev-font">{`<`}</p>
            <p className="font-title">A Developer</p>
            <p className="dev-font">{`/>`}</p>
          </motion.span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="title-desc leading-relaxed tracking-tight text-light text-center dark:text-dark text-base sm:text-lg"
        >
          I Build What Your Business Needs
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedButton
            text="Work With Me"
            path="/contact"
            icon={<Contact className="h-4 w-4" />}
          />
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <BentoGrid className="gap-4" cols={3}>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              onClick={item.onClick}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
};

export default Home;
