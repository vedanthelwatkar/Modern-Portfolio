import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-200">
      <div className="flex flex-col w-full min-h-screen p-4 items-center justify-center">
        <ThemeToggle />
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Vedant Helwatkar
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          This text will adapt to dark mode automatically.
        </p>
      </div>
    </div>
  );
}

export default App;
