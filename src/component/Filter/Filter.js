import React from 'react';
// useD - получает функцию dispatch из стор
// useS - получает из reducera данные нужного компонента
import { useDispatch, useSelector } from 'react-redux';

// экшены действий
import { toggleFilter, setAllFilters, clearAllFilters } from '../../Action/checkbox-actions';

import classes from './Filter.module.css';

export const Filter = () => {
  // получаю классы стилей по отдельности...это позволяет модуль
  const { sectionFilter, 'title-filter': titleFilter, sectionFilterItem, check, checkBox, checkInput, name } = classes;

  // отправка события(Action) в стор - чтобы указать редусу Что изменить
  const dispatch = useDispatch();
  // 5 получаю обновлённые данные из reducera состояния фильтров---------------------------------------------5
  const filters = useSelector((state) => state.filterReducer.filters);

  // условия срабатывания фильтров
  const onCheked = (filter) => {
    if (filter === 'all') {
      if (!filters.all) {
        // отправка action - изменения состояния
        dispatch(setAllFilters());
      } else {
        dispatch(clearAllFilters());
      }
    } else {
      if (filter === 'withoutStop' && filters.oneStop && filters.twoStop && filters.threeStop) {
        dispatch(toggleFilter('all'));
      }
      if (filter === 'oneStop' && filters.withoutStop && filters.twoStop && filters.threeStop) {
        dispatch(toggleFilter('all'));
      }
      if (filter === 'twoStop' && filters.withoutStop && filters.oneStop && filters.threeStop) {
        dispatch(toggleFilter('all'));
      }
      if (filter === 'threeStop' && filters.withoutStop && filters.oneStop && filters.twoStop) {
        dispatch(toggleFilter('all'));
      }

      // ПРИНЦИП РАБОТЫ ОБМЕНА ДАННЫМИ...экшна, диспатча, записи в стэйт, и получения данных в компонентах
      // 1 toggleFilter - это экшн...берёт filter и записывает его в свой payload + создаёт там ТИП...см сheckbox-action.js
      // 2 dispatch берёт toggleFilter (внутри которого ТИП и payload)...и отправляет в редуктор(filterReducer)...там проверяется ТИП и меняются значения стэйта...см filterReducer
      dispatch(toggleFilter(filter));
    }
  };
  return (
    <section className={sectionFilter}>
      <h3 className={titleFilter}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input checked={filters.all} className={checkInput} type="checkbox" onChange={() => onCheked('all')} />
          <span className={checkBox}></span>
          <span className={name}>Все</span>
        </label>
      </div>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input
            checked={filters.withoutStop}
            className={checkInput}
            type="checkbox"
            onChange={() => onCheked('withoutStop')}
          />
          <span className={checkBox}></span>
          <span className={name}>Без пересадок</span>
        </label>
      </div>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input
            checked={filters.oneStop}
            className={checkInput}
            type="checkbox"
            onChange={() => onCheked('oneStop')}
          />
          <span className={checkBox}></span>
          <span className={name}>1 пересадка</span>
        </label>
      </div>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input
            checked={filters.twoStop}
            className={checkInput}
            type="checkbox"
            onChange={() => onCheked('twoStop')}
          />
          <span className={checkBox}></span>
          <span className={name}>2 пересадки</span>
        </label>
      </div>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input
            checked={filters.threeStop}
            className={checkInput}
            type="checkbox"
            onChange={() => onCheked('threeStop')}
          />
          <span className={checkBox}></span>
          <span className={name}>3 пересадки</span>
        </label>
      </div>
    </section>
  );
};
