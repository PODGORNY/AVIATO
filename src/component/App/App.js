import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import getSessionID from '../../Action/ticket-actions';
import { Header } from '../Header/Header';
import { SectionFilter } from '../SectionFilter/SectionFilter';
import { SectionAirLines } from '../SectionAirLines/SectionAirLines';

import './App.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getSessionID())), [];

  return (
    <div>
      <Header />
      <div className="main">
        <SectionFilter />
        <SectionAirLines />
      </div>
    </div>
  );
};
