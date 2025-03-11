import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {Theme} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                <Icon iconId={props.iconId} width={'62'} height={'62px'} viewBox={'0 0 62 62'}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    border-radius: 16px;
    width: 341px;
    height: 338px;
    padding: 62px 20px 20px;
    
    flex-grow: 1;

    &:nth-child(-n+6) {
        margin: 0 5px 16px 5px;
    }
    
    &:nth-of-type(odd) {
        border: 3px solid ${Theme.colors.accentV};
    }
    &:nth-of-type(even) {
        border: 3px solid ${Theme.colors.accentG};
    }
`

const SkillTitle = styled.h3`
    margin: 7px 0 15px 0;
    font-weight: 600;
    font-size: 24px;
    color: ${Theme.colors.font};
`

const SkillText = styled.p`
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
    text-align: center;
    color: ${Theme.colors.font};

`