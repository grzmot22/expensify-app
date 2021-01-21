import styled from "styled-components";
import config from "../styles/stylesConfig";

const TextInput = styled.input`
    border: 1px solid #cacccd;
    height: 50px;
    font-size: ${config.FONTS_SIZE.LARGE};
    font-weight: 300;
    padding: ${config.SPACING.S_SIZE};
`;

export default TextInput;