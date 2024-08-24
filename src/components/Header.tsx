import React from 'react';
import { EPages } from '../App';

interface HeaderProps {
  handlePageChange: (name: EPages) => void;
}

const Header: React.FC<HeaderProps> = ({ handlePageChange }) => {
  return (
    <header>
      <div className='button-Header'>
      <button className='button-Diary' onClick={() => handlePageChange(EPages.diary)}> Ежедневник </button>
      <button className='button-Plans' onClick={() => handlePageChange(EPages.plans)}> Планы на месяц </button>
      <button className='button-Goal' onClick={() => handlePageChange(EPages.goal)}> Цели и ориентиры на год </button>
      <button className='button-Timetable' onClick={() => handlePageChange(EPages.timetable)}> Расписание занятий и тренировок </button>
      <button className='button-Wishlist' onClick={() => handlePageChange(EPages.wishlist)}> Wishlist </button>
      <button className='button-PastYear' onClick={() => handlePageChange(EPages.pastYear)}> Ретроспектива года </button>
      <button className='button-PastMonth' onClick={() => handlePageChange(EPages.pastMonth)}> Ретроспектива месяца </button>
      </div>
    </header>
  );
};

export default Header;