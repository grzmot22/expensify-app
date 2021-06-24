import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ExpenseForm from './ExpenseForm';
import ContentContainer from './ContentContainer';
import Button from './Button';
import { editExpense, removeExpense } from '../store/expenses/actions';
import config from '../styles/stylesConfig';

export const EditExpensePage = ({ match, history }) => {
  const dispatch = useDispatch();
  const startEditExpense = (id, expense) => dispatch(editExpense(id, expense));
  const startRemoveExpense = (id) => dispatch(removeExpense(id));
  const expense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === match.params.id),
  );

  const onSubmit = (data) => {
    startEditExpense(expense.id, data);
    history.push('/');
  };

  const onRemove = () => {
    startRemoveExpense(expense.id);
    history.push('/');
  };

  return (
    <div>
      <PageHeader>
        <ContentContainer>
          <PageTitle>Edit Expense</PageTitle>
        </ContentContainer>
      </PageHeader>
      <ContentContainer>
        <ExpenseForm expense={expense} onSubmit={onSubmit} />
        <Button background={'#888888'} onClick={onRemove}>
          Remove Expense
        </Button>
      </ContentContainer>
    </div>
  );
};

export default EditExpensePage;

const PageHeader = styled.header`
  background: ${config.COLORS.OFF_WHITE};
  margin-bottom: ${config.SPACING.L_SIZE};
  padding: ${config.SPACING.L_SIZE} 0;
`;

const PageTitle = styled.h1`
  font-weight: 300;
  margin: 0;
  span {
    font-weight: 700;
  }
`;
