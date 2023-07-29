import React, { useState, useEffect } from 'react';

export default function Begin() {
  const initialTime = 0.1 * 60; // 5 minutes in seconds
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
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      {remainingTime > 0 ? (
        <h2>{formatTime(remainingTime)}</h2>
      ) : (
        <h2>Countdown Finished!</h2>
      )}
    </div>
  );
}
