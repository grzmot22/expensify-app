import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../store/filters/actions";
import styled from "styled-components";
import config from "../styles/stylesConfig";
import ContentContainer from "./ContentContainer";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
        startDateId: moment(this.props.filters.startDate).format(),
        endDateId: moment(this.props.filters.endDate).format()
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
        <ContentContainer>
                <InputGroup>
                    <InputGroupItem>
                        <TextInput
                        type="text"
                        placeholder="Search expenses"
                        value={this.props.filters.text}
                        onChange={this.onTextChange}
                        />
                    </InputGroupItem>
                    <InputGroupItem>
                        <Select
                        value={this.props.filters.sortBy}
                        onChange={this.onSortChange}
                        >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                        </Select>
                    </InputGroupItem>
                    <InputGroupItem>
                        <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        startDateId={this.props.filters.startDate ? this.props.filters.startDate.toString() : ""}
                        endDateId={this.props.filters.endDate ? this.props.filters.endDate.toString() : ""}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        />
                    </InputGroupItem>
                </InputGroup>
            </ContentContainer>
        );
    }
};

const mapStateToProps = (state) => ({
        filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
setTextFilter: text => dispatch(setTextFilter(text)),
sortByDate: () => dispatch(sortByDate()),
sortByAmount: () => dispatch(sortByAmount()),
setStartDate: startDate => dispatch(setStartDate(startDate)),
setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${config.SPACING.M_SIZE};
    @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
      flex-direction: row;
      margin-bottom: ${config.SPACING.L_SIZE};
    }
`;

const InputGroupItem = styled.div`
    margin-bottom: ${config.SPACING.S_SIZE};
    @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
      margin: 0 ${config.SPACING.S_SIZE} 0 0;
    }
`;

const TextInput = styled.input`
    border: 1px solid #cacccd;
    height: 50px;
    font-size: ${config.FONTS_SIZE.LARGE};
    font-weight: 300;
    padding: ${config.SPACING.S_SIZE};
`;

const Select = styled.select`
       border: 1px solid #cacccd;
    height: 50px;
    font-size: ${config.FONTS_SIZE.LARGE};
    font-weight: 300;
    padding: ${config.SPACING.S_SIZE};
`;
