
const projects = [
    {
        id: 1,
        title: "Mobile App SportLink",
        description: "A beautiful mobile App using React native and Firebase.",
        image: "/projects/project1.jpg",
        tags: ["ReactNative", "FireBase", "MidTrans"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Website E-Commerce YoungCoffe",
        description: "A beautiful Website E-Commerce App using Laravel and Mysql.",
        image: "/projects/project2.jpg",
        tags: ["Laravel", "Mysql", "MidTrans"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 1,
        title: "Mobile App ShiftHealth",
        description: "A beautiful mobile App using Gradle and Java.",
        image: "/projects/project3.jpg",
        tags: ["Gradle", "Java"],
        demoUrl: "#",
        githubUrl: "#",
    },
]
export const ProjectSection = () => {
    return (
        <section id="project" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                        key={key}
                        className="group bg-card rounded-lg overlow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overlow-hidden">
                                <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};