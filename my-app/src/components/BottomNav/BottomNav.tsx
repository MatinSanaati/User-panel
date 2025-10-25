// src/components/BottomNav.tsx
import { NavLink } from "react-router-dom";
import { HomeIcon, UserIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "خانه", path: "/", icon: HomeIcon },
  { name: "پروفایل", path: "/profile", icon: UserIcon },
  { name: "تنظیمات", path: "/settings", icon: Cog6ToothIcon },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around p-2 md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-sm ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-500 dark:text-gray-400"
              }`
            }
          >
            <Icon className="h-6 w-6" />
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
