import React, { useState, useEffect} from 'react';

const Quotes = () => {
    const [quote, setQuotes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.api-ninjas.com/v1/quotes?category=funny")
            const json = await res.json()
            setQuotes(json)
        }
        fetchData()
    }, [setQuotes])
  return (
    <div>
      {quote.map((item) => (
        <article>
            <h3>{item.quote}</h3>
            <p>{item.author}</p>
        </article>
      ))}
    </div>
  );
}

export default Quotes;
