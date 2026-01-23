import { Code, Palette, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With a background in Information Technology, I develop modern web and
              mobile applications that prioritize performance, scalability, and
              security using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex problems,
              and I'm constantly learning new technologies to stay at the forefront
              of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover relative">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Code size={22} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Web Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating responsive websites and web applications using modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover relative">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Palette size={22} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover relative">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Project Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Leading projects from concept to completion using agile
                    methodologies.
                  </p>
                </div>
