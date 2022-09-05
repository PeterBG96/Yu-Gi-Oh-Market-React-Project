import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/cards';

export const getAll = () => request.get(baseUrl);

export const getOne = (cardId) => request.get(`${baseUrl}/${cardId}`);

export const create = (cardData) => request.post(baseUrl, cardData);

export const edit = (cardId, cardData) => request.put(`${baseUrl}/${cardId}`, cardData);

export const remove = (cardId) => request.del(`${baseUrl}/${cardId}`)

export const buyCard = (cardId,cardData) => request.put(`${baseUrl}/${cardId}`, cardData);
