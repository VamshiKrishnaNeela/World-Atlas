import { FaSearch, FaSortAlphaDown, FaSortAlphaUp, FaFilter } from "react-icons/fa";

export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <div style={{ position: 'relative', flex: 1, minWidth: '25rem' }}>
        <FaSearch style={{ 
          position: 'absolute', 
          left: '1.6rem', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: 'var(--text-muted)',
          fontSize: '1.4rem'
        }} />
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={handleInputChange}
          style={{ paddingLeft: '4.5rem' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => sortCountries("asc")}
          style={{ 
            background: 'var(--bg-tertiary)', 
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            padding: '1.2rem'
          }}
          title="Sort A-Z"
        >
          <FaSortAlphaDown />
        </button>
        
        <button 
          onClick={() => sortCountries("des")}
          style={{ 
            background: 'var(--bg-tertiary)', 
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            padding: '1.2rem'
          }}
          title="Sort Z-A"
        >
          <FaSortAlphaUp />
        </button>
      </div>

      <div style={{ position: 'relative' }}>
        <FaFilter style={{ 
          position: 'absolute', 
          left: '1.6rem', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: 'var(--text-muted)',
          fontSize: '1.4rem'
        }} />
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
          style={{ paddingLeft: '4.5rem', minWidth: '16rem' }}
        >
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};