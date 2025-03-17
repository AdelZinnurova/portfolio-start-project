import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.ts";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${Theme.colors.secondaryBg};
    padding: 20px 0;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999999999;
`