import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Popup from './Popup';
import './Popup';

// chrome.tabs.query({ active: true, currentWindow: true }, tab => {
//     ReactDOM.render(<Popup />, document.getElementById('popup'));
// });

var root = document.getElementById('content') as HTMLElement;
if (root) {
    root.onscroll = function () {
        console.log("Inside on scroll thingyh");
    }

}

function run() {
    console.log('The DOM is loaded');
    // ... logic that needs DOM
}

document.addEventListener("DOMContentLoaded", run);
// ReactDOM.render(<Popup />, root);