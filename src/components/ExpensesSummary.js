import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import styled from "styled-components";
import config from "../styles/stylesConfig";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {

  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <PageHeader>
      <ContentContainer>
        <ContentContainerTitle>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></ContentContainerTitle>
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
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

const PageHeader = styled.div`
    background: ${config.COLORS.OFF_WHITE};
    margin-bottom: ${config.SPACING.L_SIZE};
    padding: ${config.SPACING.L_SIZE} 0;
`;

const ContentContainer = styled.div`
    margin: 0 auto;
    padding: 0 ${config.SPACING.M_SIZE};
    max-width: 80rem;
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

`;