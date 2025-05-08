
// booking route

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Booking.css';
import Select from 'react-select'

const banner = "../../icons_assets/restaurant-banner.jpg"

const getGuestsNumerOptions = () => {
  let guestsNumerOptions = []
  guestsNumerOptions.push({value: 1, label: `1 person`});
  for (let i = 2; i <= 10; i++) {
    guestsNumerOptions.push({value: i, label: `${i} people`});
  }
  return guestsNumerOptions;
}

const getTimeSlotOptions = () => {
  let timeSlotOptions = []

  // 10am - 11:30am
  for (let i = 10; i <= 11; i++) {
    timeSlotOptions.push({value: `${i}:00am`, label: `${i}:00am`});
    timeSlotOptions.push({value: `${i}:30am`, label: `${i}:30am`});
  }

  // 12pm - 12:30pm
  timeSlotOptions.push({value: `12:00pm`, label: `12:00pm`});
  timeSlotOptions.push({value: `12:30pm`, label: `12:30pm`});

  // 1pm - 8:30pm
  for (let i = 1; i <= 8; i++) {
    timeSlotOptions.push({value: `${i}:00pm`, label: `${i}:00pm`});
    timeSlotOptions.push({value: `${i}:30pm`, label: `${i}:30pm`});
  }
  return timeSlotOptions;
}

const generateTimeRange = (selectedTime) => {

    // Parse the selected time (e.g., "10:00am")
    const [time, period] = selectedTime.split(/(?=[ap]m)/i)
    const [hours, minutes] = time.split(':').map(Number)

    // Convert to 24-hour format for easier math
    let hour24 = hours
    if (period.toLowerCase() === 'pm' && hours !== 12) {
        hour24 += 12
    } else if (period.toLowerCase() === 'am' && hours === 12) {
        hour24 = 0
    }

    // Calculate the range (1 hour before and 1 hour after)
    const range = []
    for (let i = -1; i <= 1; i++) {
        let newHour = (hour24 + i + 24) % 24

        if (newHour > 12) {
            newHour -= 12
        } else if (newHour === 0) {
            newHour = 12
        }

        let newPeriod = newHour >= 12 || newHour < 10 ? 'pm' : 'am'
        if (minutes === 0) {
            range.push(`${newHour}:00${newPeriod}`)
            range.push(`${newHour}:30${newPeriod}`)
        } else {
            range.push(`${newHour}:00${newPeriod}`)
            range.push(`${newHour}:30${newPeriod}`)
        }
    }

    return range
}

const Booking = () => {
  const guestsNumerOptions = getGuestsNumerOptions();
  const timeSlotOptions = getTimeSlotOptions();

  const [selectedTimeSlot, setSelectedTimeSlot] = useState({
    value: "7:00pm",
    label: "7:00pm"
  });
  const [selectedGuestsNumber, setSelectedGuestsNumber] = useState(guestsNumerOptions[1]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [ranges, setRanges] = useState(generateTimeRange(selectedTimeSlot.value));
  const [finalTime, setFinalTime] = useState(null);

  useEffect(() => {
    const timeRange = generateTimeRange(selectedTimeSlot.value);
    setRanges(timeRange);
    setFinalTime(selectedTimeSlot.value);
  }, [selectedTimeSlot]);
  return (
    <div className="booking-section">
        <div>
            <img className="booking-banner" src={banner} alt="restaurant" />
        </div>
        <div className="picker-container">
            <Select
                options={guestsNumerOptions}
                className="picker-item"
                value={selectedGuestsNumber}
                onChange={(selectedOption) => setSelectedGuestsNumber(selectedOption)}
            />
            <div> {/* this div to control the size of the date picker */}
                <DatePicker
                    showIcon
                    toggleCalendarOnIconClick
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="text-center picker-item picker-calendar"
                />
            </div>
            <Select
                options={timeSlotOptions}
                className="picker-item"
                value={selectedTimeSlot}
                onChange={(selectedOption) => setSelectedTimeSlot(selectedOption)}
            />
      </div>
      <p> Pick a Time</p>
      <div className="time-container">
          {
            ranges.map((range) => (
                <button
                    className={`time-item ${finalTime === range ? 'final-time-selected' : ''}`}
                    key={range}
                    onClick={() => setFinalTime(range)}
                >
                    {range}
                </button>
            ))
          }
      </div>
      {/* this button to jump to the form page */}
      <button className="booking-button" disabled={finalTime === null}>Reserve Now</button>
    </div>
  )
};

export default Booking;
