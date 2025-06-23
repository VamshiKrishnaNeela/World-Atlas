import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    // Add success message or notification here
  };

  return (
    <section className="section-contact">
      <div className="container">
        <h2 className="container-title">Get In Touch</h2>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.8rem', 
          color: 'var(--text-secondary)',
          marginBottom: '4rem',
          maxWidth: '60rem',
          margin: '0 auto 4rem'
        }}>
          Have questions about our world atlas? Want to suggest a feature? 
          We'd love to hear from you!
        </p>

        <div className="contact-wrapper">
          <form action={handleFormSubmit}>
            <div style={{ position: 'relative' }}>
              <FaUser style={{ 
                position: 'absolute', 
                left: '1.5rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                fontSize: '1.4rem'
              }} />
              <input
                type="text"
                className="form-control"
                placeholder="Your full name"
                name="username"
                required
                autoComplete="off"
                style={{ paddingLeft: '4.5rem' }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <FaEnvelope style={{ 
                position: 'absolute', 
                left: '1.5rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                fontSize: '1.4rem'
              }} />
              <input
                type="email"
                className="form-control"
                placeholder="Your email address"
                name="email"
                required
                autoComplete="off"
                style={{ paddingLeft: '4.5rem' }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <FaComment style={{ 
                position: 'absolute', 
                left: '1.5rem', 
                top: '2rem',
                color: 'var(--text-muted)',
                fontSize: '1.4rem'
              }} />
              <textarea
                className="form-control"
                rows="6"
                placeholder="Tell us what's on your mind..."
                name="message"
                required
                autoComplete="off"
                style={{ paddingLeft: '4.5rem', paddingTop: '1.5rem' }}
              ></textarea>
            </div>

            <button type="submit" style={{ width: '100%', justifyContent: 'center' }}>
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};