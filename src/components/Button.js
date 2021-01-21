
import styled from "styled-components";
import config from "../styles/stylesConfig";

const Button = styled.button`
    color: white;
    background: ${props => props.background || config.COLORS.BLUE};
    border: none;
    display: inline-block;
    font-size: ${config.FONTS_SIZE.LARGE};
    font-weight: 300;
    line-height: 1;
    padding: ${config.SPACING.S_SIZE};
    text-decoration: none;   
`;

export default Button;