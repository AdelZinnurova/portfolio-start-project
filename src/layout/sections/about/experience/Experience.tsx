import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Theme} from "../../../../styles/Theme.ts";
import {font} from "../../../../styles/Common.ts";

type ExperiencePropsType = {
    iconId: string;
    title: string;
}

export const Experience = (props: ExperiencePropsType) => {
    return (
        <StyledExperience>
            <FlexWrapper flexDirection={'column'} justifyContent={'center'}>
                <Icon iconId={props.iconId} width={'62'} height={'62px'} viewBox={'0 0 62 62'}/>
                <ExperienceTitle>{props.title}</ExperienceTitle>
            </FlexWrapper>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
    background-color: ${Theme.colors.accentG};
    width: 100%;
    height: 100%;
    padding-left: 26px;
    padding-right: 28px;
    padding-top: 66px;
    
    &:first-child {
        background-color: ${Theme.colors.accentV};
    }
`

const ExperienceTitle = styled.span`
    color: ${Theme.colors.font};
    text-transform: uppercase;

    ${font({family: 'Poppins', weight: 600, Fmax: 24, Fmin: 20})}
`