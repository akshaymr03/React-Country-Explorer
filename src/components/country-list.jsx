

const CountryList = ({ countries }) => {
  return (
    <div className="country-grid">
      {countries.map((country, index) => (
        <div key={index} className="country-card">
          <img
            src={country.flag}
            alt={country.name}
            className="country-image"
          />
          <div className="country-info">
            <h4>{country.name}</h4>
            <p>{country.region}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
