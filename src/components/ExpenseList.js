import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import styled from "styled-components";
import config from "../styles/stylesConfig";

export const ExpenseList = (props) => (
    <ContentContainer>
        <ListHeader>
            <HeaderMobile>Expenses</HeaderMobile>
            <HeaderDesktop>Expense</HeaderDesktop>
            <HeaderDesktop>Amount</HeaderDesktop>
        </ListHeader>
        <ListBody>
        {
            props.expenses.length === 0 ? (
                <ListMessage>
                  <span>No expenses</span>  
                </ListMessage>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id}{...expense}/>
                }) 
            )
        }
        </ListBody>           
    </ContentContainer>
) ;

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);



const ContentContainer = styled.div`
    margin: 0 auto;
    padding: 0 ${config.SPACING.M_SIZE};
    max-width: 80rem;
`;
const ListHeader = styled.div`
    background: ${config.COLORS.OFF_WHITE};
    border: 1px solid darken(${config.COLORS.OFF_WHITE}, 7%);
    color: ${config.COLORS.GREY};
    display: flex;
    justify-content: space-between;
    padding: ${config.SPACING.S_SIZE} ${config.SPACING.M_SIZE};
`;

const ListBody = styled.div`
    align-items: center;
    color: ${config.COLORS.GREY};
    justify-content: center;
    padding: ${config.SPACING.M_SIZE};
    &:hover {
      background: none;
    }
`;

const ListMessage = styled.div`
     margin-bottom: ${config.SPACING.M_SIZE};
    @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
      margin-bottom: ${config.SPACING.L_SIZE};
    }
`;

const HeaderMobile = styled.div`
    @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
      display: none;
    }
`;

const HeaderDesktop = styled.div`
    @media (max-width: ${config.SPACING.DESKTOP_BREAKPOINT} - .01rem) {
      display: none;
    }
`;

