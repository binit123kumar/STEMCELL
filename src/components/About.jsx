import React from "react";
import "../Styles/About.css"; // make sure this file exists (we'll create it next)

export default function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1 className="about-title">School of Stem Cell Technology</h1>
        <p className="about-subtitle">Aryabhatta Knowledge University, Patna</p>
        <p className="about-tagline">Innovating Today, Healing Tomorrow</p>

        <div className="about-description">
          <p>
            The <span className="em">School of Stem Cell Technology</span> is a
            premier centre of excellence dedicated to <strong>research,
            education,</strong> and <strong>innovation</strong> in Stem Cell
            Biology and Regenerative Medicine. Established under Aryabhatta
            Knowledge University, it combines <strong>state-of-the-art
            laboratories, expert faculty,</strong> and a collaborative
            environment to nurture the next generation of scientists and
            clinicians.
          </p>

          <p className="mt">
            Our mission is to <strong>bridge fundamental science with clinical
            applications</strong>, transforming laboratory discoveries into
            <strong> real-world therapies</strong> that improve lives.
          </p>
        </div>
      </header>

      <main className="about-main">
        <section className="cards">
          <article className="card">
            <div className="card-icon">🎓</div>
            <h3 className="card-title">Advanced Academic Programs</h3>
            <p className="card-text">M.S. (by Research) in Stem Cell Biology &amp; Regenerative Medicine</p>
          </article>

          <article className="card">
            <div className="card-icon">⚗️</div>
            <h3 className="card-title">State-of-the-Art Facilities</h3>
            <p className="card-text">Modern labs for cell culture, molecular biology, and translational research</p>
          </article>

          <article className="card">
            <div className="card-icon">📚</div>
            <h3 className="card-title">Research-Driven Learning</h3>
            <p className="card-text">Hands-on training with live projects and interdisciplinary collaboration</p>
          </article>

          <article className="card">
            <div className="card-icon">🤝</div>
            <h3 className="card-title">Industry &amp; Clinical Partnerships</h3>
            <p className="card-text">Strong links with hospitals, biotech companies, and research institutions</p>
          </article>
        </section>
      </main>

      <footer className="about-footer">
        © {new Date().getFullYear()} School of Stem Cell Technology — Aryabhatta Knowledge University
      </footer>
    </div>
  );
}
