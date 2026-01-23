
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "ReactNative", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "FireBase", level: 70, category: "backend" },
  { name: "Mysql", level: 80, category: "backend" },
  { name: "Laravel", level: 70, category: "backend" },
  { name: "Java", level: 80, category: "backend" },
  { name: "SpringBoot", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 75, category: "tools" },
];


export const SkillSection = () => {
    return ( 
    <section 
    id="skills"
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
        </h2>
        </div>

    </section>
    );
};

