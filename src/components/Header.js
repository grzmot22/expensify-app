import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/auth/actions';
import styled from 'styled-components';
import config from '../styles/stylesConfig';
import Button from './Button';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <HeaderTitle to="/dashboard">
            <h1>Expensify</h1>
          </HeaderTitle>
          <Button background={'none'} onClick={() => dispatch(startLogout())}>
            Logout
          </Button>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background: ${config.COLORS.DARK_BLUE};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${config.SPACING.M_SIZE};
  max-width: 80rem;
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${config.SPACING.S_SIZE} 0;
`;

const HeaderTitle = styled(Link)`
  color: white;
  text-decoration: none;
  h1 {
    margin: 0;
  }
`;
