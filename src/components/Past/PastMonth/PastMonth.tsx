import React from 'react';
import { EPages } from '../../../App';



const datePastMonth = [
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

interface IPastMonth {
    monthItem : {
        useMonth: string;
        useTextareaMonth: string;
    }[];
    setAppState: React.Dispatch<React.SetStateAction<{
        pageName: EPages;
        diaryEntries: {
          
            day: string;
            month: string;
            year: string;
          
          text: string;
        }[];
        wishlistItems: {
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

const PastMonth: React.FC<IPastMonth> = ({monthItem, setAppState}) => {
    const handleUpdatePast = () => {
        setAppState((prevState) => ({...prevState, monthItem: [...prevState.monthItem, {useMonth: '', useTextareaMonth: ''}],}))
    };
    
    const handleUpdatePastMonth = (index: number, newPastMonth: string) => {
        setAppState((prevState) => ({
            ...prevState,
            monthItem: prevState.monthItem.map((pastEntry, i) =>
                i === index ? {...pastEntry, useMonth: newPastMonth}: pastEntry
        ),
        }));
    };

    const handleUpdatePastTextarea = (index: number, newPastText: string) => {
        setAppState((prevState) => ({
            ...prevState,
            monthItem: prevState.monthItem.map((pastEntry, i) => 
            i === index ? {...pastEntry, useTextareaMonth: newPastText}: pastEntry 
        ),
        }));
    };

    const handleRemovePastMonth = (index: number) => {
        setAppState((prevState) => ({
            ...prevState,
            monthItem: prevState.monthItem.filter((_, i) => i !== index ),
        }));
    };

    return (
    <div className='PastMonth'>
        <h1 className='word-pastMonth'> Ретроспектива месяца </h1>
        <button className='button-New-Past-Month' onClick={handleUpdatePast}> New Month </button>
        {monthItem.map((pastEntry, index) => (
            <div className='container-PastMonth' key={index}>
                <div className='select-PastMonth'>
                    <select 
                        value={pastEntry.useMonth} 
                        onChange={(e) => handleUpdatePastMonth(index, e.target.value)}> 
                        {datePastMonth.map((valuesMonth) => (
                            <option key={valuesMonth.value} value={valuesMonth.value}>
                                {valuesMonth.label}
                            </option>
                    ))}</select>
                </div>

                <textarea 
                    id='textarea-pastMonth'
                    value={pastEntry.useTextareaMonth}
                    onChange={(e) => handleUpdatePastTextarea(index, e.target.value)}
                />
                <button className='button-PastMonthDelete' onClick={() => handleRemovePastMonth(index)}> delete </button>
            </div>

        ))}
            
                    
        





    </div>)
}

export default PastMonth;