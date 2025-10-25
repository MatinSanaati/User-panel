import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold dark:text-white">
          پنل کاربری
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
