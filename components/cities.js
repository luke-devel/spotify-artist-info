function Cities({ cities }) {
  const citiesList = cities.list.map(function({ city, country, listeners }, i) {
    return (
      <p key={i}>
        {i + 1}: {city}, {country} - Monthly Listeners: {listeners}
      </p>
    );
  });

  return (
    <div style={{ textAlign: "center", fontSize: "18px" }}>{citiesList}</div>
  );
}

export default Cities;
