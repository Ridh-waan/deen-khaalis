import React, { useState, useEffect } from 'react';

const Visits = () => {
 const [visits, setVisits] = useState(0);

 useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch('/api/visits');
        const data = await response.json();
        setVisits(data.visits);
      } catch (error) {
        console.error('Failed to fetch visit count:', error);
      }
    };

    fetchVisitCount();
 }, []);

 return (
    <div>
      {/* <h1>Tumepata visits {visits} Alhamdulillah</h1> */}
    </div>
 );
};

export default Visits;
