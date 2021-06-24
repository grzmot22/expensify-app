import React from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../store/expenses/actions';
import ExpenseForm from './ExpenseForm';
import styled from 'styled-components';
import config from '../styles/stylesConfig';
import ContentContainer from './ContentContainer';

export const AddExpensePage = ({ history }) => {
  const dispatch = useDispatch();

  const onSubmit = (expense) => {
    dispatch(addExpense(expense));
    history.push('/');
  };

  return (
    <div>
      <PageHeader>
        <ContentContainer>
          <PageTitle>Add Expense</PageTitle>
        </ContentContainer>
      </PageHeader>
      <ContentContainer>
        <ExpenseForm onSubmit={onSubmit} />
      </ContentContainer>
    </div>
  );
};

export default AddExpensePage;

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
