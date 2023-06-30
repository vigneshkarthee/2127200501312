import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleTrainPage = () => {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/trains/${id}`)
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{train.name}</h1>
      <p>Departure: {train.departure}</p>
      <p>Arrival: {train.arrival}</p>
      <p>Duration: {train.duration}</p>
    </div>
  );
};

export default SingleTrainPage;
