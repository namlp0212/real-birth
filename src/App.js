import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const specialDates = [
  { date: '01-01', description: 'Tết Dương Lịch' },
  { date: '14-02', description: 'Lễ tình nhân (Valentine)' },
  { date: '27-02', description: 'Ngày Thầy thuốc Việt Nam' },
  { date: '08-03', description: 'Ngày Quốc tế Phụ nữ' },
  { date: '20-03', description: 'Ngày Quốc tế Hạnh phúc' },
  { date: '22-04', description: 'Ngày Trái đất' },
  { date: '30-04', description: 'Ngày giải phóng' },
  { date: '01-05', description: 'Quốc tế lao động' },
  { date: '01-06', description: 'Ngày Quốc tế Thiếu nhi' },
  { date: '28-06', description: 'Ngày Gia đình Việt Nam' },
  { date: '27-07', description: 'Ngày Thương binh Liệt sĩ' },
  { date: '19-08', description: 'Ngày Cách mạng tháng Tám thành công' },
  { date: '02-09', description: 'Lễ Quốc khánh' },
  { date: '07-09', description: 'Ngày thành lập Đài Truyền hình' },
  { date: '13-10', description: 'Ngày Doanh nhân Việt Nam' },
  { date: '14-10', description: 'Ngày thành lập Hội Nông dân' },
  { date: '20-10', description: 'Ngày thành lập Hội Phụ nữ' },
  { date: '20-11', description: 'Ngày Nhà giáo Việt Nam' },
  { date: '22-12', description: 'Ngày thành lập Quân đội' },
  { date: '25-12', description: 'Lễ Giáng Sinh' }
];

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [specialDatesInRange, setSpecialDatesInRange] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  const handleDateChange = (event) => {
    setIsLoading(true);
    const date = new Date(event.target.value);
    setTimeout(() => {
      const formattedSelectedDate = formatDate(date);
      setSelectedDate(formattedSelectedDate);

      const startDate = new Date(date);
      startDate.setMonth(startDate.getMonth() - 9);
      startDate.setDate(startDate.getDate() - 10);

      const formattedStartDate = formatDate(startDate);
      setStartDate(formattedStartDate);

      findSpecialDatesInRange(startDate);
    }, 1500); // Giả lập thời gian chờ 1 giây
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0 nên cần +1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const findSpecialDatesInRange = (startDate) => {
    const startRange = new Date(startDate);
    const endRange = new Date(startDate);
    startRange.setDate(startRange.getDate() - 5);
    endRange.setDate(endRange.getDate() + 5);

    const startRangeDayMonth = formatDate(startRange);
    const endRangeDayMonth = formatDate(endRange);

    const datesInRange = specialDates.filter(specialDate => {
      const [day, month] = specialDate.date.split('-').map(Number);
      const specialDateObj = new Date(startRange.getFullYear(), month - 1, day);

      return (specialDateObj >= startRange && specialDateObj <= endRange) ||
             (specialDateObj.getMonth() === startRange.getMonth() && specialDateObj.getDate() === startRange.getDate()) ||
             (specialDateObj.getMonth() === endRange.getMonth() && specialDateObj.getDate() === endRange.getDate());
    });

    setSpecialDatesInRange(datesInRange);
    setIsLoading(false);
  };

  return (

    <div className="App">
      <header className="App-header">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Nhập ngày sinh của bạn</h2>
        <input
          type="date"
          onChange={handleDateChange}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
        />
        {isLoading ? (
          <div className="spinner mb-4"></div>
        ) : (
          selectedDate && startDate && (
            <div className="text-lg text-gray-700">
              <p>Thực tế bạn đến với thế giới ngày: <span className="font-semibold">{startDate}</span></p>
            </div>
          )
        )}
        {isLoading ? (
          <div className="mt-4">
          </div>
        ) : (
          specialDatesInRange.length > 0 && (
            <div className="mt-4">
              <p className="text-lg text-gray-700">Bố mẹ bạn đã có một {specialDatesInRange[0].description} thật tuyệt!</p>
            </div>
          )
        )}
      </header>
    </div>
  );
}

export default App;
