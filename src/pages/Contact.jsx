import { useState } from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  AtSign,
  Briefcase,
  Check,
  GithubIcon,
  Linkedin,
  MailIcon,
  MessageSquare,
  PhoneCall,
  Send,
  User,
} from "lucide-react";
import AvailableIndicator from "@/components/AvailableIndicator";
import AnimatedButton from "@/components/ui/animated-button";
import { ArrowRight } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const dockItems = [
  {
    title: "Contact",
    icon: <PhoneCall className="text-light dark:text-dark" />,
    href: "tel:9769785721",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className="text-light dark:text-dark" />,
    href: "https://www.linkedin.com/in/vedanthelwatkar",
  },
  {
    title: "Gmail",
    icon: <MailIcon className="text-light dark:text-dark" />,
    href: "mailto:vedanthelwatkar@gmail.com",
  },
  {
    title: "Github",
    icon: <GithubIcon className="text-light dark:text-dark" />,
    href: "https://www.github.com/vedanthelwatkar/Projects",
  },
];

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 p-2">
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-xs font-medium text-light dark:text-dark"
        >
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-4 w-4 text-neutral-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={cn(
              "w-full pl-9 pr-3 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 border rounded-lg focus:ring-1 focus:outline-none transition-colors",
              errors.name
                ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-800"
                : "border-neutral-300 dark:border-neutral-700 focus:ring-blue-200 dark:focus:ring-blue-800 focus:border-blue-500 dark:focus:border-blue-500"
            )}
            placeholder="Your name"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-xs font-medium text-light dark:text-dark"
        >
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AtSign className="h-4 w-4 text-neutral-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={cn(
              "w-full pl-9 pr-3 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 border rounded-lg focus:ring-1 focus:outline-none transition-colors",
              errors.email
                ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-800"
                : "border-neutral-300 dark:border-neutral-700 focus:ring-blue-200 dark:focus:ring-blue-800 focus:border-blue-500 dark:focus:border-blue-500"
            )}
            placeholder="your.email@example.com"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="block text-xs font-medium text-light dark:text-dark"
        >
          Message
        </label>
        <div className="relative">
          <div className="absolute top-2.5 left-3 pointer-events-none">
            <MessageSquare className="h-4 w-4 text-neutral-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows="4"
            className={cn(
              "w-full pl-9 pr-3 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 border rounded-lg focus:ring-1 focus:outline-none transition-colors",
              errors.message
                ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-800"
                : "border-neutral-300 dark:border-neutral-700 focus:ring-blue-200 dark:focus:ring-blue-800 focus:border-blue-500 dark:focus:border-blue-500"
            )}
            placeholder="Your message..."
          />
        </div>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all",
          isSubmitted
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        )}
      >
        {isSubmitting ? (
          <>
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : isSubmitted ? (
          <>
            <Check className="h-4 w-4" />
            <span>Message Sent!</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

const Contact = () => {
  const items = [
    {
      title: "Get In Touch",
      description:
        "Fill out the form and I'll get back to you as soon as possible.",
      header: <ContactForm />,
      icon: <MessageSquare className="h-4 w-4 text-light dark:text-dark" />,
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "About Me",
      description: "A brief introduction and link to my full profile.",
      header: (
        <div className="p-4 space-y-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            I'm a passionate full-stack developer with over 2 years of
            experience in creating web applications. My expertise includes
            React, Next.js, Node.js, and Python.
          </p>
          <a
            href="/about"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          >
            Learn more about my skills and experience
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      ),
      icon: <User className="h-4 w-4 text-light dark:text-dark" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center pb-20 px-4 sm:px-0">
      <div className="mt-24 mb-8 flex-col title relative flex gap-5 items-center justify-center">
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
            Contact Me
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
          Have a project in mind or want to discuss potential opportunities? I'm
          currently available for freelance work and interesting collaborations.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedButton
            text="View My Work"
            path="/work/unifynd"
            icon={<Briefcase className="h-4 w-4" />}
          />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FloatingDock items={dockItems} />
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <BentoGrid className="gap-4 max-w-6xl" cols={2}>
          {items.map((item, i) => (
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

export default Contact;
