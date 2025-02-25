import styled from "styled-components";

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
            <Link href={'#'}>View Live</Link>
            <Link href={'#'}>Github Repo</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: aquamarine;
    max-width: 343px;
    width: 100%;
`

const Image = styled.img`
    max-width: 311px;
    width: 100%;
    height: 173px;
    object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const Link = styled.a`

`