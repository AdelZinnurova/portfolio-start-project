import styled from "styled-components";
import photo from '../../../assets/image/Photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {Theme} from "../../../styles/Theme.ts";
import {PrimaryLink} from "../../../components/PrimaryLink.tsx";
import {SecondaryLink} from "../../../components/SecondaryLink.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems="center" justifyContent="space-between">
                    <div>
                        <SmallText>Hello, i’m</SmallText>
                        <Name>Jayjay D. Dinero</Name>
                        <MainTitle>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web
                            experiences for
                            end-users.</MainTitle>

                        <LinkWrapper>
                            <PrimaryLink href="#">About me</PrimaryLink>
                            <SecondaryLink href="#">Projects</SecondaryLink>
                        </LinkWrapper>
                    </div>

                    <PhotoWrapper>
                        <Photo src={photo} alt="Photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: ${Theme.colors.primaryBg};
    display: flex;
    //z-index: -1;
    //
    // &::after {
    //     content: '';
    //     display: block;
    //     width: 100vw;
    //     height: 128px;
        //     background-color: ${Theme.colors.secondaryBg};
    //
    //     position: absolute;
    //     z-index: 1;
    // }
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
    margin-bottom: 50px;
`

const Name = styled.span`
    display: block;
    font-weight: 600;
    font-size: 52px;
    color: ${Theme.colors.font};
    margin: 6px 0 12px 0;
`

const LinkWrapper = styled.div`
    display: flex;
    gap: 32px;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        display: inline-block;
        width: 486px;
        height: 486px;
        background-color: ${Theme.colors.accentV};
        border-radius: 50%;

        position: absolute;
        top: 78px;
        left: -34px;
        z-index: -1;
    }

    &::after {
        content: '';
        display: inline-block;
        width: 486px;
        height: 128px;
        background-color: ${Theme.colors.primaryBg};

        position: absolute;
        top: 444px;
        right: -14px;
    }
`

const Photo = styled.img`
    width: 444px;
    height: 444px;
    object-fit: cover;
    //border: 1px solid red;
`