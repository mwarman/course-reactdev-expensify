import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should setup set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should setup set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('should setup sort by date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup sort by amount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup set text filter action object', () => {
  const text = 'my text';
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should setup set text filter action object with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
