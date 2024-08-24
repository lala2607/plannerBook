import React from 'react';
import { EPages } from '../../App';



const goalYearss = [
    {value: '2024', label:'2024'}, 
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

interface IGoalProps {
    goalsList: {
        textGoal: string;
        yearGoal: string;    
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
}

const Goal: React.FC<IGoalProps> = ({goalsList, setAppState}) => {

    const handleUpdateGoal = () => {
        setAppState((prevState) => ({...prevState, goalsList: [...prevState.goalsList, {textGoal: '', yearGoal: ''}], }));
    };

    const handleUpdateTextareaGoal = (
        index: number, 
        newTextGoal: string
    ) => {
        setAppState((prevState) => ({
            ...prevState,
            goalsList: prevState.goalsList.map((target, i) => 
            i === index ? {...target, textGoal: newTextGoal}: target
        )
        }));
    };

    const handleUpdateYearGoal = (
        index: number,
        newYearGoal: string,
    ) => {
        setAppState((prevState) => ({
            ...prevState,
            goalsList: prevState.goalsList.map((target, i) => 
            i === index ? {...target, yearGoal: newYearGoal}: target
        ),
        }));
    };

    const handleRemoveGoal = (index: number) => {
        setAppState((prevState) => ({
            ...prevState,
            goalsList: prevState.goalsList.filter((_, i) => i !== index),
        }));
    };
  

    return (<div className='Goal'> 
            <h1 className='word-goal'> Цели и ориентиры на год </h1>
            <button className='button-Goall' onClick={handleUpdateGoal}> New Goal </button>
            {goalsList.map((target, index) => (
                <div className='container-Goal' key={index}> 
                    <div className='select-Goal'>
                        <select 
                        value={target.yearGoal}
                        onChange={(e) => handleUpdateYearGoal(index, e.target.value)} >
                        {goalYearss.map((goalYears) => (
                            <option key={goalYears.value} value={goalYears.value}> 
                                {goalYears.label}
                            </option>
                        ))}
                        </select>
                    </div>
                    <textarea
                    id='textarea-Goal'
                        value={target.textGoal}
                        onChange={(e) => handleUpdateTextareaGoal(index, e.target.value)}
                    />
                    <button className='button-GoalDelete' onClick={() => handleRemoveGoal(index)}> delete </button>
                </div>
            ))}
        
    </div>);
};

export default Goal;