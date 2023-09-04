import React from 'react';
import './TicketAirLines.css';

import { TicketBack } from '../TicketBack/TicketBack';
import { TicketIn } from '../TicketIn/TicketIn';
import logoAir from '../image/Shuttle-logo.jpg';

export const TicketAirLines = () => {
  return (
    <div className="ticketAirLines">
      <div className="titleCards">
        <div className="priceCards">13 400Р</div>
        <img className="logoAir" src={logoAir} alt="logo"></img>
      </div>
      <TicketBack />
      <TicketIn />
    </div>
  );
};
