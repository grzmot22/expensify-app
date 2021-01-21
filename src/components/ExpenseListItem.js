import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import styled from "styled-components";
import config from "../styles/stylesConfig";
import { darken } from 'polished';

const ExpenseListItem = ({ id, description, amount, createdAt })  => (
    <ListItem to={`/edit/${id}`}>
        <div>
            <ListItemTitle>{description}</ListItemTitle>
            <ListItemSubTitle>{moment(createdAt).format('MMMM Do, YYYY')}</ListItemSubTitle>
        </div>
        <ListItemData>{numeral(amount / 100).format('$0,0.00')}</ListItemData>
    </ListItem>
);

export default ExpenseListItem;

const ListItem = styled(Link)`
    border: 1px solid ${darken(0.07, "#f7f7f7")};
    border-top: none;
    color: ${config.COLORS.DARK_GREY};
    display: flex;
    flex-direction: column;
    padding: ${config.SPACING.S_SIZE};
    text-decoration: none;
    transition: background .3s ease;
    &:hover {
      background: ${config.COLORS.OFF_WHITE};
    }
    
    @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      padding: ${config.SPACING.M_SIZE};
    }
`;

const ListItemTitle = styled.h3`
    margin: 0;
    word-break: break-all;
`;

const ListItemSubTitle = styled.span`
    color: ${config.COLORS.GREY};
    font-size: ${config.FONTS_SIZE.SMALL};
`;

const ListItemData = styled.h3`
     margin: ${config.SPACING.S_SIZE} 0 0 0;
    @media (min-width: ${config.SPACING.DESKTOP_BREAKPOINT}) {
      margin: 0;
      padding-left: ${config.SPACING.S_SIZE};
    }
`;