import React from 'react';

import classes from './SectionFilter.module.css';

export const SectionFilter = () => {
  const { sectionFilter, 'title-filter': titleFilter, sectionFilterItem, check, checkBox, checkInput, name } = classes;

  return (
    <section className={sectionFilter}>
      <h3 className={titleFilter}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input checked className={checkInput} type="checkbox" />
          <span className={checkBox}></span>
          <span className={name}>Все</span>
        </label>
      </div>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input className={checkInput} type="checkbox" />
          <span className={checkBox}></span>
          <span className={name}>Без пересадок</span>
        </label>
      </div>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input className={checkInput} type="checkbox" />
          <span className={checkBox}></span>
          <span className={name}>1 пересадка</span>
        </label>
      </div>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input className={checkInput} type="checkbox" />
          <span className={checkBox}></span>
          <span className={name}>2 пересадки</span>
        </label>
      </div>
      <div className={sectionFilterItem}>
        <label className={check}>
          <input className={checkInput} type="checkbox" />
          <span className={checkBox}></span>
          <span className={name}>3 пересадки</span>
        </label>
      </div>
    </section>
  );
};
