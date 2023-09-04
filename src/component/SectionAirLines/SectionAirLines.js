import React from 'react';
import './SectionAirLines.css';

import { TabsAirLines } from '../TabsAirLines/TabsAirLines';
import { TicketAirLines } from '../TicketAirLines/TicketAirLines';

export const SectionAirLines = () => {
  return (
    <section className="sectionAirLines">
      <TabsAirLines />
      <TicketAirLines />
      <button className="add5Tickets">ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</button>
    </section>
  );
};
