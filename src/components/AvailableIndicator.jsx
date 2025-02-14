import { motion } from "framer-motion";

const AvailableIndicator = () => {
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        className="w-3 h-3 rounded-full bg-green-500"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="text-black dark:text-white text-sm font-medium">
        Available for projects
      </span>
    </div>
  );
};

export default AvailableIndicator;
