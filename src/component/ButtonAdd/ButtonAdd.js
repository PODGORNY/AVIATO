import React from 'react';

import './ButtonAdd.css';

export const Button = ({ onClick }) => {
  return (
    <button className="add5Tickets" onClick={() => onClick()}>
      Еще 5 билетов!
    </button>
  );
};
