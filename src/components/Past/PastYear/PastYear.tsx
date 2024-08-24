import React from 'react';
import { EPages } from '../../../App';

interface IPastYear {
    yearItem: {
        useYear: string;
        useTextareaYear: string;
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

const datePastYear = [{
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

const PastYear: React.FC<IPastYear> = ({yearItem, setAppState}) => {

    const handleUpdatePasts = () => {
        setAppState((prevState) => ({...prevState, yearItem: [...prevState.yearItem, {useYear: '', useTextareaYear: '' }],}));
    };

    const handleUpdatePastsYear = (index: number, newPastsYear: string) => {
        setAppState((prevState) => ({
            ...prevState,
            yearItem: prevState.yearItem.map((pastsEntry, i) =>
                i === index ? {...pastsEntry, useYear: newPastsYear}: pastsEntry
        ),
        }));
    };

    const handleUpdatePastsTextarea = (index: number, newPastsText: string) => {
        setAppState((prevState) => ({
            ...prevState,
            yearItem: prevState.yearItem.map((pastsEntry, i) => 
            i === index ? {...pastsEntry, useTextareaYear: newPastsText}: pastsEntry 
        ),
        }));
    };

    const handleRemovePastYear = (index: number) => {
        setAppState((prevState) => ({
            ...prevState,
            yearItem: prevState.yearItem.filter((_, i) => i !== index ),
        }));
    };



    return ( 
        <div className='PastYear'>
            <h1 className='word-pastYear'> Ретроспектива года </h1>
            <button className='button-New-Past-Year' onClick={handleUpdatePasts}> New Year </button>
            {yearItem.map((pastsEntry, index) => (
            <div className='container-PastYear' key={index}>
                <div className='select-PastYear'>
                    <select 
                        value={pastsEntry.useYear}
                        onChange={(e) => handleUpdatePastsYear(index, e.target.value)}
                        >
                    {datePastYear.map((date) => (
                            <option key={date.value} value={date.value}> 
                                {date.label}
                            </option>
                    ))}
                </select> 
               </div>

               <textarea 
               id='textarea-pastYear'
                value={pastsEntry.useTextareaYear}
                onChange={(e) => handleUpdatePastsTextarea(index, e.target.value)}
               />
               <button className='button-PastYearDelete' onClick={() => handleRemovePastYear(index)}> delete </button>
            </div>
            ))}
             

        </div>)

};

export default PastYear;