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
    setTitle();
    setTitleButton();

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

/* Sets page title */
function setTitle() {
    var file_name = window.location.pathname
        .split("/")
        .pop()
        .split(".")[0];

    file_name === "index" || file_name === "" ? file_name = "home" : file_name = file_name;

    var title = file_name[0].toUpperCase() + file_name.substring(1);
    
    document.getElementById("title").innerHTML = "<h1>" + title + "</h1>";
}

/* Sets Dark Mode button */
function setTitleButton() {
    document.getElementById("title-button").innerHTML = '<button class="generic-button" id="dark-mode-button" type="button" onclick="setMode()">Dark Mode</button>';
}




/**
 * Commands that may be executed
 */

/* Clears web storage */
function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();

    document.getElementById("web-storage-button").innerHTML = "Web storage deleted";
    
    sleep(2000).then( () => {
        document.getElementById("web-storage-button").innerHTML = "Delete web storage";
    } ); 
}

/* Retrieves changes from the onclick button used for color theme */
function setMode() {
    if ( localStorage["mode"] === "light" ) {
        localStorage["mode"] = "dark";
    } else {
        localStorage["mode"] = "light";
    }

    location.reload();
}

/* Simple sleep function */
function sleep(t) {
    return new Promise( resolve => setTimeout( resolve, t ) );
}