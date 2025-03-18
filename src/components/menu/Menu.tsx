import React from "react";
import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";
import {Link} from "react-scroll";

const items =[
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About me",
        href: "aboutMe"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contact",
        href: "contact"
    },
]


export const Menu: React.FC = () => {
    return (
        <List>
            {items.map((item, index) => {
                return <ListItem key={index}>
                    <NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                    >
                        {item.title}
                    </NavLink>
                </ListItem>
            })}
        </List>
    );
};

const List = styled.ul`
    display: flex;
    gap: 52px;
    justify-content: center;
`

const ListItem = styled.li`
    &:hover a {
        color: ${Theme.colors.accentV};
    }
`

const NavLink = styled(Link)`
    &:hover a, &.active {
        color: ${Theme.colors.accentV};
    }
`