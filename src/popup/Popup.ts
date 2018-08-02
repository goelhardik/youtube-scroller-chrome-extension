import * as React from 'react';
import './Popup.scss';

console.log("popuping");

function updateStyles(id: string) {
    var rightPane = document.getElementById(id) as HTMLElement;
    if (rightPane) {
        rightPane.style.height = "100%";
        rightPane.style.overflow = "auto";
        setParentHeight(rightPane.parentElement);
    } else {
        setTimeout(() => {
            updateStyles(id)
        }, 100);
    }
}

function setParentHeight(el: HTMLElement) {
    if (el == null) {
        return;
    }
    console.log("setting height for " + el.tagName);
    el.style.height = "100%";
    if (el.tagName == "BODY" || el.id == "page-manager") {
        el.style.overflow = "hidden";
        console.log("setting overflow");
    }
    setParentHeight(el.parentElement);
}

updateStyles("secondary-inner");
updateStyles("comments");
// interface AppProps {}

// interface AppState {}

// export default class Popup extends React.Component<AppProps, AppState> {
//     constructor(props: AppProps, state: AppState) {
//         super(props, state);
//     }

//     componentDidMount() {
//         // Example of how to send a message to eventPage.ts.
//         chrome.runtime.sendMessage({ popupMounted: true });
//         console.log("Popup.js running!");
//     }

//     render() {
//         return (
//             <div className="popupContainer">
//                 Hello, world!
//             </div>
//         )
//     }
// }
