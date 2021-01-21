import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from "../store/expenses/actions";
import ExpenseForm from './ExpenseForm';
import styled from "styled-components";
import config from "../styles/stylesConfig";
import ContentContainer from "./ContentContainer";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return(
            <div>
                <PageHeader>
                    <ContentContainer>
                        <PageTitle>Add Expense</PageTitle>
                    </ContentContainer>
                </PageHeader>
                <ContentContainer>
                    <ExpenseForm 
                    onSubmit={this.onSubmit}
                    />
                </ContentContainer>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

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
