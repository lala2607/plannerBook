import React, { useState } from 'react';
import { EPages } from '../../App';



interface IPlan {
    planItem:{
       pastInput: string;
       pastText: string[];
       plansMonth: string;
       plansChecked: boolean[];
    
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




const planMonth = [
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

const Plans: React.FC<IPlan> = ({planItem, setAppState}) => {
    const [newPlans, setNewPlans] = useState('');

    const handleUpdatePlans = () => {
        setAppState((prevState) => ({
            ...prevState,
            planItem: [
                ...prevState.planItem, 
                {
                    pastInput: newPlans,
                    pastText: [],
                    plansMonth: newPlans,
                    plansChecked: [],
                },
            ],
        }));
        setNewPlans('');
    };

    const handleUpdatePlanText = (indexText: number) => {
        setAppState((prevState) => ({
            ...prevState,
            planItem: prevState.planItem.map((tartets, index) => 
            index === indexText ? {...tartets, pastText: [...tartets.pastText, ''], plansChecked: [...tartets.plansChecked, false]}: tartets
        ), 
        }));
    };

    const handleRemovePlanText = (indexInput: number, indexTexts: number) => {
        setAppState((prevState) => ({
            ...prevState,
            planItem: prevState.planItem.map((tartets, index) => 
            index === indexInput ? 
            {
                ...tartets, 
                pastText: tartets.pastText.filter((_, i) => i !== indexTexts), 
                plansChecked: tartets.plansChecked.filter((_, i) => i !==indexTexts)
            }: tartets),
        }));
    };

    const handleUpdatePlanInput = (indexInput: number, pastInput: string) => {
        setAppState((prevState) => ({
            ...prevState,
            planItem: prevState.planItem.map((tartets, index) => 
            index === indexInput ? {...tartets, pastInput}: tartets),
        }));
    };

    const handleUpdatePlanTexts = (indexInput: number, indexText: number, pastText: string) => {
        setAppState((prevState) => ({
            ...prevState,
            planItem: prevState.planItem.map((pastInputs, index) => 
            index === indexInput ? {...pastInputs, pastText: pastInputs.pastText.map((pastTexts, i) => 
            i === indexText ? pastText: pastTexts)}: pastInputs),
        }));
    };

    const handleRemovePlan = (index: number) => {
        setAppState((prevState) => ({
            ...prevState,
            planItem: prevState.planItem.filter((_, i) => i !== index),
        }));
    };

    const handleUpdatePlansMonth = (indexMonth: number, plansMonth: string) => {
        setAppState((prevState) => ({
            ...prevState,
            planItem: prevState.planItem.map((tartets, index) => 
            index === indexMonth ? {...tartets, plansMonth}: tartets),
        }));
    };

    const handleUpdatePlanChecked = (indexInput: number, indexChecked: number, plansChecked: boolean) => {
        setAppState((prevState) => ({
            ...prevState,
            planItem: prevState.planItem.map((pastInputs, index) => 
            index === indexInput ? {...pastInputs, plansChecked: pastInputs.plansChecked.map((plansCheckeds, i) => 
            i === indexChecked ? plansChecked: plansCheckeds )}: pastInputs),
        }));
    };

    


   
    
    return ( 
        <div className='Planss'>
            <h1 className='word-plans'> Планы на месяц </h1>
           <button className='button-Planss' onClick={handleUpdatePlans}> New Plan </button>
           {planItem.map((pastInputs, indexInput) => (
            <div key={indexInput}> 
                <div className='select-Planss'>
                    <select 
                        value={pastInputs.plansMonth}
                        onChange={(e) => handleUpdatePlansMonth(indexInput, e.target.value)}
                    >
                        {planMonth.map((planMonths) => (
                            <option key={planMonths.value} value={planMonths.value}>
                                {planMonths.label}
                            </option>
                        ))}
                        

                    </select>
                </div>
                <input
                    id='input-Planss'
                    type='text'
                    value={pastInputs.pastInput}
                    onChange={(e) => handleUpdatePlanInput(indexInput, e.target.value)}
                />
                <button className='Planss-delete' onClick={() => handleRemovePlan(indexInput)}> delete </button>
                <div >
                {pastInputs.plansChecked.map((plansChecked, indexTexts) => (
                    <div className='container-Planss' key={indexTexts} >
                    <input
                        className='checkbox-Planss'
                        type="checkbox"
                        checked={plansChecked}
                        onChange={(e) => handleUpdatePlanChecked(indexInput, indexTexts, e.target.checked)}
                        
                    />
                    <textarea
                        id='textarea-Planss'
                        value={pastInputs.pastText[indexTexts]} 
                        onChange={(e) => handleUpdatePlanTexts(indexInput, indexTexts, e.target.value)}
                        
                    />
                    <button className='delete-Planss' onClick={() => handleRemovePlanText(indexInput, indexTexts)}>delete</button>
                    </div>
                ))}
                </div>
                <button className='button-Plus-Planss' onClick={() => handleUpdatePlanText(indexInput)}> + </button>
           
            </div>

           ))}
              
             
        </div>)
        
};

export default Plans;





