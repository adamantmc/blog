import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components';
import {LightIcon, DarkIcon} from "./icons";
import { Themes, getCurrentThemeName } from "../../themes/themes";
import isBrowser from '../../utils';


const StyledButton = styled.button`
    border-radius: 4em;
    border-color: rgba(0,0,0,0);
    background-color: rgba(0,0,0,0);
    
    :hover {
        border-radius: 4em;
        border-color: ${props => props.theme.buttonBackgroundOnHover};
        background-color: ${props => props.theme.buttonBackgroundOnHover};
    }

    svg {
        padding: 0.25em;
        width: 2em;
        height: 2em;
    }
`;


const ThemeSwitcher = (props) => {
    const [theme, setTheme] = useState(getCurrentThemeName());

    const themeiconClicked = (event) => {
        event.stopPropagation();
        let new_val = theme === "light" ? "dark" : "light";
        setTheme(new_val);
    }

    useEffect(
        () => {
            if (isBrowser) {
                window.localStorage.setItem("theme", theme);
                window.dispatchEvent(new Event("themeChanged"));
            }
            return () => {} 
        },
        [theme]
    )

    return (
        <StyledButton onClick={themeiconClicked}>
            {theme === "light" ? <DarkIcon color={Themes.light.navLinkColor}/> : <LightIcon color={Themes.dark.navLinkColor}/>}
        </StyledButton>
    )
}

export default ThemeSwitcher;
