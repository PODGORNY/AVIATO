import React from 'react';
import './TabsAirLines.css';

export const TabsAirLines = () => {
  return (
    <div className="tabsAirLines">
      <button className="itemTabs">Самый дешевый</button>
      <button className="itemTabs">Самый быстрый</button>
      <button className="itemTabs">Оптимальный</button>
    </div>
  );
};
