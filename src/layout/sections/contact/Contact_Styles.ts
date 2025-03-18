import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Contact = styled.section`
    background-color: ${Theme.colors.primaryBg};

    @media ${Theme.media.tablet} {
        ${FlexWrapper} {
            flex-direction: column;
        }
    }
    position: relative;
`

const ContactLink = styled.div``

const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${Theme.colors.font};
    margin-bottom: 24px;

    @media ${Theme.media.tablet} {
        display: none;
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 16px;

    @media ${Theme.media.tablet} {
        display: none;
    }
`

const SocialItem = styled.li``

const SocialLink = styled.a`
    display: inline-block;
    color: ${Theme.colors.accentV};
    
    &:hover {
        color: ${Theme.colors.accentG};
        transform: translateY(2px);
    }
`

const ContactForm = styled.form`
    max-width: 475px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-right: 80px;
    
    textarea {
        resize: none;
        height: 100px;
    }
`

const TextForm = styled.h3`
    font-weight: 500;
    font-size: 24px;
    color: ${Theme.colors.font};
    margin-bottom: 14px;
`

const Field = styled.input`
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${Theme.colors.project};
    background-color: ${Theme.colors.project};
    padding: 19px 16px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${Theme.colors.font};

    &::placeholder {
        color: ${Theme.colors.placeholder};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${Theme.colors.placeholder};
    }
`


export const S = {
    Contact,
    ContactLink,
    Text,
    SocialList,
    SocialItem,
    SocialLink,
    ContactForm,
    TextForm,
    Field
}