import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Diary from './components/Diary/Diary';
import Wishlist from './components/Wishlist/Wishlist';
import Plans from './components/Plans/Plans';
import Goal from './components/Goal/Goal';
import TimeTable from './components/TimeTable/TimeTable';
import PastYear from './components/Past/PastYear/PastYear';
import PastMonth from './components/Past/PastMonth/PastMonth';
import './App.css'



export enum EPages {
  diary = 'diary',
  plans = 'plans',
  goal = 'goal',
  timetable = 'timetable',
  wishlist = 'wishlist',
  pastYear = 'pastYear',
  pastMonth = 'pastMonth'
};

export interface IAppState {
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
   
};


const App: React.FC = () => {
  const [appState, setAppState] = useState<IAppState>({
    pageName: EPages.diary,
    diaryEntries: [],
    wishlistItems: [],
    goalsList: [],
    monthItem:[],
    yearItem: [],
    planItem: [],
    timeTableItem: [],
    
  });

  useEffect(() => {
    const storedState = localStorage.getItem('appState');
    if (storedState) {
      setAppState(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(appState));
  }, [appState]);





  const handlePageChange = (name: EPages) => {
    setAppState({ ...appState, pageName: name });
  };

  return (
    <div className="app">
      <Header handlePageChange={handlePageChange} />
      {appState.pageName === EPages.diary && (
        <Diary
          diaryEntries={appState.diaryEntries}
          setAppState={setAppState}
        />)}
      {appState.pageName === EPages.wishlist && (
        <Wishlist
          wishlistItems={appState.wishlistItems}
          setAppState={setAppState}
        />
      )}
      {appState.pageName === EPages.goal && (
        <Goal 
          goalsList={appState.goalsList}
          setAppState={setAppState}
        />)}
      {appState.pageName === EPages.pastYear && (
        <PastYear 
          yearItem={appState.yearItem}
          setAppState={setAppState}
        />
      )}
      {appState.pageName === EPages.pastMonth && (
        <PastMonth 
          monthItem={appState.monthItem}
          setAppState={setAppState}
        />
      )}
      {appState.pageName === EPages.plans && (
        <Plans 
          planItem={appState.planItem}
          setAppState={setAppState}
        />
      )}
      
      {appState.pageName === EPages.timetable && (
        <TimeTable 
          timeTableItem={appState.timeTableItem}
          setAppState={setAppState}
        />)}
    </div>
  );
};

export default App;
