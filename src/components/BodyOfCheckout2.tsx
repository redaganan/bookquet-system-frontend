import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';

export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  const handleClick = () => {
    alert('Shop Now button clicked!');
  };

  return (
    <div>
      <h2 style={{ color: 'black' }}>Set your pick-up date:</h2>
      <style>
        {`
          .MuiDateCalendar-root {
        background-color: black !important;
        color: white !important;
          }
          .MuiPickersDay-root {
        color: white !important;
          }
          .MuiPickersArrowSwitcher-root button {
        color: white !important;
          }
          .MuiDayCalendar-weekDayLabel {
        color: white !important;
          }
        `}
      </style>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar', 'DateCalendar']}>
            <DemoItem>
              <DateCalendar defaultValue={dayjs('2025-04-08')} />
            </DemoItem>
            
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
              <label>
                Name:
                <input type="text" style={{ margin: '5px 0', padding: '5px', width: '200px' }} />
              </label>
              <label>
                Email Address:
                <input type="email" style={{ margin: '5px 0', padding: '5px', width: '200px' }} required/>
              </label>
              <label>
                Contact Number:
                <input type="tel" style={{ margin: '5px 0', padding: '5px', width: '200px' }} />
              </label>
              <button onClick={handleClick}>Check Out</button>
            </div>
            {/* <DemoItem label="Controlled calendar">
              <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </DemoItem> */}
          </DemoContainer>
        </LocalizationProvider>

      </div>
    </div>
  );
}
