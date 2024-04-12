import { useState, useEffect } from 'react';

const Visits = () => {
 const [pageviews, setPageviews] = useState(0);
 const [visits, setVisits] = useState(0);

 useEffect(() => {
    // Assuming the endpoint is '/visits/get-Visits'
    fetch('https://server-ney9.onrender.com/visits')
      .then(res => res.json())
      .then(data => {
        setVisits(data.visits);
        setPageviews(data.pageviews);
        // console.log('Page views are:', data.pageviews);
        // console.log('Visits are:', data.visits);
      })
      .catch(error => console.error('Error fetching data:', error));
 }, []); // Empty dependency array ensures this runs once on mount

 // Divide pageviews by 2 and round down to the nearest whole number
 const newPageviews = Math.ceil(pageviews / 2);
 console.log('visits are:',newPageviews);

 return (
    <div>
      <p>Tumepata visits {pageviews} Alhamdulillah</p>
    </div>
 );
};

export default Visits;