// https://github.com/PODGORNY/AVIATO/blob/d6c17d215faa112b9ceeb68238ed3028d2116cd2/src/Action/ticket-actions.js#L18
// описание запросов нужно вынести в отдельный API сервис чтобы запросы и глабальный стор были отделены друг от друга
export default class API {
  _apiURL = 'https://aviasales-test-api.kata.academy';

  getSessionID = () => {
    fetch(`${this._apiURL}/search`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        const searchId = data.searchId;
        return searchId;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  fetchMoreTickets = (searchId) => {
    fetch(`${this._apiURL}/tickets?searchId=${searchId}`) // запрос на сервер
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json(); // если сеть стабильна - пришёл объект с билетами
      })
      .catch((error) => {
        if (error.message >= 500 && error.message < 600) {
          fetchMoreTickets();
        }
      });
  };
}
