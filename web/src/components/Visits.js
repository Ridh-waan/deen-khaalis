import { useState, useEffect } from 'react';
const Counts = () => {
 const [pageviews, setPageviews] = useState(0);
 const [visits, setVisits] = useState(0);

 useEffect(() => {
    const type = sessionStorage.getItem('visit') === null ? 'visit-pageview' : 'pageview';
    updateCounter(type);
 }, []);

 function updateCounter(type) {
    fetch(`https://server-ney9.onrender.com/api?${type}`) // Adjusted port to match backend
        // fetch(`// Adjusted port to match backend`) 
      .then(res => res.json())
      .then(data => {
        setVisits(data.visits);
        setPageviews(data.pageviews);
        sessionStorage.setItem('visit', 'x');
      });
      console.log('Page views are:', pageviews)
      console.log('Visits are:', visits)

 }

//  Divide pageviews by 2 and round down to the nearest whole number
 const newPageviews = Math.floor(pageviews / 2);

 return (
    <div>
      <p> Kwa sasa tumepata {newPageviews} visits, Alhamdulillah</p>
    </div>
 );
};

export default Counts;
