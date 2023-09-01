import React from 'react';

import { SectionFilter } from '../SectionFilter/SectionFilter';
import { SectionAirLines } from '../SectionAirLines/SectionAirLines';

export const Main = () => {
  return (
    <main className="main">
      <SectionFilter />
      <SectionAirLines />
    </main>
  );
};
