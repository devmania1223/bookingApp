import {FONT_LOAD } from "./actionTypes";

export function loadFonts(isLoaded) {
    return {
        type: FONT_LOAD,
        payload: isLoaded
    };
}

