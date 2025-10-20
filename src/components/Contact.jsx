import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Contact
          <span className="contact-underline"></span>
        </h2>
        <p className="contact-subtitle">
          Let’s collaborate or just say hello 👋
        </p>
        <a href="mailto:sawhuman2008@gmail.com" className="contact-btn">
          sawhuman2008@gmail.com
        </a>
      </div>
    </section>
  );
}
