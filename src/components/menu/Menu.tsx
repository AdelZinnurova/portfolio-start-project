import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

export const Menu = () => {
    return (
        <StyledMenu>
            <List>
                <ListItem>
                    <a href="/">Home</a>
                </ListItem>
                <ListItem>
                    <a href="/">About me</a>
                </ListItem>
                <ListItem>
                    <a href="/">Projects</a>
                </ListItem>
                <ListItem>
                    <a href="/">Contact</a>
                </ListItem>
            </List>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav``

const List = styled.ul`
    display: flex;
    gap: 52px;
`

const ListItem = styled.li`
    &:hover a {
        color: ${Theme.colors.accentV};
    }
`