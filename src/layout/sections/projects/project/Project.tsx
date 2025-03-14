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
    width: 100%;
    height: 100%;
    padding: 16px 16px 22px 16px;
`

const Image = styled.img`
    max-width: 311px;
    width: 100%;
    max-height: 173px;
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
    
    ${PrimaryLink} {
        max-width: 145px;
        max-height: 43px;
        margin-right: 18px;
        padding: 8px 25px;
    }

    ${SecondaryLink} {
        max-width: 145px;
        max-height: 43px;
        padding: 8px 25px;
    }
`


