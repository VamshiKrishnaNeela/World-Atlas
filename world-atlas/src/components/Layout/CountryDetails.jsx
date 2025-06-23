import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";
import { 
  FaArrowLeft, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaGlobe, 
  FaLanguage, 
  FaCoins, 
  FaLink,
  FaFlag
} from "react-icons/fa";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isPending) return <Loader />;

  return (
    <section className="country-details-card container">
      <div className="container-card">
        {country && (
          <div className="country-image grid grid-two-cols">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="flag"
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  borderRadius: '1.5rem',
                  boxShadow: 'var(--shadow-xl)'
                }}
              />
            </div>
            
            <div className="country-content">
              <h1 className="card-title">{country.name.official}</h1>

              <div className="infoContainer">
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))', 
                  gap: '2rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{ 
                    background: 'var(--bg-tertiary)', 
                    padding: '2rem', 
                    borderRadius: '1.2rem',
                    border: '1px solid var(--border-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <FaFlag style={{ color: 'var(--accent-primary)', fontSize: '1.8rem' }} />
                      <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }}>Basic Info</h3>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p>
                        <span className="card-description">Native Names:</span>
                        <span style={{ color: 'var(--text-primary)' }}>
                          {Object.keys(country.name.nativeName)
                            .map((key) => country.name.nativeName[key].common)
                            .join(", ")}
                        </span>
                      </p>
                      
                      <p style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <FaUsers style={{ color: 'var(--accent-primary)' }} />
                        <span className="card-description">Population:</span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                          {country.population.toLocaleString()}
                        </span>
                      </p>
                      
                      <p style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <FaMapMarkerAlt style={{ color: 'var(--accent-secondary)' }} />
                        <span className="card-description">Capital:</span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                          {country.capital}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div style={{ 
                    background: 'var(--bg-tertiary)', 
                    padding: '2rem', 
                    borderRadius: '1.2rem',
                    border: '1px solid var(--border-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <FaGlobe style={{ color: 'var(--accent-secondary)', fontSize: '1.8rem' }} />
                      <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }}>Geography</h3>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p>
                        <span className="card-description">Region:</span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                          {country.region}
                        </span>
                      </p>
                      
                      <p>
                        <span className="card-description">Sub Region:</span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                          {country.subregion}
                        </span>
                      </p>
                      
                      <p style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <FaLink style={{ color: 'var(--accent-primary)' }} />
                        <span className="card-description">Top Level Domain:</span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                          {country.tld[0]}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))', 
                  gap: '2rem'
                }}>
                  <div style={{ 
                    background: 'var(--bg-tertiary)', 
                    padding: '2rem', 
                    borderRadius: '1.2rem',
                    border: '1px solid var(--border-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <FaCoins style={{ color: 'var(--accent-primary)', fontSize: '1.8rem' }} />
                      <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }}>Economy</h3>
                    </div>
                    
                    <p>
                      <span className="card-description">Currencies:</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                        {Object.keys(country.currencies)
                          .map((curElem) => country.currencies[curElem].name)
                          .join(", ")}
                      </span>
                    </p>
                  </div>

                  <div style={{ 
                    background: 'var(--bg-tertiary)', 
                    padding: '2rem', 
                    borderRadius: '1.2rem',
                    border: '1px solid var(--border-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <FaLanguage style={{ color: 'var(--accent-secondary)', fontSize: '1.8rem' }} />
                      <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }}>Culture</h3>
                    </div>
                    
                    <p>
                      <span className="card-description">Languages:</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                        {Object.keys(country.languages)
                          .map((key) => country.languages[key])
                          .join(", ")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn" onClick={handleBackClick}>
            <button style={{ 
              background: 'var(--bg-tertiary)', 
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)'
            }}>
              <FaArrowLeft /> Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};