import styled from "styled-components";

export const SiteTitle = styled.header`
    font-size: 3rem;
    color: ${props => props.theme.headerColor};
    font-weight: 700;
    margin-right: 3rem;
`;

export const SiteTopBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
        margin: 0;
        padding: 0;
    }
`;

export const NavLinksList = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
`;

export const NavLink = styled.li`
    a {
        color: ${props => props.theme.navLinkColor};
    }
    
    font-size: 1.4rem;
    
    &:not(:last-child) {
        padding-right: 2rem;
    }
`;