import {  AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overlow-x-hidden">
      {/*Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground/>
      {/* Navbar*/}
      <Navbar/>
      {/*Main Content */}
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <ContactSection/>
      {/*Footer */}
      <Footer/>
    </div>
  );
};
