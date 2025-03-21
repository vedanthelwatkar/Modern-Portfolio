import { useState } from "react"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { FloatingDock } from "@/components/ui/floating-dock"
import { FileText, GithubIcon, Linkedin, MailIcon, MessageSquare, PhoneCall, User } from "lucide-react"
import AvailableIndicator from "@/components/AvailableIndicator"
import { ArrowRight } from "lucide-react"
import ContactForm from "@/components/ContactForm"

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
    href: "https://www.github.com/vedanthelwatkar",
  },
]

const Contact = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    setTimeout(() => setIsDownloading(false), 2000)
  }

  const items = [
    {
      title: "Get In Touch",
      description: "Fill out the form and I'll get back to you as soon as possible.",
      header: (
        <div className="space-y-4">
          <ContactForm />
          <div className="mt-4 border-t border-neutral-200 dark:border-neutral-700 pt-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <PhoneCall className="h-5 w-5 text-light dark:text-dark" />
              <a
                href="tel:+919769785721"
                className="text-sm font-medium text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors"
              >
                +91 9769785721
              </a>
            </div>
          </div>
        </div>
      ),
      icon: <MessageSquare className="h-4 w-4 text-light dark:text-dark" />,
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "About Me",
      description: "A brief introduction and link to my full profile.",
      header: (
        <div className="p-4 space-y-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            I'm a passionate full-stack developer with over 2 years of experience in creating web applications. My
            expertise includes React, Next.js, Node.js, and Python.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
            <a
              href="/about"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            >
              Learn more about my skills and experience
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href="/Vedant-Helwatkar-Resume-2025.pdf"
              download="Vedant-Helwatkar-Resume-2025.pdf"
              onClick={handleDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md bg-light dark:bg-dark text-dark dark:text-black hover:bg-green-700 transition-colors"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      ),
      icon: <User className="h-4 w-4 text-light dark:text-dark" />,
      className: "md:col-span-2",
    },
  ]

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
              <p className="font-title">Passionate Developer & Problem Solver</p>
              <p className="dev-font">{`/>`}</p>
            </div>
          </motion.span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="title-desc leading-relaxed tracking-tight text-light text-center dark:text-dark text-base sm:text-lg max-w-2xl"
        >
          Have a project in mind or want to discuss potential opportunities? I'm currently available for freelance work
          and interesting collaborations.
        </motion.p>
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
  )
}

export default Contact

