const experiences = [
  {
    years: "May 2026 — present",
    title: "Software Engineering Intern",
    place: "Anketa · Atlanta, GA",
    description:
      "Building NLP pipelines, database-backed REST microservices, and iOS-to-backend support automation.",
  },
  {
    years: "May 2025 — May 2028",
    title: "B.S. Applied Mathematics, Data Science & Computer Science",
    place: "University of California, Berkeley",
    description:
      "Coursework in data structures, software engineering, linear algebra, and probability.",
  },
];

const projects = [
  {
    title: "Behavioral Safety Invariance",
    description:
      "A 2,065-evaluation study of how GPU quantization changes the safety behavior of LLM agents.",
    href: "https://github.com/abdulm5/safety-invariance",
  },
  {
    title: "Corrigibility & Utility Evaluation",
    description:
      "A reproducible alignment research pipeline for measuring preference revision and jailbreak durability.",
    href: "https://github.com/Arnavd83/avocado",
  },
  {
    title: "PagerAgent",
    description:
      "An AI incident-response copilot that turns alerts, telemetry, code changes, and runbooks into grounded diagnoses.",
    href: "https://github.com/abdulm5/paperAgent",
  },
];

const publications = [
  {
    title: "Epistemic Safety in AI Physics Tutors",
    description:
      "First author · Conference on Physics and AI at Stanford University · PAI 2026",
    href: "https://openreview.net/pdf?id=W6V5N7nSs3",
  },
];

export default function Home() {
  return (
    <main>
      <header>
        <a className="face" href="#home" aria-label="Abdul Mohammad, home">
          <span>AM</span>
        </a>

        <nav aria-label="Page sections">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#outside">Outside</a>
        </nav>
      </header>

      <div className="content">
        <section className="hero" id="home">
          <h1>Abdul Mohammad</h1>
          <p>
            Hello everyone, I&apos;m currently a student at UC Berkeley studying
            applied mathematics, data science, and computer science. I&apos;m
            interested in AI safety, LLM evaluation, and software engineering.
          </p>
          <div className="social-links">
            <a href="https://github.com/abdulm5" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-mohammad-344320315/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:abdulmohammad@berkeley.edu">Email ↗</a>
            <a href="/Abdul-Mohammad-Resume.pdf" target="_blank" rel="noreferrer">
              Resume ↗
            </a>
          </div>
        </section>

        <section className="section" id="experience">
          <h2>Experience</h2>
          <div className="list">
            {experiences.map((experience) => (
              <div className="experience-row" key={`${experience.years}-${experience.title}`}>
                <span className="meta">{experience.years}</span>
                <div>
                  <h3>{experience.title}</h3>
                  <p>{experience.place}</p>
                  <p className="description">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="list">
            {projects.map((project, index) => (
              <a
                className="project-row"
                href={project.href}
                key={`${project.title}-${index}`}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="publications">
          <h2>Publications</h2>
          <div className="list">
            {publications.map((publication) => (
              <a
                className="project-row"
                href={publication.href}
                key={publication.title}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section outside" id="outside">
          <h2>Outside school</h2>
          <div className="outside-copy">
            <p>
              Outside of school, I like going to the gym, trying new food, and
              playing ping-pong.
            </p>
          </div>
        </section>
      </div>

      <footer>
        <span>Abdul Mohammad</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
