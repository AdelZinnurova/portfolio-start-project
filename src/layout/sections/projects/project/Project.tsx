import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.ts";
import {PrimaryLink} from "../../../../components/PrimaryLink.tsx";
import {SecondaryLink} from "../../../../components/SecondaryLink.tsx";

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=''/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>

            <LinkWrapper>
                <PrimaryLink href={'#'}>View Live</PrimaryLink>
                <SecondaryLink href={'#'}>Github Repo</SecondaryLink>
            </LinkWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: ${Theme.colors.project};
    width: 270px;
    height: 417px;
    padding: 16px 16px 22px 16px;
    
    flex-grow: 1;
    //display: flex;
    //flex-direction: column;
    //align-items: center;

    &:nth-child(-n+2) {
        margin-bottom: 10px;
    }
    
    @media ${Theme.media.desktop} {
        max-width: 343px;
    }
`

const Image = styled.img`
    max-width: 311px;
    width: 100%;
    height: 173px;
    object-fit: cover;
    opacity: 0.5;
`

const Title = styled.h3`
    font-weight: 600;
    font-size: 24px;
    color: ${Theme.colors.accentV};
    margin-top: 16px;
    margin-bottom: 5px;
`

const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${Theme.colors.font};
    margin-bottom: 24px;
`

const LinkWrapper = styled.div`
    display: flex;
    gap: 18px;
    
    ${PrimaryLink} {
        width: 145px;
        height: 43px;
        padding-top: 8px;
    }

    ${SecondaryLink} {
        width: 145px;
        height: 43px;
        padding-top: 8px;
    }
`


