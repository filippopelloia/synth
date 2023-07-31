import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
  const targetDate = new Date('2023-08-15T01:00:00');
  const currentTime = new Date();
  const initialTime = Math.floor((targetDate - currentTime) / 1000);
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    // If the countdown is still ongoing, set up the interval to update the time
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000); // Update the remaining time every 1 second

      // Clean up the interval when the component is unmounted or the countdown ends
      return () => clearInterval(interval);
    }
  }, [remainingTime]);

  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / (24 * 60 * 60));
    const hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    const seconds = timeInSeconds % 60;
    return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
    <div className='countdown-section'>
      <h4 className='countdown-title'>SYNTH DEMO</h4>
      {remainingTime > 0 ? (
        <h3 className='countdown'>{formatTime(remainingTime)}</h3>
      ) : (
        <div className='showMore'><Link to="/qWu8rF5yT3VpM7sGzXk2eYcE9iN0lA1oH6jB">START</Link></div>
      )}
    </div>
    </>
  );
}
