import React from 'react';
import './TicketBack.css';
export const TicketBack = () => {
  return (
    <div className="ticketBack">
      <div className="itemTicket">
        <div className="itemTitleTicket">BRL - SNT</div>
        <div className="itemValueTicket">14:40 - 12:10</div>
      </div>
      <div className="itemTicket">
        <div className="itemTitleTicket">В пути</div>
        <div className="itemValueTicket">10ч 00м</div>
      </div>
      <div className="itemTicket">
        <div className="itemTitleTicket">2 пересадки</div>
        <div className="itemValueTicket">FRN</div>
      </div>
    </div>
  );
};
