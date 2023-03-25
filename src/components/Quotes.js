import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('https://api.api-ninjas.com/v1/quotes?category=funny',
      {
        // mode: 'no-cors',
        headers: {
          'X-Api-Key': 'hTAKXNFRMzvu2GX5y3pZ0Jo8X9WRprAcTGQV9DPv',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message));
    setLoading(false);
  }, [setData, setLoading]);

  if (loading) return <h2>Loading... please wait</h2>;
  if (error) {
    return (
      <h3>
        Ooopps!!
        {' '}
        {error}
      </h3>
    );
  }

  return (
    <div>
      {data.map((item) => (
        <ul key={data.indexOf(item)} className="quotes__container">
          <li>{item.quote}</li>
          <li className="author">{item.author}</li>
        </ul>
      ))}
    </div>
  );
};

export default Quotes;
