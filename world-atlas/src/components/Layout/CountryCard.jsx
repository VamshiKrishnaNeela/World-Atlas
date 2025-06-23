import { NavLink } from "react-router-dom";
import { FaUsers, FaMapMarkerAlt, FaGlobe, FaArrowRight } from "react-icons/fa";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <li className="country-card">
      <div className="container-card">
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1.5rem 1.5rem 0 0' }}>
          <img src={flags.svg} alt={flags.alt} />
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            fontSize: '1.2rem',
            fontWeight: '500'
          }}>
            {region}
          </div>
        </div>

        <div className="countryInfo">
          <h3 className="card-title">
            {name.common.length > 15
              ? name.common.slice(0, 15) + "..."
              : name.common}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FaUsers style={{ color: 'var(--accent-primary)', fontSize: '1.4rem' }} />
              <span className="card-description">Population:</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                {population.toLocaleString()}
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FaMapMarkerAlt style={{ color: 'var(--accent-secondary)', fontSize: '1.4rem' }} />
              <span className="card-description">Capital:</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                {capital?.[0] || 'N/A'}
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FaGlobe style={{ color: 'var(--accent-primary)', fontSize: '1.4rem' }} />
              <span className="card-description">Region:</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                {region}
              </span>
            </div>
          </div>

          <NavLink to={`/country/${name.common}`} onClick={handleExploreClick}>
            <button style={{ width: '100%', justifyContent: 'center' }}>
              Explore Details <FaArrowRight />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};