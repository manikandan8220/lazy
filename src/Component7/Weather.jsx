import React from 'react'

function Weather() {

    const data = {
        city: 'New York',
        temperature: '18°C',
        condition: 'Partly Cloudy',
      };
  return (
    <>
     <div>
     <h3>Current Weather</h3>
      <p>City: {data.city}</p>
      <p>Temperature: {data.temperature}</p>
      <p>Condition: {data.condition}</p>
     </div>
    </>
  )
}

export default Weather