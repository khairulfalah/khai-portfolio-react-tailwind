import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT — TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I’m{" "}
            <span className="text-primary">Khairul Falah</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
            Full Stack Web & Mobile Developer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            Full Stack Developer with a background in Information Technology.
            Experienced in building scalable web and mobile applications using
            JavaScript, React, React Native, Java, and AWS with strong networking fundamentals.
          </p>

          <div className="flex gap-4 pt-2">
            <a href="#project" className="cosmic-button">
              View Projects
            </a>
            <a
              href="/cv/Khairul-Falah-CV.pdf"
              className="border border-primary px-6 py-3 rounded-full text-primary hover:bg-primary hover:text-white transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img
              src="/profile.jpg"
              alt="Khairul Falah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
      </div>
    </section>
  );
};
