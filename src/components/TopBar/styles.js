import styled from "styled-components";

export const SiteTitle = styled.header`
    font-size: 3rem;
    color: #4c566a;
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
        color: #4c566a;
    }
    
    font-size: 1.4rem;
    
    &:not(:last-child) {
        padding-right: 2rem;
    }
`;