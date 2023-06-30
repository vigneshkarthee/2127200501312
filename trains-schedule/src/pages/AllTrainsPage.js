import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            <Link to={`/train/${train.id}`}>{train.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrainsPage;
