import React, { useState } from 'react';
import { EPages } from '../../App';


interface ITimeTable {
    timeTableItem: {
        monthSelect: string;
         timeInput: string[];
         mondayCheckbox: boolean[];
         tuesdayChecked: boolean[];
         wednesdayChecked: boolean[];
         thursdayChecked: boolean[];
         fridayChecked: boolean[];
         saturdayChecked: boolean[];
         sundayChecked: boolean[];
         timeDate: string[];
      }[];
      setAppState: React.Dispatch<React.SetStateAction<{
        pageName: EPages;
        diaryEntries: {
         
            day: string;
            month: string;
            year: string;
          
          text: string;
        }[];
        wishlistItems:{
            checked: boolean;
              value: string;
          }[];
        goalsList: {
          textGoal: string;
          yearGoal: string;
        }[];
        monthItem : {
            useMonth: string;
            useTextareaMonth: string;
        }[];
        yearItem: {
            useYear: string;
            useTextareaYear: string;
          }[];
          planItem:{
            pastInput: string;
            pastText: string[];
            plansMonth: string;
            plansChecked: boolean[];
         
         }[];
         timeTableItem: {
            monthSelect: string;
             timeInput: string[];
             mondayCheckbox: boolean[];
             tuesdayChecked: boolean[];
             wednesdayChecked: boolean[];
             thursdayChecked: boolean[];
             fridayChecked: boolean[];
             saturdayChecked: boolean[];
             sundayChecked: boolean[];
             timeDate: string[];
          }[];
           
      }>>;
};

const dateTime = [
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

const monthTimes = [
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

const TimeTable: React.FC<ITimeTable> = ({timeTableItem, setAppState}) => {

   const [newTimeTable, setNewTimeTable] = useState('');

   const handleTimeTableAdd = () => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: [
            ...prevState.timeTableItem, 
            {
                monthSelect: newTimeTable,
                timeInput: [],
                mondayCheckbox: [],
                tuesdayChecked: [],
                wednesdayChecked: [],
                thursdayChecked: [],
                fridayChecked: [],
                saturdayChecked: [],
                sundayChecked: [],
                timeDate: []

            }],
    }));
    setNewTimeTable('');
   };

   const handleRemoveTimeTable = (indexTime: number) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.filter((_, i) => i !== indexTime),
    }));
   };

   const handleTimeTableMonth = (indexMonth: number, monthSelect: string) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((target, i) => 
        i === indexMonth ? {...target, monthSelect  }: target),
    }));
   };

   const handleTimeTableMonday = (indexMonth: number, indexDay: number, mondayCheckbox: boolean ) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeTables, index) => 
        index === indexMonth ? {...timeTables,mondayCheckbox: timeTables.mondayCheckbox.map((timeMonday, i) => 
            i === indexDay ? mondayCheckbox: timeMonday)} : timeTables),       
    }));
   };

   const handleTimeTableTuesday = (indexMonth: number, indexDay: number, tuesdayChecked: boolean ) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeTables, index) => 
        index === indexMonth ? {...timeTables,tuesdayChecked: timeTables.tuesdayChecked.map((timeTuesday, i) => 
            i === indexDay ? tuesdayChecked: timeTuesday)} : timeTables),       
    }));
   };

   const handleTimeTableWednesday = (indexMonth: number, indexDay: number, wednesdayChecked: boolean ) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeTables, index) => 
        index === indexMonth ? {...timeTables,wednesdayChecked: timeTables.wednesdayChecked.map((timeWednesday, i) => 
            i === indexDay ? wednesdayChecked: timeWednesday)} : timeTables),       
    }));
   };

   const handleTimeTableThursday = (indexMonth: number, indexDay: number, thursdayChecked: boolean ) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeTables, index) => 
        index === indexMonth ? {...timeTables,thursdayChecked: timeTables.thursdayChecked.map((timeThursday, i) => 
            i === indexDay ? thursdayChecked: timeThursday)} : timeTables),       
    }));
   };

   const handleTimeTableFriday = (indexMonth: number, indexDay: number, fridayChecked: boolean ) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeTables, index) => 
        index === indexMonth ? {...timeTables,fridayChecked: timeTables.fridayChecked.map((timeFriday, i) => 
            i === indexDay ? fridayChecked: timeFriday)} : timeTables),       
    }));
   };

   const handleTimeTableSaturday = (indexMonth: number, indexDay: number, saturdayChecked: boolean ) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeTables, index) => 
        index === indexMonth ? {...timeTables,saturdayChecked: timeTables.saturdayChecked.map((timeSaturday, i) => 
            i === indexDay ? saturdayChecked: timeSaturday)} : timeTables),       
    }));
   };

   const handleTimeTableSunday = (indexMonth: number, indexDay: number, sundayChecked: boolean ) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeTables, index) => 
        index === indexMonth ? {...timeTables,sundayChecked: timeTables.sundayChecked.map((timeSunday, i) => 
            i === indexDay ? sundayChecked: timeSunday)} : timeTables),       
    }));
   };

   const handleTimeTableDay = (indexMonth: number, indexDay: number, timeDate: string) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeMonth, index) => 
        index === indexMonth ? {...timeMonth, timeDate: timeMonth.timeDate.map((target, i) => 
        i === indexDay ? timeDate: target)} : timeMonth),
    }));
   };

   const handleTimeTableTimeInput = (indexMonth: number, indexDay: number, timeInput: string) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeMonth, index) => 
        index === indexMonth ? {...timeMonth, timeInput: timeMonth.timeInput.map((target, i) => 
        i === indexDay ? timeInput: target)}: timeMonth),
    }));
   };

   const handleAddTimeTable = (indexMonth: number) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeMonth, index) => 
        index === indexMonth ? {
            ...timeMonth,
            timeInput: [...timeMonth.timeInput, ''],
            mondayChecked: [...timeMonth.mondayCheckbox, false],
            tuesdayChecked: [...timeMonth.tuesdayChecked, false],
            wednesdayChecked: [...timeMonth.wednesdayChecked, false],
            thursdayChecked: [...timeMonth.thursdayChecked, false],
            fridayChecked: [...timeMonth.fridayChecked, false],
            saturdayChecked: [...timeMonth.saturdayChecked, false],
            sundayChecked: [...timeMonth.sundayChecked, false],
            timeDate: [...timeMonth.timeDate, ''] 
        }: timeMonth),
    }));
   };

   const handleRemoveTimeTables = (indexMonth: number, indexDay: number) => {
    setAppState((prevState) => ({
        ...prevState,
        timeTableItem: prevState.timeTableItem.map((timeMonth, index) => 
        index === indexMonth ? {
            ...timeMonth,
            timeInput: timeMonth.timeInput.filter((_, i) => i !== indexDay),
            mondayChecked: timeMonth.mondayCheckbox.filter((_, i) => i !== indexDay),
            tuesdayChecked: timeMonth.tuesdayChecked.filter((_, i) => i !== indexDay),
            wednesdayChecked: timeMonth.wednesdayChecked.filter((_, i) => i !== indexDay),
            thursdayChecked: timeMonth.thursdayChecked.filter((_, i) => i !== indexDay),
            fridayChecked: timeMonth.fridayChecked.filter((_, i) => i !== indexDay),
            saturdayChecked: timeMonth.saturdayChecked.filter((_, i) => i !== indexDay),
            sundayChecked: timeMonth.sundayChecked.filter((_, i) => i !==indexDay),
            timeDate: timeMonth.timeDate.filter((_, i) => i !== indexDay)
        }: timeMonth),
        }));
   };
   


    return (
    <div className='TimeT'>
        <h1 className='word-timeTable'> Расписание занятий и тренировок </h1>
        <button className='button-New-TimeT' onClick={handleTimeTableAdd}> New Month </button>
        {timeTableItem.map((timeMonths, indexMonths) => (
            <div key={indexMonths}>
                <div className='container-TimeT'>
                    <div className='select-TimeT-Month'>
                        <select 
                            value={timeMonths.monthSelect}
                            onChange={(e) => handleTimeTableMonth(indexMonths, e.target.value)}
                        >
                            {monthTimes.map((months) => (
                                <option key={months.value} value={months.value}>
                                    {months.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className='button-TimeT-delete' onClick={() => handleRemoveTimeTable(indexMonths)}> delete </button>
                </div>
                {timeMonths.timeDate.map((timeSelect, indexDays) => (
                    <div className='container-Time' key={indexDays}>
                        <div className='select-TimeT-Day'>
                            <select 
                                value={timeSelect}
                                onChange={(e) => handleTimeTableDay(indexMonths, indexDays, e.target.value)}
                            >
                                {dateTime.map((days) => (
                                    <option key={days.value} value={days.value}>
                                        {days.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input 
                            className='checkbox-Monday'
                            type='checkbox'
                            checked={timeMonths.mondayCheckbox[indexDays]}
                            onChange={(e) => handleTimeTableMonday(indexMonths, indexDays, e.target.checked)}
                        /> Пн
                        <input 
                            className='checkbox-Tuesday'
                            type='checkbox'
                            checked={timeMonths.tuesdayChecked[indexDays]}
                            onChange={(e) => handleTimeTableTuesday(indexMonths, indexDays, e.target.checked)}
                        /> Вт
                        <input 
                            className='checkbox-Wednesday'
                            type='checkbox'
                            checked={timeMonths.wednesdayChecked[indexDays]}
                            onChange={(e) => handleTimeTableWednesday(indexMonths, indexDays, e.target.checked)}
                        /> Ср
                        <input 
                            className='checkbox-Thursday'
                            type='checkbox'
                            checked={timeMonths.thursdayChecked[indexDays]}
                            onChange={(e) => handleTimeTableThursday(indexMonths, indexDays, e.target.checked)}
                        /> Чт
                        <input 
                            className='checkbox-Friday'
                            type='checkbox'
                            checked={timeMonths.fridayChecked[indexDays]}
                            onChange={(e) => handleTimeTableFriday(indexMonths, indexDays, e.target.checked)}
                        /> Пт
                        <input 
                            className='checkbox-Saturday'
                            type='checkbox'
                            checked={timeMonths.saturdayChecked[indexDays]}
                            onChange={(e) => handleTimeTableSaturday(indexMonths, indexDays, e.target.checked)}
                        /> Сб
                        <input 
                            className='checkbox-Sunday'
                            type='checkbox'
                            checked={timeMonths.sundayChecked[indexDays]}
                            onChange={(e) => handleTimeTableSunday(indexMonths, indexDays, e.target.checked)}
                        /> Вс
                        <input 
                            id='input-TimeT'
                            type='text'
                            value={timeMonths.timeInput[indexDays]}
                            onChange={(e) => handleTimeTableTimeInput(indexMonths, indexDays, e.target.value )}
                        />

                        <button className='delete-TimeT' onClick={() => handleRemoveTimeTables(indexMonths, indexDays)}> delete </button>
                    </div>
                ))}

                <button className='button-Plus-TimeT' onClick={() => handleAddTimeTable(indexMonths)}> + </button>
            </div>
        ))}

    </div>);
}

export default TimeTable;