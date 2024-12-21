import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi2";

interface IProps {
    className?:  string;
}
const ThemeMode: FC<IProps> = ({className}) => {
  const [darkMode, setDarkMode] = useState<"light" | "dark">("light");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    // Trigger animation
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setDarkMode((prev) => (prev === "light" ? "dark" : "light"));

      if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }
    }, 500); // Match the animation duration
  };

  return (
    <Button
      className={`absolute flex items-center justify-center w-12 h-12 overflow-hidden rounded-full bg-${
        darkMode === "light" ? "gray-200" : "gray-800"
      } ${className}`}
      onClick={handleToggle}
    >
      {/* Sun Icon */}
      <div
        className={`absolute transition-transform duration-500 ${
          isAnimating
            ? darkMode === "light"
              ? "translate-x-6"
              : "-translate-x-6"
            : "translate-x-0"
        }`}
      >
        <HiSun
          className={`w-6 h-6 ${
            darkMode === "light" ? "text-yellow-400" : "text-gray-500"
          }`}
        />
      </div>

      {/* Moon Icon */}
      <div
        className={`absolute transition-transform duration-500 ${
          isAnimating
            ? darkMode === "light"
              ? "-translate-x-6"
              : "translate-x-6"
            : "translate-x-0"
        }`}
      >
        <HiMoon
          className={`w-6 h-6 ${
            darkMode === "light" ? "text-gray-500" : "text-blue-400"
          }`}
        />
      </div>
    </Button>
  );
};

export default ThemeMode;
