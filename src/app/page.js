'use client';

import styles from './page.module.css';

export default function Home() {
  async function handleDownloadCV() {
    try {
      const res = await fetch('/annay-barua-cv.pdf');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Annay_Barua_CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
    }
  }
  return (
    <main className={styles.main}>
      {/* Navbar Placeholder */}
      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <h1 className={styles.logo}>AB.</h1>
          <nav>
            <ul className={styles.navLinks}>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${styles.hero} container`}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h2 className="animate-fade-in">Hello, I'm</h2>
            <h1 className={`${styles.name} animate-fade-in delay-1`}>Annay Barua</h1>
            <p className={`${styles.subtitle} animate-fade-in delay-2`}>
              CSE Graduate from <strong>East Delta University</strong>
            </p>
            <div className={`${styles.heroButtons} animate-fade-in delay-3`}>
              <a href="#contact" className={styles.primaryBtn}>Get in Touch</a>
              <a href="#projects" className={styles.secondaryBtn}>View Work</a>
            </div>
          </div>
          <div className={`${styles.heroImageContainer} animate-fade-in delay-2`}>
            <div className={styles.heroImageWrapper}>
              <img src="/annay-barua.png" alt="Annay Barua" className={styles.heroImage} />
            </div>
            <span className={styles.heroDot1} />
            <span className={styles.heroDot2} />
            <span className={styles.heroDot3} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section container">
        <h2 className="section-title">About Me</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p>
              I am a passionate Computer Science and Engineering graduate from East Delta University.
              I love building functional, dynamic, and beautiful web experiences. My journey in tech
              has equipped me with a strong foundation in software development, problem-solving, and
              modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`section container ${styles.skillsSection}`}>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'C++', 'Git', 'SQL'].map(skill => (
            <div key={skill} className={styles.skillCard}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <h2 className="section-title">Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {/* Project placeholders */}
          {[1, 2, 3].map(item => (
            <div key={item} className={styles.projectCard}>
              <div className={styles.projectImage}></div>
              <div className={styles.projectInfo}>
                <h3>Project Title {item}</h3>
                <p>A brief description of the project, the technologies used, and the problem it solved.</p>
                <div className={styles.projectTags}>
                  <span>React</span><span>Node.js</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section container ${styles.contactSection}`}>
        <h2 className="section-title">Let's Connect</h2>
        <div className={styles.contactCard}>
          <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div className={styles.contactButtons}>
            <a href="tel:+8801610057719" className={styles.primaryBtn}>Call Me</a>
            <a href="mailto:annaybarua365@gmail.com" className={styles.secondaryBtn}>Email Me</a>
            <div className={styles.cvButtons}>
              <a href="/annay-barua-cv.pdf" target="_blank" className={styles.secondaryBtn}>View CV</a>
              <button onClick={handleDownloadCV} className={styles.secondaryBtn}>Download CV</button>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Developed By APARUP BARUA. All rights reserved.</p>
      </footer>
    </main>
  );
}
