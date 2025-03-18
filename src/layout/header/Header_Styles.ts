import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

const Header = styled.header`
    background-color: ${Theme.colors.secondaryBg};
    padding: 20px 0;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999999999;
`

export const S = {
    Header,
}