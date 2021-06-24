import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import styled from 'styled-components';
import config from '../styles/stylesConfig';
import { darken } from 'polished';
import ContentContainer from './ContentContainer';

export const ExpenseList = () => {
  const expenses = useSelector((state) =>
    selectExpenses(state.expenses, state.filters),
  );

  return (
    <ContentContainer>
      <ListHeader>
        <HeaderMobile>Expenses</HeaderMobile>
        <HeaderDesktop>Expense</HeaderDesktop>
        <HeaderDesktop>Amount</HeaderDesktop>
      </ListHeader>
      <ListBody>
        {expenses.length === 0 ? (
          <ListMessage>
            <span>No expenses</span>
          </ListMessage>
        ) : (
          expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </ListBody>
    </ContentContainer>
  );
};

export default ExpenseList;

const ListHeader = styled.div`
  background: ${config.COLORS.OFF_WHITE};
  border: 1px solid ${darken(0.07, '#f7f7f7')};
  color: ${config.COLORS.GREY};
  display: flex;
  justify-content: space-between;
  padding: ${config.SPACING.S_SIZE} ${config.SPACING.M_SIZE};
`;

const ListBody = styled.div`
  margin-bottom: ${config.SPACING.M_SIZE};
  @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
    margin-bottom: ${config.SPACING.L_SIZE};
  }
`;

const ListMessage = styled.div`
  border: 1px solid ${darken(0.07, '#f7f7f7')};
  border-top: none;
  color: ${config.COLORS.DARK_GREY};
  display: flex;
  flex-direction: column;
  padding: ${config.SPACING.S_SIZE};
  text-decoration: none;
  transition: background 0.3s ease;

  @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: ${config.SPACING.M_SIZE};
  }

  align-items: center;
  color: ${config.COLORS.GREY};
  justify-content: center;
  padding: ${config.SPACING.M_SIZE};
  &:hover {
    background: none;
  }
`;

const HeaderMobile = styled.div`
  @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
    display: none;
  }
`;

const HeaderDesktop = styled.div`
  @media (max-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
    display: none;
  }
`;
