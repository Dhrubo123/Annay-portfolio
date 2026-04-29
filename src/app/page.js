'use client';

import styles from './page.module.css';

export default function Home() {
  const downloadFile = async (filePath, fileName) => {
    try {
      const res = await fetch(filePath);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  const certificates = [
    {
      title: "CCNA v7 Bridging",
      file: "/AnnayBarua-CCNAv7_Bridging_-certificate.pdf",
    },
    {
      title: "Cybersecurity Essentials",
      file: "/AnnayBarua-Cybersecurity_Es-certificate.pdf",
    },
    {
      title: "Introduction to Cybersecurity",
      file: "/AnnayBarua-Introduction_to_-certificate.pdf",
    },
    {
      title: "Networking Essentials",
      file: "/AnnayBarua-Networking-Essen-certificate.pdf",
    },
    {
      title: "HTML & CSS",
      file: "/680b0ba4891f394bffdba5c0.pdf",
    },
    {
      title: "JavaScript",
      file: "/680b5a274354a4ffc3244699.pdf",
    },
    {
      title: "DataAnalytics",
      file: "/686390e1ea78d2cd5cd85a3a.pdf",
    },
  ];
  return (
    <main className={styles.main}>
      {/* Navbar Placeholder */}
      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <h1 className={styles.logo}>AB.</h1>
          <nav className={styles.navContent}>
            <ul className={styles.navLinks}>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.headerSocials}>
              <a href="https://github.com/Annaybarua" target="_blank" aria-label="GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.57 9.57 0 0112 6.836c.85.004 1.705.114 2.51.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/annay-barua-405849204?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-.8 0-1.5.4-1.9 1v-1h-2.5v8h2.5v-4.3c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v4.3h2.5M7 18.5V9h2.5v9.5H7M8.3 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" /></svg>
              </a>
            </div>
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
              <a href="#certificates" className={styles.secondaryBtn}>View Certificates</a>
            </div>
            <div className={`${styles.heroSocials} animate-fade-in delay-3`}>
              <a href="https://github.com/yourusername" target="_blank" className={styles.heroSocialIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.57 9.57 0 0112 6.836c.85.004 1.705.114 2.51.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" className={styles.heroSocialIcon}>
                <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-.8 0-1.5.4-1.9 1v-1h-2.5v8h2.5v-4.3c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v4.3h2.5M7 18.5V9h2.5v9.5H7M8.3 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" /></svg>
                <span>LinkedIn</span>
              </a>
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
          {['Python', 'C', 'HTML', 'CSS', 'Data analytics (Microsoft Power BI)', 'Penetration testing', 'Networking', 'Java'].map(skill => (
            <div key={skill} className={styles.skillCard}>
              {skill}
            </div>
          ))}
        </div>
      </section>


      {/* Certificates Section */}
      <section id="certificates" className="section container">
        <h2 className="section-title">E-Certificates</h2>
        <div className={styles.certificatesGrid}>
          {certificates.map((cert, index) => (
            <div key={index} className={styles.certCard}>
              <div className={styles.certImageWrapper}>
                <iframe
                  src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  className={styles.certPdfPreview}
                />
                <div className={styles.certOverlay}>
                  <a href={cert.file} target="_blank" className={styles.viewBtn}>View Full PDF</a>
                </div>
              </div>
              <div className={styles.certInfo}>
                <h3>{cert.title}</h3>
                <button
                  onClick={() => downloadFile(cert.file, `${cert.title.replace(/\s+/g, '_')}_Certificate.pdf`)}
                  className={styles.certDownloadBtn}
                >
                  Download PDF
                </button>
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
              <button onClick={() => downloadFile('/annay-barua-cv.pdf', 'Annay_Barua_CV.pdf')} className={styles.secondaryBtn}>Download CV</button>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerSocials}>
          <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.57 9.57 0 0112 6.836c.85.004 1.705.114 2.51.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-.8 0-1.5.4-1.9 1v-1h-2.5v8h2.5v-4.3c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v4.3h2.5M7 18.5V9h2.5v9.5H7M8.3 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" /></svg>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Developed By APARUP BARUA. All rights reserved.</p>
      </footer>
    </main>
  );
}
