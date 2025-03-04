import { Route, Routes } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import { CustomTabs } from "./components/ui/custom-tabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WorkDetails from "./components/WorkDetails";

const App = () => {
  const tabs = [
    { id: "work", value: "work", title: "Work", path: "/" },
    { id: "about", value: "about", title: "About", path: "/about" },
    { id: "contact", value: "contact", title: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-white dark:bg-black pb-10">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-20">
        <CustomTabs tabs={tabs} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/:id" element={<WorkDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <div className="fixed bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
