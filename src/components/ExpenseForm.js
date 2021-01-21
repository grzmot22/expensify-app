import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import styled from "styled-components";
import config from "../styles/stylesConfig";
import Button from "./Button";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() =>({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() =>({error: 'Please provide description and amount.'}))
        } else {
            this.setState(() =>({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    
    render() {
        return (        
            <FormContainer onSubmit={this.onSubmit}>
            {this.state.error && <FormError >{this.state.error}</FormError>}
            <TextInput
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
            <TextInput
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
            <TextArea
              placeholder="Add a note for your expense (optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
            >
            </TextArea>
            <div>
              <Button>Save Expense</Button>
            </div>
          </FormContainer>
        )
    }
}

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

