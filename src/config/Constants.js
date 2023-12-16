// constants.js
export function calculateRemainingSeconds(minutes, seconds) {
  return minutes * 60 + seconds;
}

export function calculateTotalSeconds(totalTimeInMinutes) {
  return totalTimeInMinutes * 60;
}

export function calculatePercentage(remainingSeconds, totalSeconds) {
  return (remainingSeconds / totalSeconds) * 100;
}

export function handleClock(
  isRunning,
  isExpired,
  totalTimeInMinutes,
  pause,
  start,
  restart,
  resume
) {
  const startTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + totalTimeInMinutes * 60);
    start(time);
  };

  if (!isRunning) {
    startTimer();
  }

  if (isRunning) {
    pause();
  } else if (isExpired) {
    const restartTimer = () => {
      const time = new Date();
      time.setSeconds(time.getSeconds() + totalTimeInMinutes * 60);
      restart(time);
    };

    restartTimer();
  } else {
    resume();
  }
}
