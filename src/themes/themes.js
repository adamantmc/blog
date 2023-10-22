import LightTheme from "./light";
import DarkTheme from "./dark";
import isBrowser from "../utils";

const Themes = {
    light: LightTheme,
    dark: DarkTheme
}


function getCurrentTheme() {
    return Themes[getCurrentThemeName()]
}


function getCurrentThemeName() {
    let theme_name = "light";
    
    if(isBrowser) {
        let local_storage_theme_name = window.localStorage.getItem("theme");

        if(local_storage_theme_name !== null) {
            theme_name = local_storage_theme_name;
        }
    }

    return theme_name;
}


export {Themes, getCurrentTheme, getCurrentThemeName};
