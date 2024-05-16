import React, { useState, useEffect } from 'react';

export default function Pokemon() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch('/api/pokemon');
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokémon</h1>
      {data && <p>Nom : {data.name}</p>}
      {data && <p>Hauteur : {data.height}</p>}
      {data && <p>Poids : {data.weight}</p>}
      <button onClick={fetchData}>Recharger</button>
    </div>
  );
}