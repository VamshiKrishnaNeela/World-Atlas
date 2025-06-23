import { FaLongArrowAltRight, FaGlobe, FaSearch, FaMapMarkedAlt } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1>
            Explore the World, One Country at a Time.
          </h1>
          <p>
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
            Your gateway to global knowledge awaits.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">
              Start Exploring <FaLongArrowAltRight />
            </button>
            <button style={{ 
              background: 'transparent', 
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)'
            }}>
              <FaSearch /> Search Countries
            </button>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '3rem', 
            marginTop: '4rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <FaGlobe style={{ fontSize: '2.4rem', color: 'var(--accent-primary)', marginBottom: '1rem' }} />
              <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)' }}>195+ Countries</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <FaMapMarkedAlt style={{ fontSize: '2.4rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }} />
              <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)' }}>Real-time Data</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};