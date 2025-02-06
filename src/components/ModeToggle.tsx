"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ModoToggle = () => {
  const {theme, setTheme} = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? 
        <MoonIcon className="w-5 h-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"/> 
        : <SunIcon className="w-5 h-5 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100"/>}
    </Button>
  )
}

export default ModoToggle
