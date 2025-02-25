import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";

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

const Text = styled.p``

const SocialList = styled.ul`
    display: flex;
    gap: 16px;
`

const SocialItem = styled.li``

const SocialLink = styled.a``

