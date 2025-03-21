import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

const Main = styled.section`
    background-color: ${Theme.colors.primaryBg};
    display: flex;
    box-shadow: 0 128px 0 0 ${Theme.colors.secondaryBg};
    margin-bottom: 128px;
    padding-top: 128px;
    padding-bottom: 0;
`

const TextWrapper = styled.div`
    height: 302px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 42px;
`

const SmallText = styled.span`
    font-weight: 600;
    font-size: 32px;
    color: ${Theme.colors.font};
`

const MainTitle = styled.h1`
    font-weight: 500;
    font-size: 18px;
    color: ${Theme.colors.font};
    max-width: 435px;
`

const Name = styled.span`
    ${font({family: 'Poppins', weight: 600, Fmax: 52, Fmin: 38})}
    display: block;
`

const LinkWrapper = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 20px;
`

const PhotoWrapper = styled.div`
    width: 500px;
    height: 444px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border: 1px solid red;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Theme.media.mobile} {
        width: 326px;
        height: 300px;
    }

    &::before {
        content: '';
        display: inline-block;
        width: 500px;
        height: 486px;
        background-color: ${Theme.colors.accentV};
        border-radius: 50%;

        position: absolute;
        top: 78px;
        left: 0;
        z-index: -1;

        @media ${Theme.media.mobile} {
            width: 326px;
            height: 320px;
            top: 60px;
        }
    }
`

const Photo = styled.img`
    width: 444px;
    height: 444px;
    object-fit: cover;
    border: 1px solid red;

    @media ${Theme.media.mobile} {
        width: 300px;
        height: 300px;
    }
`

export const S = {
    Main,
    TextWrapper,
    SmallText,
    MainTitle,
    Name,
    LinkWrapper,
    PhotoWrapper,
    Photo,
}