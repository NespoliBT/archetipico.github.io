/**
 * Commands always executed
 */

/* Suggests screen size */
function checkDevice() {
    if ( window.screen.width < 960 ) {
        sessionStorage["device"] = "mobile";
    } else {
        sessionStorage["device"] = "desktop";
    }
}
/*
    It runs when the webpage loads: it checks if the screen
    size has already been suggested and loads the predefined theme mode
*/
function initializer() {
    if ( sessionStorage["device"] === undefined ) {
        checkDevice();
        setSizes( sessionStorage["device"] );
    } else {
        setSizes( sessionStorage["device"] );
    }

    if ( localStorage["mode"] === undefined ) {
        localStorage["mode"] = "light";
        setColors( localStorage["mode"] );
    } else {
        setColors( localStorage["mode"] );
    }
}

/* Sets colors for light and dark mode */
function setColors(mode) {
    try {
        if ( mode === "light" ) {
            document.querySelector(":root").style.setProperty("--content-background", "#fcfcfc");
            document.querySelector(":root").style.setProperty("--content-link", "#2f00ffe3");
            document.querySelector(":root").style.setProperty("--menu-background", "#2f00ffe3");
            document.querySelector(":root").style.setProperty("--content-text-color", "#141414");

            document.getElementById("dark-mode-button").innerHTML ="Dark Mode";
        } else {
            document.querySelector(":root").style.setProperty("--content-background", "#141414");
            document.querySelector(":root").style.setProperty("--content-link", "#fda2a2e3");
            document.querySelector(":root").style.setProperty("--content-text-color", "#fcfcfc");
            document.querySelector(":root").style.setProperty("--menu-background", "#fda2a2e3");

            document.getElementById("dark-mode-button").innerHTML = "Light Mode";
        }
    } catch (e) {
        console.log("Dark Mode Button does not exist on this html");
    }
}

/* Sets sizes for different devices */
function setSizes(device) {
    if ( device === "desktop" ) {
        document.querySelector(":root").style.setProperty("--content-text-size", "1.3rem");
        document.querySelector(":root").style.setProperty("--menu-hovered-width", "17%");
        document.querySelector(":root").style.setProperty("--menu-initial-width", "7%");
        document.querySelector(":root").style.setProperty("--menu-padding-left", "1.7rem");
        document.querySelector(":root").style.setProperty("--menu-text-size", "1.2rem");
    } else {
        document.querySelector(":root").style.setProperty("--content-text-size", "0.8rem");
        document.querySelector(":root").style.setProperty("--menu-hovered-width", "21%");
        document.querySelector(":root").style.setProperty("--menu-initial-width", "7%");
        document.querySelector(":root").style.setProperty("--menu-padding-left", "1rem");
        document.querySelector(":root").style.setProperty("--menu-text-size", "0.7rem");
    }
}



/**
 * Commands that may be executed
 */

/* Retrieves changes from the onclick button used for color theme */
function setMode() {
    if ( localStorage["mode"] === "light" ) {
        localStorage["mode"] = "dark";
    } else {
        localStorage["mode"] = "light";
    }

    location.reload();
}