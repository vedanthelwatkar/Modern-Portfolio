import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <div className="container mx-auto p-4">
        <ThemeToggle />
        <h1 className="text-4xl font-bold mt-8 text-black dark:text-white">
          Hello Tailwind + Dark Mode!
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          This text will adapt to dark mode automatically.
        </p>
      </div>
    </div>
  );
}

export default App;
