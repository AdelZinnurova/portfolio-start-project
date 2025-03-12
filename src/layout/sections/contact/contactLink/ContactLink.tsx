import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {Theme} from "../../../../styles/Theme.ts";

export const ContactLink = () => {
    return (
        <StyledContactLink>
            <SectionTitle>Connect with me:</SectionTitle>
            <Text>Satisfied with me? Please contact me</Text>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon  width={'32px'} height={'32px'} viewBox={'0 0 32 32'} iconId={'facebook'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon  width={'32px'} height={'32px'} viewBox={'0 0 32 32'} iconId={'instagram'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon  width={'32px'} height={'32px'} viewBox={'0 0 32 32'} iconId={'dribble'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon  width={'32px'} height={'32px'} viewBox={'0 0 32 32'} iconId={'sms'}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
        </StyledContactLink>
    );
};

const StyledContactLink = styled.div``

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

