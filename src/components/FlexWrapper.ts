import styled from "styled-components";

type FlexWrapperPropsType = {
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
    gap?: string
}

export const FlexWrapper = styled.div <FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'stretch'};
    flex-wrap: ${props => props.flexWrap || 'nowrap'};
    gap: ${props => props.gap || '0px'};
    height: 100%;
`