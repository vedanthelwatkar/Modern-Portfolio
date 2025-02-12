const GradientBackground = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <div
        className="fixed inset-0 bg-[length:300%_300%] animate-gradient bg-gradient-to-br transition-colors duration-500
            from-[#e8f6df] via-[#e0cebc] to-[#c5dded] 
            dark:from-[#325b2f] dark:via-[#483551] dark:to-[#476171]"
      ></div>
      <div className="relative h-[100vh]">{children}</div>
    </div>
  );
};

export default GradientBackground;
