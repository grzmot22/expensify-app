import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from "../store/auth/actions";
import styled from "styled-components";
import config from "../styles/stylesConfig";

export const Header = ({ startLogout }) => (
    <Container> 
            <HeaderContainer >
            <HeaderContent>
                <HeaderTitle to="/dashboard" >
                    <h1>Expensify</h1>
                </HeaderTitle>
                <Button  onClick={startLogout}>Logout</Button>
            </HeaderContent>
        </HeaderContainer> 
    </Container>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);

const Container = styled.header`
 background: ${config.COLORS.DARK_BLUE}; 
`;

const HeaderContainer = styled.div`
     margin: 0 auto;
    padding: 0 ${config.SPACING.M_SIZE};
    max-width: 80rem;
`

const HeaderContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: ${config.SPACING.L_SIZE} 0;
`;

const HeaderTitle = styled(Link)`
    color: white;
    text-decoration: none;
    h1 {
        margin: 0;
    }
`;

const Button = styled.button`
    color: white;
    background: none;
    border: none;
    display: inline-block;
    font-size: ${config.FONTS_SIZE.LARGE};
    font-weight: 300;
    line-height: 1;
    padding: ${config.SPACING.S_SIZE};
    text-decoration: none;   
`;