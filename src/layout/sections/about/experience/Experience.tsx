import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Theme} from "../../../../styles/Theme.ts";

type ExperiencePropsType = {
    iconId: string;
    title: string;
}

export const Experience = (props: ExperiencePropsType) => {
    return (
        <StyledExperience>
            <FlexWrapper flexDirection={'column'}>
                <Icon iconId={props.iconId} width={'62'} height={'62px'} viewBox={'0 0 62 62'}/>
                <ExperienceTitle>{props.title}</ExperienceTitle>
            </FlexWrapper>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
    background-color: ${Theme.colors.accentG};
    width: 200px;
    height: 254px;
    padding: 77px 46px 24px 28px;
    
    flex-grow: 1;
    
    &:hover {
        background-color: ${Theme.colors.accentV};
    }
    
    ${FlexWrapper} {
        gap: 10px;
    }
`

const ExperienceTitle = styled.span`
    font-weight: 600;
    font-size: 24px;
    color: ${Theme.colors.font};
    text-transform: uppercase;
`