import { NavLink, useRouteError } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <FaExclamationTriangle style={{ 
        fontSize: '8rem', 
        color: 'var(--accent-primary)', 
        marginBottom: '2rem' 
      }} />
      
      <h1>404</h1>
      <p>
        Oops! The page you're looking for seems to have wandered off the map. 
        Let's get you back to exploring the world.
      </p>
      
      {error && (
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '2rem', 
          borderRadius: '1rem',
          border: '1px solid var(--border-color)',
          marginBottom: '3rem',
          maxWidth: '50rem'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.4rem' }}>
            Error Details: {error.statusText || error.message}
          </p>
        </div>
      )}
      
      <NavLink to="/">
        <button>
          <FaHome /> Return Home
        </button>
      </NavLink>
    </div>
  );
};