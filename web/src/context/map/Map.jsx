import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { KenyaMapData } from "./KeData";
import keData from './ke.json';
// import EAdata from './EA.json';
const MapChart = () => {
    const [hoveredCounty, setHoveredCounty] = useState(null);
    const [clickedCounty, setClickedCounty] = useState(null);
    const maxstudents = Math.max(...KenyaMapData.map(item => item.students));
    const colorScale = scaleLinear()
      .domain([0, maxstudents])
      .range(["#BBFDCD", "#014013"]);

      const handleClick = (geo) => {
        console.log(`Clicked County Name: ${geo.properties.name}`); // Debugging line
        const countyData = KenyaMapData.find(item => item.name === geo.properties.name);
        console.log(`County Data Found:`, countyData); // Debugging line
        setClickedCounty(countyData);
    };
    
    

    return (
        <div style={{ position: 'relative' }}>
            <ComposableMap projectionConfig={{ scale: 1800, center: [36.8219, -1.2865] }}>
                <Geographies geography={keData}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const d = KenyaMapData.find(item => item.name === geo.properties.name)?.students;
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={colorScale(d) || "#DDD"}
                                    onClick={() => handleClick(geo)}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
            {clickedCounty && (
                <div style={{
                    position: 'absolute',
                    top: '150px',
                    right: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                }}>
                    <p><strong>{clickedCounty.name}</strong></p>
                    <p>Wanafunzi: {clickedCounty.students}</p>
                </div>
            )}
        </div>
    );
};

export default MapChart;
