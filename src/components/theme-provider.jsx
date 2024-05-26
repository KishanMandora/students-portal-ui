import { useEffect } from "react";
import { cn } from "../lib/utils";

export function ThemeWrapper({ defaultTheme, children, className }) {
  const config = {
    style: "default",
    theme: "slate",
    radius: 0.5,
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add("dark");
  });

  return (
    <div
      className={cn(
        `theme-${defaultTheme || config.theme}`,
        "w-full",
        className
      )}
      style={{
        "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
      }}
    >
      {children}
    </div>
  );
}
