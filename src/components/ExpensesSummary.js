import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import styled from 'styled-components';
import config from '../styles/stylesConfig';
import ContentContainer from './ContentContainer';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <PageHeader>
      <ContentContainer>
        <ContentContainerTitle>
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{' '}
          <span>{formattedExpensesTotal}</span>
        </ContentContainerTitle>
        <ContentContainerActions>
          <Button to="/create">Add Expense</Button>
        </ContentContainerActions>
      </ContentContainer>
    </PageHeader>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

const PageHeader = styled.div`
  background: ${config.COLORS.OFF_WHITE};
  margin-bottom: ${config.SPACING.L_SIZE};
  padding: ${config.SPACING.L_SIZE} 0;
`;

const ContentContainerTitle = styled.h1`
  font-weight: 300;
  margin: 0;
  span {
    font-weight: 700;
  }
`;

const ContentContainerActions = styled.div`
  margin-top: ${config.SPACING.M_SIZE};
`;

const Button = styled(Link)`
  color: white;
  background: ${config.COLORS.BLUE};
  border: none;
  display: inline-block;
  font-size: ${config.FONTS_SIZE.LARGE};
  font-weight: 300;
  line-height: 1;
  padding: ${config.SPACING.S_SIZE};
  text-decoration: none;
`;
