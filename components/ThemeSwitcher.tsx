"use client";

import { IconBrightnessUp, IconMoonStars } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
      <button onClick={toggleTheme} className="border rounded-md p-1">
        {theme === 'light' ? <IconMoonStars/> : <IconBrightnessUp/>}
      </button>
  );
};
  