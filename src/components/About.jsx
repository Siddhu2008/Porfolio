import "./About.css";

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="about-title">About Me</h2>

                <p className="about-text">
                    Hello! 👋 I’m <span className="highlight">Siddhu Kumar</span>, a passionate{" "}
                    <span className="highlight">Full Stack Developer</span> based in Mumbai.
                    I specialize in building dynamic, scalable, and responsive web
                    applications using modern technologies like{" "}
                    <span className="highlight">React</span>,{" "}
                    <span className="highlight">Node.js</span>,{" "}
                    <span className="highlight">Express.js</span>,{" "}
                    <span className="highlight">Django</span>, and{" "}
                    <span className="highlight">MySQL/MongoDB</span>.
                </p>

                <p className="about-text">
                    I’ve developed several projects — from{" "}
                    <span className="highlight">hotel management systems</span> to{" "}
                    <span className="highlight">e-commerce platforms</span> and{" "}
                    <span className="highlight">skill-based learning portals</span>.
                    I enjoy designing smooth user interfaces, creating efficient backend
                    systems, and connecting both ends seamlessly.
                </p>

                <p className="about-text">
                    I’ve also participated in <span className="highlight">Technothon 2025</span>,
                    a national-level hackathon, and continuously strive to enhance my skills
                    through real-world problem-solving and open-source contributions.
                </p>

                <div className="about-links">
                    <a
                        href="https://github.com/Siddhu2008"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn github"
                    >
                        🌐 Visit My GitHub
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn resume"
                    >
                        📄 View Resume
                    </a>

                </div>
            </div>
        </section>
    );
}
