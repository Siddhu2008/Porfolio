import React, { useState, useEffect, useRef } from "react";
import "./Certificates.css";
const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const modules = import.meta.glob("../assets/certificates/*.{png,jpg,jpeg,svg,pdf}");
    const loadCertificates = async () => {
      const certs = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const src = await resolver();
          const fileUrl = src.default || src;
          const name = path.split("/").pop();
          return { src: fileUrl, name };
        })
      );
      setCertificates(certs);
    };
    loadCertificates();
  }, []);

  // Auto-scroll horizontally
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const scrollStep = 1;
    let animationFrame;
    const scrollAmountRef = { current: 0 };
    function autoScroll() {
      if (scrollContainer.scrollWidth - scrollContainer.clientWidth > 0) {
        scrollAmountRef.current += scrollStep;
        if (scrollAmountRef.current > scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmountRef.current = 0;
        }
        scrollContainer.scrollLeft = scrollAmountRef.current;
      }
      animationFrame = requestAnimationFrame(autoScroll);
    }
    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [certificates]);

  // Manual scroll
  const scrollByAmount = (amount) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    scrollContainer.scrollLeft += amount;
  };

  // 3D tilt effect
  const handleMouseMove = (e, idx) => {
    const card = document.getElementById(`certificate-card-${idx}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
    card.style.boxShadow = `0 16px 48px 0 #00fff055, 0 2px 8px 0 #000a`;
  };
  const handleMouseLeave = (idx) => {
    const card = document.getElementById(`certificate-card-${idx}`);
    if (!card) return;
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "0 8px 32px 0 #00fff033, 0 2px 8px 0 #0008";
  };

  return (
    <section className="certificates-section">
      <h2 className="certificates-title">My Certificates</h2>
      <div className="certificates-controls">
        <button className="cert-scroll-btn" onClick={() => scrollByAmount(-350)}>&lt;</button>
        <button className="cert-scroll-btn" onClick={() => scrollByAmount(350)}>&gt;</button>
      </div>
      <div className="certificates-carousel no-scrollbar" ref={scrollRef}>
        {certificates.length === 0 ? (
          <p className="certificates-empty">No certificates found.</p>
        ) : (
          certificates.map((cert, idx) => (
            <div
              key={idx}
              className="certificate-card certificate-3d"
              id={`certificate-card-${idx}`}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <div className="certificate-preview">
                {cert.src.endsWith(".pdf") ? (
                  <iframe
                    src={cert.src}
                    title={cert.name}
                    className="certificate-pdf"
                    frameBorder="0"
                    loading="lazy"
                  />
                ) : (
                  <img src={cert.src} alt={cert.name} className="certificate-img" loading="lazy" />
                )}
              </div>
              <div className="certificate-name">{cert.name}</div>
              <div className="certificate-accent"></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Certificates;
