import { useState } from 'react';

import {
  Modal,
  Box,
  TextField,
  Divider,
  Button,
  ButtonGroup,
} from '@mui/material';

import { useForm } from 'react-hook-form';

const SettingsModal = ({
  open,
  setOpen,
  pomodoroSeconds,
  setPomodoroSeconds,
  shortBreakSeconds,
  setShortBreakSeconds,
  longBreakSeconds,
  setLongBreakSeconds,
  colorTheme,
  setColorTheme,
}) => {
  const { register, handleSubmit } = useForm();
  const [selectedColor, setSelectedColor] = useState(colorTheme); // Store the selected color option
  const [selectedFont, setSelectedFont] = useState('sans');

  const handleClose = () => setOpen(false);

  const submitSettingsForm = (data) => {
    const { pomodoro, shortBreak, longBreak, color } = data;
    console.log(data);

    setPomodoroSeconds(pomodoro * 60);
    setShortBreakSeconds(shortBreak * 60);
    setLongBreakSeconds(longBreak * 60);
    setLongBreakSeconds(longBreak * 60);
    setColorTheme(selectedColor);
    document.querySelector('body').setAttribute('data-color', selectedColor);
    document.querySelector('body').setAttribute('data-font', selectedFont);

    handleClose();
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  const handleFontSelection = (font) => {
    setSelectedFont(font);
  };

  return (
    <Modal
      id="settingsModal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>Settings</h2>
        <Divider className="divider" />

        <form onSubmit={handleSubmit(submitSettingsForm)}>
          <div className="formGid">
            <h3>TIME (MINUTES)</h3>{' '}
            <div className="time">
              <TextField
                {...register('pomodoro')}
                label="pomodoro"
                type="number"
                className="numberInput"
                sx={{ input: { color: '#D7E0FF' } }}
                defaultValue={pomodoroSeconds / 60}
              />
              <TextField
                {...register('shortBreak')}
                label="short break"
                type="number"
                className="numberInput"
                sx={{ input: { color: '#D7E0FF' } }}
                defaultValue={shortBreakSeconds / 60}
              />
              <TextField
                {...register('longBreak')}
                label="long break"
                type="number"
                className="numberInput"
                sx={{ input: { color: '#D7E0FF' } }}
                defaultValue={longBreakSeconds / 60}
              />
            </div>
            <Divider className="divider" sx={{ marginTop: '2rem' }} />
            <div className="font">
              <div className="left-element">
                <h3>FONT</h3>
              </div>
              <div className="right-element">
                {' '}
                <ButtonGroup
                  aria-label="outlined button group"
                  className="btnGroup"
                >
                  <Button
                    className={`fontSelectBtn sans ${
                      selectedFont === 'sans' ? 'active' : ''
                    }`}
                    defaultChecked={selectedFont === 'sans'}
                    onClick={() => handleFontSelection('sans')}
                  >
                    Aa
                  </Button>
                  <Button
                    className={`fontSelectBtn slab ${
                      selectedFont === 'slab' ? 'active' : ''
                    }`}
                    defaultChecked={selectedFont === 'slab'}
                    onClick={() => handleFontSelection('slab')}
                  >
                    Aa
                  </Button>
                  <Button
                    className={`fontSelectBtn mono ${
                      selectedFont === 'mono' ? 'active' : ''
                    }`}
                    defaultChecked={selectedFont === 'mono'}
                    onClick={() => handleFontSelection('mono')}
                  >
                    Aa
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <Divider className="divider" sx={{ marginTop: '2rem' }} />
            <div className="color">
              <div className="left-element">
                <h3>COLOR</h3>
              </div>
              <div className="right-element">
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  className="btnGroup"
                >
                  <Button
                    className={`fontSelectBtn red ${
                      selectedColor === 'red' ? 'active' : ''
                    }`}
                    defaultChecked={selectedColor === 'red'}
                    onClick={() => handleColorSelection('red')}
                  ></Button>
                  <Button
                    className={`fontSelectBtn blue ${
                      selectedColor === 'blue' ? 'active' : ''
                    }`}
                    defaultChecked={selectedColor === 'blue'}
                    onClick={() => handleColorSelection('blue')}
                  ></Button>
                  <Button
                    className={`fontSelectBtn purple ${
                      selectedColor === 'purple' ? 'active' : ''
                    }`}
                    defaultChecked={selectedColor === 'purple'}
                    onClick={() => handleColorSelection('purple')}
                  ></Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          <Button className="submitButton" type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
};

export default SettingsModal;
