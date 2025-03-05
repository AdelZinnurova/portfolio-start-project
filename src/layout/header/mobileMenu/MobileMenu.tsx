import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme.ts";


export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span/>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About me</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${Theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: ${Theme.colors.secondaryBg};
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 52px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`