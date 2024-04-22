/* 
* Lucky Star Framework File
* Copyright © ECat Plus Community.
* Author: MoeCinnamo
* Repo: https://github.com/ecatplus/lucky-star
*/

// IE browser detection
function isIE() {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);
    return isIE;
}

// Add mata
function addMeta(name, content) {
    const meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
}

// Dynamically introduce JS
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

function loadScriptCode(code, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.appendChild(document.createTextNode(code));
    script.onload = callback;
    document.head.appendChild(script);
}

// Dynamically introduce CSS
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.head.appendChild(link);
}

// Dynamically introduce CSS Code
function loadCSSCode(code) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.rel = "stylesheet";
    try {
        // For modern webbrowser
        style.appendChild(document.createTextNode(code));
    } catch (ex) {
        // For old webbrowser
        style.stylesheet.cssText = code;
    }
    document.head.appendChild(style);
}

// Set lucky cookie
function setLuckyCookie(cookie,iDay,path,domain){
    // Expires time
    var expires = '';
    if (iDay) {
        var newDate = new Date();
        newDate.setDate(newDate.getDate() + iDay);
        expires = newDate;
    }
    // Same domain
    var sameDomain = '';
    if (domain) {
        sameDomain = domain;
    }
    // Site path
    var sitePath = '';
    if (path) {
        sitePath = path;
    }
    // Encode
    cookie = encodeURIComponent(cookie);
    document.cookie = 'lucky-cookie=' + cookie + ";expires=" + expires + ";path=" + sitePath + ';domain=' + sameDomain;
}

// Modify lucky cookie
function modifyLuckyCookie (name,value) {
    // Get lucky cookie
    var getValue = '';
    var arr = document.cookie.split("; ");
    for(var i =0; i<arr.length; i++){
        var arr2 = arr[i].split("=");
        if(arr2[0] == 'lucky-cookie'){
            getValue = arr2[1];
        }
    }
    var getValue = decodeURIComponent(getValue);
    filterLuckyCookie = getLuckyCookie(name);
    // Set lucky cookie
    cookie = getValue.replace(name + '=' + filterLuckyCookie + ';', name + '=' + value + ';');
    setLuckyCookie(cookie)
}

// Clear lucky cookie
function clearLuckyCookie(name) {
    // Get lucky cookie
    var value = '';
    var arr = document.cookie.split("; ");
    for(var i =0; i<arr.length; i++){
        var arr2 = arr[i].split("=");
        if(arr2[0] == 'lucky-cookie'){
            value = arr2[1];
        }
    }
    var value = decodeURIComponent(value);
    filterLuckyCookie = getLuckyCookie(name);
    // Set lucky cookie
    cookie = value.replace(name + '=' + filterLuckyCookie + ';', '');
    setLuckyCookie(cookie)
}

// Get lucky cookie
function getLuckyCookie(name){
    var value = '';
    var arr = document.cookie.split("; ");
    for(var i =0; i<arr.length; i++){
        var arr2 = arr[i].split("=");
        if(arr2[0] == 'lucky-cookie'){
            value = arr2[1];
        }
    }
    var value = decodeURIComponent(value);
    var luckyArr = value.split(";");
    for(var i =0; i<luckyArr.length; i++){
        var luckyArr2 = luckyArr[i].split("=");
        if(luckyArr2[0] == name){
            return luckyArr2[1];
        }
    }
}

// Set cookie
function setCookie(name,value,iDay,path,domain){
    // Expires time
    var expires = '';
    if (iDay) {
        var newDate = new Date();
        newDate.setDate(newDate.getDate() + iDay);
        expires = newDate;
    }
    // Same domain
    var sameDomain = '';
    if (domain) {
        sameDomain = domain;
    }
    // Site path
    var sitePath = '';
    if (path) {
        sitePath = path;
    }
    // Encode
    value = encodeURIComponent(value);
    document.cookie = name + "=" + value + ";expires=" + expires + ";path=" + sitePath + ';domain=' + sameDomain;
}

// Remove cookie
function removeCookie(name){
    setCookie(name,'',-100);
}

// Get cookie
function getCookie(name){
    // Decode
    cookie = decodeURIComponent(document.cookie);
    var arr = cookie.split("; ");
    for(var i =0; i<arr.length; i++){
        var arr2 = arr[i].split("=");
        if(arr2[0] == name){
            return arr2[1];
        }
    }
}

// Check Cookie
function checkCookie() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf('visited=true') === 0) {
            return true;
        }
    }
    return false;
}

// Change language related
function changeLanguage(selectedLanguage) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = lang[selectedLanguage][key];
        element.textContent = translation;
    });
}

// Output repo and version information
console.log('Powered by Lucky-Star.\nCopyright © ECat Plus Community.\nRepo: https://github.com/ECatPlus/Lucky-Star\nVersion: Development');

// Development info
console.warn("You are running a development build of Lucky-Star.\nIt may have user browser compatibility issues and some loopholes or BUGs.\nYou don't have to use the development version just to pursue new features.\nIf you can, please try to use the official version of the Lucky-Star component library in the production environment.")