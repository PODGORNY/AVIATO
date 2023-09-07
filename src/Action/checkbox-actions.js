// события фильтры
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const SET_ALL_FILTERS = 'SET_ALL_FILTERS';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';

// action creator - компактный экшен
// данные в переменной filter, передаются в reducer - а тот отдаст в Store
export const toggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  payload: filter,
});

export const setAllFilters = () => ({
  type: SET_ALL_FILTERS,
});

export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});
