import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {Theme} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {font} from "../../../../styles/Common.ts";

type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'6px'}>
                <Icon iconId={props.iconId} width={'62'} height={'62px'} viewBox={'0 0 62 62'}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    &:nth-of-type(odd) {
        border: 3px solid ${Theme.colors.accentV};
    }

    &:nth-of-type(even) {
        border: 3px solid ${Theme.colors.accentG};
    }
`

const SkillTitle = styled.h3`
    color: ${Theme.colors.font};

    ${font({family: 'Poppins', weight: 600, Fmax: 24, Fmin: 18})}
`

const SkillText = styled.p`
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
    text-align: center;
    color: ${Theme.colors.font};
`