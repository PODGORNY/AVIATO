import React from 'react';
import './TicketIn.css';

export const TicketIn = () => {
  return (
    <div className="ticketIn">
      <div className="itemTicket">
        <div className="itemTitleTicket">NY - LND</div>
        <div className="itemValueTicket">10:45 - 08:00</div>
      </div>
      <div className="itemTicket">
        <div className="itemTitleTicket">В пути</div>
        <div className="itemValueTicket">21ч 15м</div>
      </div>
      <div className="itemTicket">
        <div className="itemTitleTicket">1 пересадка</div>
        <div className="itemValueTicket">PRS</div>
      </div>
    </div>
  );
};
