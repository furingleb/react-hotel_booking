import httpService from './http.service';

const roomsEndPoint = 'rooms/';

const roomsService = {
  getAll: async params => {
    const { data } = await httpService.get(roomsEndPoint, { params: { ...params } });
    return data;
  },
  create: async payload => {
    const { data } = await httpService.put(roomsEndPoint + payload._id, payload);
    return data;
  },
  update: async payload => {
    const { data } = await httpService.patch(roomsEndPoint + payload.roomId, payload);
    return data;
  },
  getById: async id => {
    const { data } = await httpService.get(roomsEndPoint + id);
    return data;
  },
  setBooking: async payload => {
    const { data } = await httpService.post(roomsEndPoint + payload.roomId, { bookings: payload._id });
    return data;
  },
  deleteBooking: async payload => {
    const { data } = await httpService.post(roomsEndPoint + payload.roomId, { bookings: payload._id });
    return data;
  },
};

export default roomsService;
