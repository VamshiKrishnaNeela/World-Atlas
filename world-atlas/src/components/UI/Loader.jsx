export function Loader() {
  return (
    <div className="loader-section">
      <div className="loader"></div>
      <p style={{ 
        marginTop: '2rem', 
        color: 'var(--text-secondary)', 
        fontSize: '1.6rem',
        textAlign: 'center'
      }}>
        Loading amazing content...
      </p>
    </div>
  );
}