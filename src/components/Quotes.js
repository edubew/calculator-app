import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=funny',
      {
        headers: {
          'X-Api-Key': 'hTAKXNFRMzvu2GX5y3pZ0Jo8X9WRprAcTGQV9DPv',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, [setData]);

  return (
    <div>
      {data.map((item) => (
        <ul key={item.author}>
          <li>{item.quote}</li>
          <li>{item.author}</li>
        </ul>
      ))}
    </div>
  );
};

export default Quotes;
