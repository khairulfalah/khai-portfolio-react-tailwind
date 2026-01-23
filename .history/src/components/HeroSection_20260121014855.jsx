import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10">

        {/* HEADER CV (PHOTO + NAME) */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-primary">
            <img
              src="/profile.jpg"
              alt="Khairul Falah"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Khairul <span className="text-primary">Falah</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Full Stack Web & Mobile Developer
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10">
          Full Stack Developer with a background in Information Technology.
          Experienced in building scalable web and mobile applications using
          JavaScript, React, React Native, Java, and AWS with strong networking fundamentals.
        </p>

        {/* ACTION BUTTONS (CENTERED) */}
        <div className="flex justify-center gap-4">
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

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
      </div>
    </section>
  );
};
