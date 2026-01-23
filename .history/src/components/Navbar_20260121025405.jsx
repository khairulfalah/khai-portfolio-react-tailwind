import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">

        {/* LOGO — TAMPIL DI MOBILE & DESKTOP */}
        <a
          href="#hero"
          className="text-xl size-10 font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Khai</span> Portfolio
          </span>
        </a>

        {/* NAV ITEMS — HANYA DESKTOP */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};
