import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import getSessionID from '../../Action/ticket-actions';
import { Header } from '../Header/Header';
import { Filter } from '../Filter/Filter';
import { TabsAirLines } from '../TabsAirLines/TabsAirLines';
import { ListAirLines } from '../ListAirLines/ListAirLines';

import './App.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getSessionID())), [];

  return (
    <div>
      <Header />
      <div className="main">
        <Filter />
        <div className="AirLines">
          <TabsAirLines />
          <ListAirLines />
        </div>
      </div>
    </div>
  );
};
