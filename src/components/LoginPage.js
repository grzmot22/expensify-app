import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { startLogin } from "../store/auth/actions";
import config from "../styles/stylesConfig";
import Button from "./Button";

export const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Box>
        <Title>Expensify</Title>
        <Text>It's time to get your expenses under control.</Text>
        <Button
          onClick={() => {
            console.log("DD");
            dispatch(startLogin());
          }}
        >
          Login with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  align-items: center;
  background: url("/images/bg.jpg");
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  padding: ${config.SPACING.L_SIZE} ${config.SPACING.M_SIZE};
  text-align: center;
  width: 25rem;
`;

const Title = styled.h1`
  margin: 0 0 ${config.SPACING.M_SIZE} 0;
  line-height: 1;
`;

const Text = styled.p``;
