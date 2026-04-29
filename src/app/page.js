"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className={`container ${styles.nav}`}>
          <h1 className={styles.logo}>AB.</h1>

          <button
            className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.menuActive : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`${styles.navContent} ${isMenuOpen ? styles.navActive : ''}`}>
            <ul className={styles.navLinks}>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
              <li><a href="#certificates" onClick={() => setIsMenuOpen(false)}>Certificates</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
            <div className={styles.headerSocials}>
              <a href="https://github.com/Annaybarua" target="_blank" aria-label="GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/annay-barua-405849204/" target="_blank" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
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
              <a href="https://github.com/Annaybarua" target="_blank" className={styles.heroSocialIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/annay-barua-405849204/" target="_blank" className={styles.heroSocialIcon}>
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
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
          <a href="https://github.com/Annaybarua" target="_blank" aria-label="GitHub">
            <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/annay-barua-405849204/" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Developed By APARUP BARUA. All rights reserved.</p>
      </footer>
    </main>
  );
}
