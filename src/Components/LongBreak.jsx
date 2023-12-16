import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import {
  calculateTotalSeconds,
  calculateRemainingSeconds,
  calculatePercentage,
  handleClock,
} from '../config/Constants.js';

import 'react-circular-progressbar/dist/styles.css';

const LongBreak = ({ expiryTimestamp, totalTimeInMinutes }) => {
  const [isExpired, setIsExpired] = useState(false);
  const [updatedExpiryTimestamp, setUpdatedExpiryTimestamp] =
    useState(expiryTimestamp);

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: updatedExpiryTimestamp,
      autoStart: false,
      onExpire: () => {
        setIsExpired(true);
        console.log('onExpire called');
      },
    });

  const handleButtonClick = () => {
    handleClock(
      isRunning,
      isExpired,
      totalTimeInMinutes,
      pause,
      start,
      restart,
      resume
    );
  };

  const remainingSeconds = calculateRemainingSeconds(minutes, seconds);
  const totalSeconds = calculateTotalSeconds(totalTimeInMinutes);
  const percentage = calculatePercentage(remainingSeconds, totalSeconds);

  return (
    <Button onClick={handleButtonClick} className="clock">
      <div className="timer">
        <div className="inner">
          <h4>
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </h4>
          <p>{isRunning ? 'pause' : isExpired ? 'restart' : 'start'}</p>
        </div>

        <CircularProgressbar
          className="circularProgressBar"
          value={percentage}
        />
      </div>
    </Button>
  );
};

export default LongBreak;
