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
        background-color: ${props => props.theme.post.pre.backgroundColor} !important;
        border-radius: 4px;
        overflow-x: auto;

        /* width */
        code::-webkit-scrollbar {
            width: 100%;
        }
        
        /* Track */
        code::-webkit-scrollbar-track {
            background: rgba(0,0,0,0);
        }
        
        /* Handle */
        code::-webkit-scrollbar-thumb {
            background: #383C44;
            border-radius: 1em;
            border: 3px solid #282C34;
        }
        
        /* Handle on hover */
        code::-webkit-scrollbar-thumb:hover {
            background: #484C54;
        }
          
    }

    a {
        color: ${props => props.theme.linkColor};
    }
`;
