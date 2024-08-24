import { IAppState } from '../../App';
import React, { useState } from 'react';



const dayDiary = [
  {value: '1', label:'1'}, 
  {value: '2', label: '2'}, 
  {value: '3', label:'3'}, 
  {value: '4', label: '4'}, 
  {value: '5', label: '5'}, 
  {value: '6', label: '6'}, 
  {value: '7', label: '7'}, 
  {value: '8', label: '8'}, 
  {value: '9', label: '9'}, 
  {value: '10', label: '10'}, 
  {value: '11', label: '11'}, 
  {value: '12', label: '12'},
  {value: '13', label:'13'}, 
  {value: '14', label: '14'}, 
  {value: '15', label:'15'}, 
  {value: '16', label: '16'}, 
  {value: '17', label: '17'}, 
  {value: '18', label: '18'}, 
  {value: '19', label: '19'}, 
  {value: '20', label: '20'}, 
  {value: '21', label: '21'}, 
  {value: '22', label: '22'}, 
  {value: '23', label: '23'}, 
  {value: '24', label: '24'},
  {value: '25', label:'25'}, 
  {value: '26', label: '26'}, 
  {value: '27', label:'27'}, 
  {value: '28', label: '28'}, 
  {value: '29', label: '29'}, 
  {value: '30', label: '30'}, 
  {value: '31', label: '31'}, 
];

const monthDiary = [
  {value: 'Jan', label:'Январь'}, 
  {value: 'Feb', label: 'Февраль'}, 
  {value: 'Mar', label:'Март'}, 
  {value: 'Apr', label: 'Апрель'}, 
  {value: 'May', label: 'Май'}, 
  {value: 'Jun', label: 'Июнь'}, 
  {value: 'Jul', label: 'Июль'}, 
  {value: 'Aug', label: 'Август'}, 
  {value: 'Sep', label: 'Сентябрь'}, 
  {value: 'Oct', label: 'Октябрь'}, 
  {value: 'Nov', label: 'Ноябрь'}, 
  {value: 'Dec', label: 'Декабрь'}
];

const yearDiary = [{
  value: '2024', label:'2024'}, 
  {value: '2025', label: '2025'}, 
  {value: '2026', label:'2026'}, 
  {value: '2027', label: '2027'}, 
  {value: '2028', label: '2028'}, 
  {value: '2029', label: '2029'}, 
  {value: '2030', label: '2030'}, 
  {value: '2031', label: '2031'}, 
  {value: '2032', label: '2032'}, 
  {value: '2033', label: '2033'}, 
  {value: '2034', label: '2034'}, 
  {value: '2035', label: '2035'},
  {value: '2036', label:'2036'}, 
  {value: '2037', label: '2037'}, 
  {value: '2038', label:'2038'}, 
  {value: '2039', label: '2039'}, 
  {value: '2040', label: '2040'}, 
  {value: '2041', label: '2041'}, 
  {value: '2042', label: '2042'}, 
  {value: '2043', label: '2043'}, 
  {value: '2044', label: '2044'}, 
  {value: '2045', label: '2045'}, 
  {value: '2046', label: '2046'}, 
  {value: '2047', label: '2047'}
];

interface DiaryProps {
  diaryEntries: IAppState['diaryEntries'];
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

const Diary: React.FC<DiaryProps> = ({ diaryEntries, setAppState }) => {
 
  const handleAddDiaryEntry = () => {
    setAppState((prevState) => ({...prevState,diaryEntries: [...prevState.diaryEntries, {day: '', month: '', year: '', text: ''}], }));
  }

  const handleUpdateDiaryEntry = (
    index: number,
    newText: string,

  ) => {
    setAppState((prevState) => ({
      ...prevState,
      diaryEntries: prevState.diaryEntries.map((entry, i) =>
        i === index ? { ...entry, text: newText} : entry
      ),
    }));
  };

  const handleUpdateDayEntry = (index: number, newDay: string) => {
    setAppState((prevState) => ({
      ...prevState, 
      diaryEntries: prevState.diaryEntries.map((entry, i) => 
        i === index ? {...entry, day: newDay}: entry
      ),
    }));
  };

  const handleUpdateMonthEntry = (index: number, newMonth: string) => {
    setAppState((prevState) => ({
      ...prevState,
      diaryEntries: prevState.diaryEntries.map((entry, i) => 
      i === index ? {...entry, month: newMonth} : entry
    ),
    }));
  };

  const handleUpdateYearEntry = (index: number, newYear: string) => {
    setAppState((prevState) => ({
      ...prevState,
      diaryEntries: prevState.diaryEntries.map((entry, i) => 
       i === index ? {...entry, year: newYear}: entry
    ),
    }));
  };

  const handleRemoveDiaryEntry = (index: number) => {
    setAppState((prevState) => ({
      ...prevState,
      diaryEntries: prevState.diaryEntries.filter((_, i) => i !== index),
    }));
  };

  

  return (
    <div className='Diarys'>
      <h1 className='word-diary'> Ежедневник </h1>
      <button className='button-New-Diarys' onClick={handleAddDiaryEntry}> New Day </button>

      {diaryEntries.map((entry, index) => (
        <div className='container-Diarys' key={index}>
          <div className='select-Diarys-Day'>
            <select 
              value={entry.day} 
              
              onChange={(e) => handleUpdateDayEntry(index, e.target.value)}>
                {dayDiary.map((dayDiarys) => (
                  <option key={dayDiarys.value} value={dayDiarys.value}> {dayDiarys.label}</option>
                ))}

            </select>
        </div>
        <div className='select-Diarys-Month'>
          <select 
            value={entry.month}
            onChange={(e) => handleUpdateMonthEntry(index, e.target.value)}>
              {monthDiary.map((monthDiarys) => (
                <option key={monthDiarys.value} value={monthDiarys.value}>
                  {monthDiarys.label}
                </option> 
              ))}

          </select>
        </div>
        <div className='select-Diarys-Year'>
          <select 
              value={entry.year} 
              onChange={(e) => handleUpdateYearEntry(index, e.target.value)}>
                {yearDiary.map((yearDiarys) => (
                  <option key={yearDiarys.value} value={yearDiarys.value}>
                    {yearDiarys.label}
                  </option>
                ))}
          </select>
        </div>
        <textarea
          id='textarea-Diarys'
          value={entry.text}
          onChange={(e) => handleUpdateDiaryEntry(index, e.target.value)}
        />
        <button className='button-DiatysDelete' onClick={() => handleRemoveDiaryEntry(index)}> Delete </button>
      </div>
    ))}
  </div>
);
};

export default Diary;
