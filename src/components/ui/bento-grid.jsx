import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children, cols }) => {
  return (
    <div
      className={cn(
        `mx-5 grid grid-cols-1 md:grid-cols-${cols} gap-4 max-w-7xl`,
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 cursor-pointer",
        "bg-white",
        "dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#222222] dark:to-[#282828]",
        "border border-zinc-200 dark:border-zinc-800",
        "dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
        className
      )}
      onClick={onClick}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-light text-xs dark:text-dark">
          {description}
        </div>
      </div>
    </div>
  );
};
