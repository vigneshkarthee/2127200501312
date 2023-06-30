import React, { useState } from 'react';

function PrimeNumberGenerator() {
  const [limit, setLimit] = useState(0);
  const [primeNumbers, setPrimeNumbers] = useState([]);

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const generatePrimeNumbers = () => {
    let primes = [];

    for (let i = 2; primes.length < limit; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    setPrimeNumbers(primes);
  };

  return (
    <div>
      <label>Limit: </label>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(parseInt(e.target.value))}
      />
      <button onClick={generatePrimeNumbers}>Generate</button>
      <ul>
        {primeNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}


export default PrimeNumberGenerator;