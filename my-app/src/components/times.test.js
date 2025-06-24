import { initializeTimes, updateTimes } from './bookingUtils';

describe('initializeTimes', () => {
  test('should return default time slots', () => {
    const times = initializeTimes();
    expect(times).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
  });
});

describe('updateTimes', () => {
  test('should return same default times regardless of date', () => {
    const currentState = ['17:00', '18:00'];
    const newDate = new Date();
    const updatedTimes = updateTimes(currentState, newDate);

    expect(updatedTimes).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
  });
});