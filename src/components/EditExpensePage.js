import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ExpenseForm from './ExpenseForm';
import ContentContainer from './ContentContainer';
import Button from './Button';
import { editExpense, removeExpense } from '../store/expenses/actions';
import config from '../styles/stylesConfig';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <PageHeader>
          <ContentContainer>
            <PageTitle>Edit Expense</PageTitle>
          </ContentContainer>
        </PageHeader>
        <ContentContainer>
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <Button background={'#888888'} onClick={this.onRemove}>
            Remove Expense
          </Button>
        </ContentContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id,
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

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
