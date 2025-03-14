import styled from "styled-components";
import photo from '../../../assets/image/Photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {Theme} from "../../../styles/Theme.ts";
import {PrimaryLink} from "../../../components/PrimaryLink.tsx";
import {SecondaryLink} from "../../../components/SecondaryLink.tsx";
import {font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems="center" justifyContent="space-around" flexWrap={'wrap'}>
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

const StyledMain = styled.section`
    background-color: ${Theme.colors.primaryBg};
    display: flex;
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
    max-width: 435px;
`

const Name = styled.span`
    ${font({family: 'Poppins', weight: 600, Fmax: 52, Fmin: 38})}
    display: block;
    margin: 6px 0 12px 0;
`

const LinkWrapper = styled.div`
    display: flex;
    gap: 32px;
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