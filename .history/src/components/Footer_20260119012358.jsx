import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Khairul Falah. All rights reserved.</p>

        <a href="#hero">
            <ArrowUp/>
        </a>
    </footer>
  );
};
