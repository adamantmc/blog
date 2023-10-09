import styled from "styled-components";

export const PostTitle = styled.h1`
    color: ${props => props.theme.post.titleColor};
    font-size: 2rem;
    text-align: center;
`;

export const PostInfo = styled.p`
    color: ${props => props.theme.post.infoColor};
`;

export const PostDiv = styled.div`
    color: ${props => props.theme.post.textColor};
    
    pre {
        background-color: ${props => props.theme.post.pre.backgroundColor};
        padding: 1em;
        border-radius: 4px;
        overflow-x: auto;
    }
`;
