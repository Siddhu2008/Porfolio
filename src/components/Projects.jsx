import { useEffect, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Siddhu2008/repos")
      .then((res) => res.json())
      .then((data) =>
        setRepos(
          data.filter((repo) => !repo.fork && !repo.private) // only filter forks/private
        )
      )
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">
        <span>🚀</span> Featured Projects
      </h2>
      <p className="projects-subtitle">
        A selection of my personal & open-source projects.
      </p>

      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <div className="card-header">
              <h3 className="project-name">{repo.name}</h3>
            </div>
            <p className="project-desc">
              {repo.description || "No description provided."}
            </p>

            <div className="project-footer">
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  Live Demo
                </a>
              )}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
