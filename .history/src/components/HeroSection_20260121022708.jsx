import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10">
        
        {/* GRID WRAPPER */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div
              className="
                w-40 h-40
                sm:w-48 sm:h-48
                md:w-56 md:h-56
                rounded-full overflow-hidden
              "
            >
              <img
                src="/projects/profile.png"
                alt="Khairul Falah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I’m </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Khairul
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Falah
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
              I design and develop secure, scalable web and mobile applications.
              With a strong foundation in Information Technology, I work across the stack using
              JavaScript, React Native, Java, and AWS while applying solid network principles.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center md:justify-start">
              <a href="#project" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
