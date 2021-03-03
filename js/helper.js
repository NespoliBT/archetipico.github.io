/* Suggests screen size */
function checkSize() {
    if ( window.screen.width < 960 ) {
        alert( "This website is not intended for "
            + window.screen.width
            + "px monitors. Try to flip your device horizontally and see if the problem persists" );
    }

    localStorage["checkedSize"] = "checked";
}
/*
    It runs when the webpage loads: it checks if the screen
    size has already been suggested and loads the predefined theme mode
*/
function initializer() {
    if ( localStorage["checkedSize"] !== "checked" ) {
        checkSize();
    }

    if ( localStorage["mode"] !== undefined ) {
        setColors( localStorage["mode"] );
    } else {
        localStorage["mode"] = "light";
        setColors( localStorage["mode"] );
    }
}

/* Sets colors for light and dark mode */
function setColors(mode) {
    if (mode == "light") {
        document.querySelector(":root").style.setProperty("--content", "#141414");
        document.querySelector(":root").style.setProperty("--content-background", "#fcfcfc");
        document.querySelector(":root").style.setProperty("--content-link", "#2f00ffe3");
        document.querySelector(":root").style.setProperty("--menu-background", "#2f00ffe3");
    } else {
        document.querySelector(":root").style.setProperty("--content", "#fcfcfc");
        document.querySelector(":root").style.setProperty("--content-background", "#141414");
        document.querySelector(":root").style.setProperty("--content-link", "#fda2a2e3");
        document.querySelector(":root").style.setProperty("--menu-background", "#fda2a2e3");
    }
}

/* Retrieves changes from the onclick button used for color theme */
function setMode() {
    if ( localStorage["mode"] == "light" ) {
        localStorage["mode"] = "dark";
    } else {
        localStorage["mode"] = "light";
    }

    location.reload();
}