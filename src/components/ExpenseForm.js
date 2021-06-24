import React, { useState } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';
import config from '../styles/stylesConfig';
import Button from './Button';

export const ExpenseForm = ({ expense, onSubmit }) => {
  // state
  const [description, setDescription] = useState(
    expense ? expense.description : '',
  );
  const [note, setNote] = useState(expense ? expense.note : '');
  const [amount, setAmount] = useState(
    expense ? (expense.amount / 100).toString() : '',
  );
  const [createdAt, setCreatedAt] = useState(
    expense ? moment(expense.createdAt) : moment(),
  );
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [error, setError] = useState('');

  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setCreatedAt(createdAt);
    }
  };

  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!description || !amount) {
      setError('Please provide description and amount.');
    } else {
      setError('');
      onSubmit({
        description: description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note: note,
      });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {error && <FormError>{error}</FormError>}
      <TextInput
        type="text"
        placeholder="Description"
        autoFocus
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => onAmountChange(e)}
      />
      <SingleDatePicker
        date={createdAt}
        onDateChange={(e) => onDateChange(e)}
        focused={calendarFocused}
        onFocusChange={(e) => onFocusChange(e)}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      <TextArea
        placeholder="Add a note for your expense (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></TextArea>
      <div>
        <Button>Save Expense</Button>
      </div>
    </FormContainer>
  );
};

export default ExpenseForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: ${config.SPACING.M_SIZE};
  }
`;

const FormError = styled.p`
  margin: 0 0 ${config.SPACING.M_SIZE} 0;
  font-style: italic;
`;

const TextInput = styled.input`
  border: 1px solid #cacccd;
  height: 50px;
  font-size: ${config.FONTS_SIZE.LARGE};
  font-weight: 300;
  padding: ${config.SPACING.S_SIZE};
`;

const TextArea = styled.textarea`
  border: 1px solid #cacccd;
  height: 10rem;
  font-size: ${config.FONTS_SIZE.LARGE};
  font-weight: 300;
  padding: ${config.SPACING.S_SIZE};
`;
