import { StarBackground } from "../components/StartBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overlow-x-hidden">
      {/*Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground/>
      {/* Navbar*/}

      {/*Main Content */}

      {/*Footer */}
    </div>
  );
};
