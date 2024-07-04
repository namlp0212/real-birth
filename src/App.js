import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(event.target.value);

    // Calculate the start date
    const startDate = new Date(date);
    startDate.setMonth(startDate.getMonth() - 9);
    startDate.setDate(startDate.getDate() - 10);

    setStartDate(formatDate(startDate));
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0 nên cần +1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nhập ngày sinh của bạn</h1>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        {selectedDate && (
          <div>
            <p>Thực tế, bạn sinh ra ngày : {startDate} </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
