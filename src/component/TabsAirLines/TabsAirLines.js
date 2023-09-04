// по аналогии с Фильтром
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// событие сортировки...экшн
import { setSorting } from '../../Action/sorting-actions';

import classes from './TabsAirLines.module.css';

export const TabsAirLines = () => {
  const { active, itemTabs } = classes;

  const dispatch = useDispatch();
  const sorting = useSelector((state) => state.ticketReducer.sorting);

  // сортировка билетов
  const changeTab = (sorting) => {
    dispatch(setSorting(sorting));
  };

  // сортировка меняет стили
  return (
    <div className="tabsAirLines">
      <button
        className={sorting === 'cheapest' ? `${itemTabs} ${active}` : `${itemTabs}`}
        onClick={() => changeTab('cheapest')}
      >
        Самый дешевый
      </button>
      <button className={sorting === 'fastest' ? `${item} ${active}` : `${item}`} onClick={() => changeTab('fastest')}>
        Самый быстрый
      </button>
      <button className={sorting === 'optimal' ? `${item} ${active}` : `${item}`} onClick={() => changeTab('optimal')}>
        Оптимальный
      </button>
    </div>
  );
};
