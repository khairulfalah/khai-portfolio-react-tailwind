import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-muted-foreground">
            <a href="#" className="hover:text-primary transition">
              <Mail size={18} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <Github size={18} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <Linkedin size={18} />
            </a>
          </div>

          {/* NAME */}
          <h1 className="text-4xl md:text-5xl font-bold">
            Khairul Falah <span className="ml-1">👋</span>
          </h1>

          {/* ROLE */}
          <p className="text-lg font-medium text-muted-foreground">
            Full Stack Developer
          </p>

          {/* DESCRIPTION */}
          <p className="text-base text-muted-foreground max-w-md">
            I’m a Full Stack Developer with a background in Information Technology.
            I build scalable web and mobile applications using JavaScript, React,
            React Native, Java, and AWS.
          </p>

          {/* BUTTON */}
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
            Say Hello
            <ArrowDown size={16} />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-full overflow-hidden border shadow-lg">
            <img
              src="/profile.jpg"
              alt="Khairul Falah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground flex items-center gap-2">
        Scroll down
        <ArrowDown size={14} />
      </div>
    </section>
  );
};
