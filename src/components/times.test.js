import { initializeTimes, updateTimes } from './bookingUtils';
import * as api from '../api/api';

describe('initializeTimes', () => {
  test('should return default time slots from fetchAPI for today', () => {
    const mockTimes = ['17:00', '18:30'];
    jest.spyOn(api, 'fetchAPI').mockReturnValue(mockTimes);

    const times = initializeTimes();

    expect(api.fetchAPI).toHaveBeenCalledTimes(1);
    expect(times).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  test('should return updated time slots based on selected date', () => {
    const mockTimes = ['17:00', '20:00'];
    const mockDate = new Date('2025-06-30');

    jest.spyOn(api, 'fetchAPI').mockReturnValue(mockTimes);

    const newState = updateTimes([], { type: 'update_times', date: mockDate });

    expect(api.fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(newState).toEqual(mockTimes);
  });
});