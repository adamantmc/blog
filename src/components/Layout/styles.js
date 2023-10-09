import {styled} from "styled-components";


/* units taken from https://stackoverflow.com/a/7354648 */
export const Container = styled.div`
    padding: 8px;
    margin: auto;

    @media (min-width: 1025px) { 
        max-width: 70%;
    } 
    @media (min-width: 1281px) { 
        max-width: 50%;
    }
`;