const skillCategories = [
  {
    title: "UX/UI Design",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Figma",
      "Adobe XD",
    ],
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Product Development",
    skills: [
      "Product Strategy",
      "Agile Methodology",
      "User Stories",
      "MVP Development",
      "Feature Planning",
      "Stakeholder Management",
    ],
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Data Analysis",
    skills: [
      "Data Visualization",
      "SQL",
      "Python",
      "Excel/Google Sheets",
      "A/B Testing",
      "Metrics & KPIs",
    ],
    color: "from-green-500 to-green-700",
  },
  {
    title: "Front-End Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
    ],
    color: "from-orange-500 to-orange-700",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center`}
              >
                <span className="text-white font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 dark:text-gray-400 flex items-center"
                  >
                    <span className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

