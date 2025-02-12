import { useState } from "react";
import GradientBackground from "./components/GradientBackground";
import ThemeToggle from "./components/ThemeToggle";
import { Tabs } from "./components/ui/tabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  const [page, setPage] = useState(<Home />);

  const tabs = [
    {
      id: "work",
      value: "work",
      title: "Work",
      onClick: () => setPage(<Home />),
    },
    {
      id: "about",
      value: "about",
      title: "About",
      onClick: () => setPage(<About />),
    },
    {
      id: "contact",
      value: "contact",
      title: "Contact",
      onClick: () => setPage(<Contact />),
    },
  ];

  return (
    <GradientBackground>
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2">
        <Tabs tabs={tabs} />
      </div>
      {page}

      {/* Theme Toggle Button */}
      <div className="fixed bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg">
        <ThemeToggle />
      </div>
    </GradientBackground>
  );
};

export default App;
