import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DecorDetail() {
  const { id } = useParams();
  const [decor, setDecor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDecor = async () => {
      const response = await fetch(`/api/decor/${id}`);
      const data = await response.json();
      setDecor(data);
      setLoading(false);
    };

    fetchDecor();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{decor.name}</h1>
      <img src={decor.image} alt={decor.name} style={{ width: '100%', height: 'auto' }} />
      <p>{decor.description}</p>
      <p><strong>${decor.price}</strong></p>
    </div>
  );
}

export default DecorDetail;
