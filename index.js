(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.pkg = PKGJSON={"name":"terminal-emulator","version":"1.2.0","description":"where modern terminal emulators come from","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"brain":{"track":"black","provides":["terminal-emulator"],"requires":["video-terminal","tty"]},"author":"Jan Bölsche <jan@lagomorph.de> (http://regular.codes)","license":"CC-SA-BY-3.0"}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<h1><a name=\"terminal-emulator_terminal-emulators\" class=\"anchor\" href=\"#terminal-emulator_terminal-emulators\"><span class=\"header-link\"></span></a>Terminal Emulators</h1><p>Today, computers are smaller and cheaper, and they typically are now right below your keyboard (in case you have a laptop). The text-based way to interact with a computer has been replaced by touchpads, mice, and graphical user interfaces like Windows or Mac OS.</p>\n<p>Wait. Has it really?</p>\n<p>There is one group of people that still prefers to use a text terminal over a graphical user interface, a group that prefers a keyboard over a mouse or touchpad. These people are a certain kind of programmer. They typically build things that are connected to the Internet (like web applications), they want to work as fast and efficiently as possible and therefore need ways to automate tedious tasks. They often work with servers, which until today are humming, blinking boxes in basements in a data center far away.</p>\n<p>Of course we do not use 1960s technology anymore. While the basic principle of the terminal stayed the same, today it is not a piece of hardware anymore, instead it is a piece of software on your computer that mimics the behavior of a video terminal. It now supports color and emojis, underlined and bold text, transparent background images, copy and paste and many more improvements over the original hardware. The terminal is more popular than ever. All operating systems these days come with a terminal emulator.</p>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

},{}]},{},[1]);
