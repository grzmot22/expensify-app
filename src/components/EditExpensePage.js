import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from "../store/expenses/actions";
import styled from "styled-components";
import config from "../styles/stylesConfig";


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };

    render() {
        return(
            <PageHeader>
                <ContentContainer>
                    <ContentContainer>
                        <PageTitle>Edit Expense</PageTitle>
                    </ContentContainer>
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                        />
                    <Button onClick={this.onRemove} >Remove Expense</Button>
                </ContentContainer>
           </PageHeader>
        )
    }

};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

const PageHeader = styled.header`
    background: ${config.COLORS.OFF_WHITE};
    margin-bottom: ${config.SPACING.L_SIZE};
    padding: ${config.SPACING.L_SIZE} 0;
`;

const ContentContainer = styled.div`
    margin: 0 auto;
    padding: 0 ${config.SPACING.M_SIZE};
    max-width: 80rem;
`;

const PageTitle = styled.h1`
    font-weight: 300;
    margin: 0;
    span {
        font-weight: 700;
    }
`;

const Button = styled.button`
    color: white;
    background: #888888;
    border: none;
    display: inline-block;
    font-size: ${config.FONTS_SIZE.LARGE};
    font-weight: 300;
    line-height: 1;
    padding: ${config.SPACING.S_SIZE};
    text-decoration: none; 
`;
