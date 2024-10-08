import React from 'react';
import './WeatherApp.css';

export default function Recent(props) {

    // Check if props.recent is null or undefined, if so, set data to an empty array
    const data = props.recent && props.recent.length > 0 ? (
        props.recent.map((recentData, index) => (
            // Wrapping console.log and JSX inside a block
            <>
       
                <p onClick={() => props.researchHandler(recentData.lat, recentData.lon, recentData.city)} key={index}>
                    {recentData.city}
                </p>
            </>
        ))
    ) : (
        <p>No recent data available</p>
    );

    return (
        <div className='recentDiv'>
            <h3>Recent</h3>
            {data}
        </div>
    );
}
