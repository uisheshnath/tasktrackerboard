import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; 

function Filter() {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      dateRange,
      name,
      email,
    };
    console.log(filters);
  };

  const getCurrentWeekNumber = () => {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const pastDaysOfYear = (currentDate - startOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  };

  const currentWeekNumber = getCurrentWeekNumber();

  const CurrentWeekText = () => (
    <div className="d-flex align-items-center gap-2">
      <i className="fas fa-calendar-week"></i>
      <span>Current Week: {currentWeekNumber}</span>
    </div>
  );


  const DateRangeFilter = () => (
    <div className="d-flex align-items-center gap-2">
      <DateRangePicker
        value={dateRange}
        onChange={setDateRange}
        format="dd-MM-yyyy"
        placeholder="Start Date – End Date"
        style={{ width: '300px' }}
      />
    </div>
  );

  const NameFilter = () => (
    <div className="d-flex align-items-center gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="form-control"
        style={{ width: '200px' }}
      />
    </div>
  );

  const EmailFilter = () => (
    <div className="d-flex align-items-center gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="form-control"
        style={{ width: '200px' }}
      />
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="filter-form">
      <div className="filter-section d-flex justify-content-end align-items-center gap-3 p-3">
          {CurrentWeekText()}
          {DateRangeFilter()}
          {NameFilter()}
          {EmailFilter()}
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </div>
      </form>
    </>
  );
}

export default Filter;
