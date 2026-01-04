const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate front-end developer and product designer with a
              strong foundation in UX/UI design, data analysis, and modern web
              development. I love creating digital experiences that are not only
              visually appealing but also intuitive, accessible, and
              performance-optimized.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My approach combines user-centered design thinking with
              data-driven insights to build products that solve real problems.
              Whether it's crafting pixel-perfect interfaces, analyzing user
              behavior, or writing clean, maintainable code, I'm committed to
              delivering excellence at every step.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest design
              trends, learning new technologies, or contributing to open-source
              projects. I believe in continuous learning and staying curious
              about the ever-evolving world of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

