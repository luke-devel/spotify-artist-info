function Cities({ cities }) {
  let count = 0;
  const citiesList = cities.list.map(function({ city, country, listeners }) {
    count++;
    return (
      <p>
        {count}: {city}, {country} - Monthly Listeners: {listeners}
      </p>
    );
  });

  return (
    <div style={{ textAlign: "center", fontSize: "18px" }}>{citiesList}</div>
  );
}

export default Cities;
