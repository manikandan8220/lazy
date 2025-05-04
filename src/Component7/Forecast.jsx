import React from 'react'

function Forecast() {

    const forecastData = [
        { day: 'Monday', temp: '20°C', condition: 'Sunny' },
        { day: 'Tuesday', temp: '17°C', condition: 'Rainy' },
        { day: 'Wednesday', temp: '19°C', condition: 'Cloudy' },
      ];
  return (
    <>
    <div>
    <h3>3-Day Forecast</h3>
      <ul>
        {forecastData.map((day, index) => (
          <li key={index}>
            {day.day}: {day.temp} - {day.condition}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Forecast