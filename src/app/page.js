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
          <nav>
            <ul className={styles.navLinks}>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#certificates">Certificates</a></li>
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
              <a href="#certificates" className={styles.secondaryBtn}>View Certificates</a>
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
        <p>&copy; {new Date().getFullYear()} Developed By APARUP BARUA. All rights reserved.</p>
      </footer>
    </main>
  );
}
