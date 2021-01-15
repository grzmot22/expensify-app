import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from "../store/auth/actions";
import styled from "styled-components";

export const LoginPage = ({ startLogin }) => (
    <Container>
        <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </Container>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

const Container = styled.div`
    align-items: center;
    background: url('/images/bg.jpg');
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;
