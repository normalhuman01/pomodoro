import { useState } from 'react';
import { Container, Button, Modal, Box, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Pomodoro from './Pomodoro';
import ToggleButtons from './ToggleButtons';
import ShortBreak from './ShortBreak';
import LongBreak from './LongBreak';
import SettingsModal from './SettingsModal';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
  const [clockType, setClockType] = useState(0);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(1500);
  const [shortBreakSeconds, setShortBreakSeconds] = useState(300);
  const [longBreakSeconds, setLongBreakSeconds] = useState(900);
  const [colorTheme, setColorTheme] = useState('red');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const getExpiryTimestamp = () => {
    const time = new Date();

    switch (clockType) {
      case 0:
        time.setSeconds(time.getSeconds() + pomodoroSeconds);
        break;
      case 1:
        time.setSeconds(time.getSeconds() + shortBreakSeconds);
        break;
      case 2:
        time.setSeconds(time.getSeconds() + longBreakSeconds);
        break;
      default:
        break;
    }

    return time;
  };

  const expiryTimestamp = getExpiryTimestamp();

  let theme = {
    palette: {
      primary: {
        main: '#F87070',
      },
      mode: 'dark',
    },
  };

  if (colorTheme === 'blue') {
    theme = {
      palette: {
        primary: {
          main: '#70f3f8',
        },
        mode: 'dark',
      },
    };
  }
  if (colorTheme === 'purple') {
    theme = {
      palette: {
        primary: {
          main: '#d881f8',
        },
        mode: 'dark',
      },
    };
  }

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Container className="container">
        <h1>pomodoro</h1>
        <ToggleButtons clockType={clockType} setClockType={setClockType} />

        <div className="timers">
          {clockType === 0 && (
            <Pomodoro
              expiryTimestamp={expiryTimestamp}
              totalTimeInMinutes={pomodoroSeconds / 60}
            />
          )}

          {clockType === 1 && (
            <ShortBreak
              expiryTimestamp={expiryTimestamp}
              totalTimeInMinutes={shortBreakSeconds / 60}
            />
          )}

          {clockType === 2 && (
            <LongBreak
              expiryTimestamp={expiryTimestamp}
              totalTimeInMinutes={longBreakSeconds / 60}
            />
          )}
        </div>

        <div id="settings">
          <Button onClick={handleOpen}>
            <SettingsIcon />
          </Button>
        </div>

        <SettingsModal
          open={open}
          setOpen={setOpen}
          pomodoroSeconds={pomodoroSeconds}
          setPomodoroSeconds={setPomodoroSeconds}
          shortBreakSeconds={shortBreakSeconds}
          setShortBreakSeconds={setShortBreakSeconds}
          longBreakSeconds={longBreakSeconds}
          setLongBreakSeconds={setLongBreakSeconds}
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
