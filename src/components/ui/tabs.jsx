import { useState, useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.replace(/\/$/, ""); // Remove trailing slash
  const containerRef = useRef(null);

  const [active, setActive] = useState(
    propTabs.find((tab) => currentPath.includes(tab.value)) || propTabs[0]
  );

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const matchedTab = propTabs.find((tab) => currentPath.includes(tab.value));
    if (matchedTab) {
      setActive(matchedTab);
    }
  }, [currentPath, propTabs]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        `flex flex-row items-center justify-start [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full sticky top-0 z-10 p-2 rounded-[100px] gap-3 ${
          isScrolled && "shadow-sm"
        }`,
        containerClassName
      )}
      style={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.7)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {propTabs.map((tab) => (
        <button
          key={tab.title}
          onClick={() => {
            setActive(tab);
            navigate(tab.path);
          }}
          className={cn("relative px-4 py-1 rounded-full", tabClassName)}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {active.value === tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className={cn(
                "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                activeTabClassName
              )}
            />
          )}

          <span className="relative flex text-light dark:text-dark">
            {tab.title}
          </span>
        </button>
      ))}
    </motion.div>
  );
};
