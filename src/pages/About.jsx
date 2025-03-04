import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Award,
  Baseline,
  BookOpen,
  BrainCircuit,
  Code,
  Contact,
  Database,
  GraduationCap,
  HardDrive,
  Layers,
  LineChart,
  Pyramid,
  Rocket,
  Server,
  ServerIcon,
  Snowflake,
  Sparkles,
  Terminal,
  Trophy,
  Worm,
  GitBranch,
  Globe,
  Cpu,
  Monitor,
  BatteryCharging,
  PanelRight,
  Book,
  Dumbbell,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AvailableIndicator from "@/components/AvailableIndicator";
import AnimatedButton from "@/components/ui/animated-button";

const SkillCard = ({ icon, title, level, color }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 h-full">
      {icon}
      <h3 className="mt-2 text-sm font-semibold text-light dark:text-neutral-300">
        {title}
      </h3>
    </div>
  );
};

const TimelineItem = ({ year, title, description, icon }) => {
  return (
    <div className="relative pl-8 pb-4 group">
      <div className="absolute left-2.5 top-0 h-full w-px bg-neutral-300 dark:bg-neutral-700 group-last:bg-transparent"></div>
      <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-xs text-neutral-500 dark:text-neutral-400">
        {year}
      </div>
      <h3 className="mt-1 text-sm font-semibold text-light dark:text-neutral-300">
        {title}
      </h3>
      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

const ExpertiseItem = ({ icon, title, description }) => {
  return (
    <div className="p-3 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h3 className="text-sm font-medium text-light dark:text-neutral-300">
          {title}
        </h3>
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

const ProjectItem = ({ icon, title, tech, description }) => {
  return (
    <div className="flex items-start gap-2 mb-3">
      {icon}
      <div>
        <h3 className="text-sm font-semibold text-light dark:text-neutral-300">
          {title}
        </h3>
        <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {tech}
        </p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();

  const skills = [
    {
      title: "Frontend Development",
      description:
        "Specializing in React.js, Next.js, and modern JavaScript frameworks.",
      header: (
        <div className="grid grid-cols-2 gap-2 p-2">
          <SkillCard
            icon={<Code className="h-6 w-6 text-blue-500" />}
            title="React.js"
            color="bg-blue-500"
          />
          <SkillCard
            icon={<Layers className="h-6 w-6 text-purple-500" />}
            title="Next.js"
            color="bg-purple-500"
          />
          <SkillCard
            icon={<Sparkles className="h-6 w-6 text-amber-500" />}
            title="JavaScript"
            color="bg-amber-500"
          />
          <SkillCard
            icon={<Terminal className="h-6 w-6 text-green-500" />}
            title="TypeScript"
            color="bg-green-500"
          />
          <SkillCard
            icon={<Pyramid className="h-6 w-6 text-green-500" />}
            title="Next.js"
            color="bg-green-500"
          />
          <SkillCard
            icon={<Baseline className="h-6 w-6 text-green-500" />}
            title="Angular"
            color="bg-green-500"
          />
        </div>
      ),
      icon: <Code className="h-4 w-4 text-light dark:text-dark" />,
    },
    {
      title: "Backend Development",
      description:
        "Building robust server-side applications with Python frameworks and Node.js.",
      header: (
        <div className="grid grid-cols-2 gap-2 p-2">
          <SkillCard
            icon={<Worm className="h-6 w-6 text-yellow-500" />}
            title="Python"
            color="bg-yellow-500"
          />
          <SkillCard
            icon={<Server className="h-6 w-6 text-green-500" />}
            title="Django"
            color="bg-green-500"
          />
          <SkillCard
            icon={<Terminal className="h-6 w-6 text-blue-500" />}
            title="Flask"
            color="bg-blue-500"
          />
          <SkillCard
            icon={<Database className="h-6 w-6 text-orange-500" />}
            title="MySQL"
            color="bg-orange-500"
          />
          <SkillCard
            icon={<Server className="h-6 w-6 text-yellow-500" />}
            title="Node.js"
            color="bg-yellow-500"
          />

          <SkillCard
            icon={<HardDrive className="h-6 w-6 text-yellow-500" />}
            title="AWS"
            color="bg-yellow-500"
          />
        </div>
      ),
      icon: <Server className="h-4 w-4 text-light dark:text-dark" />,
    },
    {
      title: "Professional Journey",
      description:
        "Over 2 years of experience building web applications and digital solutions.",
      header: (
        <div className="p-2">
          <div className="space-y-0">
            <TimelineItem
              year="2025 - Present"
              title="Full Stack Developer"
              description="Developed end-to-end solutions using React, Django and MySQL"
              icon={<Rocket className="h-2.5 w-2.5 text-blue-500" />}
            />
            <TimelineItem
              year="2024 - 2025"
              title="Frontend Developer"
              description="Built responsive web applications with React.js/Next.js"
              icon={<Code className="h-2.5 w-2.5 text-green-500" />}
            />
            <TimelineItem
              year="2023-2024"
              title="Junior Web Developer"
              description="Started career with HTML, CSS, JavaScript, Django and Python"
              icon={<GraduationCap className="h-2.5 w-2.5 text-purple-500" />}
            />
          </div>
        </div>
      ),
      icon: <LineChart className="h-4 w-4 text-light dark:text-dark" />,
      className: "md:col-span-2",
    },
    {
      title: "Notable Projects",
      description:
        "Showcase of key projects demonstrating technical expertise and problem-solving abilities.",
      header: (
        <div className="p-3">
          <div className="space-y-3">
            <ProjectItem
              icon={
                <Book className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              }
              title="DocGPT"
              tech="React, Django, MongoDB, Firebase"
              description="An AI-powered document scanner that answers questions with 90% accuracy."
            />
            <ProjectItem
              icon={
                <Dumbbell className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              }
              title="Sculpt Fitness"
              tech="React.js, JavaScript, Tailwind CSS"
              description="A fitness app for booking training sessions and packages."
            />
            <ProjectItem
              icon={
                <MessageCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              }
              title="Chat App"
              tech="React.js, Django REST, AWS, WebSockets"
              description="A real-time chat application with seamless synchronization."
            />
          </div>
        </div>
      ),
      icon: <GitBranch className="h-4 w-4 text-light dark:text-dark" />,
    },
    {
      title: "Areas of Expertise",
      description:
        "Specialized knowledge and experience in key technical domains.",
      header: (
        <div className="grid grid-cols-2 gap-1 p-2">
          <ExpertiseItem
            icon={<Sparkles className="h-4 w-4 text-blue-500" />}
            title="UI/UX Development"
            description="Creating intuitive user experiences"
          />
          <ExpertiseItem
            icon={<Layers className="h-4 w-4 text-green-500" />}
            title="API Integration"
            description="Connecting with third-party services"
          />
          <ExpertiseItem
            icon={<Rocket className="h-4 w-4 text-purple-500" />}
            title="Performance Optimization"
            description="Enhancing application speed"
          />
          <ExpertiseItem
            icon={<BrainCircuit className="h-4 w-4 text-amber-500" />}
            title="State Management"
            description="Robust data flow architectures"
          />
          <ExpertiseItem
            icon={<Layers className="h-4 w-4 text-red-500" />}
            title="Responsive Design"
            description="Apps that work on all devices"
          />
          <ExpertiseItem
            icon={<Terminal className="h-4 w-4 text-teal-500" />}
            title="Testing & QA"
            description="Ensuring application reliability"
          />
        </div>
      ),
      icon: <BrainCircuit className="h-4 w-4 text-light dark:text-dark" />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center pb-20 px-4 sm:px-0">
      <div className="mt-24 mb-8  flex-col title relative flex gap-5 items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <AvailableIndicator />
        </div>
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-text flex items-center justify-center font-title mx-2 sm:mx-5 text-light text-4xl sm:text-6xl md:text-7xl font-semibold dark:text-dark"
          >
            About Me
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="title-text items-center justify-center mx-2 sm:mx-5 text-light flex text-xl sm:text-2xl md:text-3xl font-medium dark:text-dark"
          >
            <div className="flex">
              <p className="dev-font">{`<`}</p>
              <p className="font-title">
                Passionate Developer & Problem Solver
              </p>
              <p className="dev-font">{`/>`}</p>
            </div>
          </motion.span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 title-desc leading-relaxed tracking-tight text-light text-center dark:text-dark text-base sm:text-lg max-w-2xl"
        >
          With over 2 years of experience in web development, I specialize in
          creating elegant solutions to complex problems. My expertise spans
          frontend and backend technologies, with a focus on creating
          exceptional user experiences.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedButton
            text="Get In Touch"
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
        <BentoGrid className="gap-4 max-w-6xl" cols={2}>
          {skills.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className || ""}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
};

export default About;
