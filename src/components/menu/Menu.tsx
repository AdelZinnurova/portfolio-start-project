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

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 52px;
        justify-content: center;
    }
    
    @media ${Theme.media.tablet} {
        display: none;
    }
`

const List = styled.ul``

const ListItem = styled.li`
    &:hover a {
        color: ${Theme.colors.accentV};
    }
`