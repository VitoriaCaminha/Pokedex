import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

type ButtonProps = TypographyProps;

export const Button = styled.button<ButtonProps>`
    background-color: #0F54D1;
    color: #FFFFFF;
    cursor: pointer;
    padding: 13px 50px;
    border-radius: 3px;
    display: flex;
    margin: 0 235px 0 0;
    ${typography}
`;