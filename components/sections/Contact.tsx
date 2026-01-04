const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about design and
            development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-colors shadow-lg"
              aria-label="Send me an email"
              tabIndex={0}
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors"
              aria-label="Visit my LinkedIn profile"
              tabIndex={0}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

