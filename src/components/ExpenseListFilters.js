import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from '../store/filters/actions';
import styled from 'styled-components';
import config from '../styles/stylesConfig';
import ContentContainer from './ContentContainer';

export const ExpenseListFilters = () => {
  // redux state
  const filters = useSelector((state) => state.filters);

  // redux dispatch
  const dispatch = useDispatch();
  const setTextF = (text) => dispatch(setTextFilter(text));
  const sortByD = () => dispatch(sortByDate());
  const sortByA = () => dispatch(sortByAmount());
  const setStartD = (startDate) => dispatch(setStartDate(startDate));
  const setEndD = (endDate) => dispatch(setEndDate(endDate));

  // state
  const [calendarFocused, setCalendarFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setStartD(startDate);
    setEndD(endDate);
  };

  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused);
  };

  const onTextChange = (e) => {
    setTextF(e.target.value);
  };

  const onSortChange = (e) => {
    if (e.target.value === 'date') {
      sortByD();
    } else if (e.target.value === 'amount') {
      sortByA();
    }
  };

  return (
    <ContentContainer>
      <InputGroup>
        <InputGroupItem>
          <TextInput
            type="text"
            placeholder="Search expenses"
            value={filters.text}
            onChange={onTextChange}
          />
        </InputGroupItem>
        <InputGroupItem>
          <Select value={filters.sortBy} onChange={onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </Select>
        </InputGroupItem>
        <InputGroupItem>
          <DateRangePicker
            startDate={filters.startDate}
            endDate={filters.endDate}
            startDateId={filters.startDate ? filters.startDate.toString() : ''}
            endDateId={filters.endDate ? filters.endDate.toString() : ''}
            onDatesChange={onDatesChange}
            focusedInput={calendarFocused}
            onFocusChange={onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </InputGroupItem>
      </InputGroup>
    </ContentContainer>
  );
};

export default ExpenseListFilters;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${config.SPACING.M_SIZE};
  @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
    flex-direction: row;
    margin-bottom: ${config.SPACING.L_SIZE};
  }
`;

const InputGroupItem = styled.div`
  margin-bottom: ${config.SPACING.S_SIZE};
  @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
    margin: 0 ${config.SPACING.S_SIZE} 0 0;
  }
`;

const TextInput = styled.input`
  border: 1px solid #cacccd;
  height: 50px;
  font-size: ${config.FONTS_SIZE.LARGE};
  font-weight: 300;
  padding: ${config.SPACING.S_SIZE};
`;

const Select = styled.select`
  border: 1px solid #cacccd;
  height: 50px;
  font-size: ${config.FONTS_SIZE.LARGE};
  font-weight: 300;
  padding: ${config.SPACING.S_SIZE};
`;
