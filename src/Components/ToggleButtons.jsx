import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const ToggleButtons = ({ clockType, setClockType }) => {
  const handleChange = (event, newClockType) => {
    if (newClockType !== null) {
      setClockType(newClockType);
    }
  };
  return (
    <ToggleButtonGroup
      id="buttonGroup"
      color="primary"
      value={clockType}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton className="btn" active="true" value={0}>
        pomodoro
      </ToggleButton>
      <ToggleButton className="btn" value={1}>
        short break
      </ToggleButton>
      <ToggleButton className="btn" value={2}>
        long break
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
export default ToggleButtons;
