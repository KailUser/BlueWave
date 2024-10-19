// TODO: Fix everything here 



// const _CONFIG = {
//     "customLogo": {
//         "description": "Change the Lyntr logo to a custom one",
//         "enabled": true,
//         "logoURL": "https://i.imgur.com/jAnDjpe.png", // The URL of the logo to set
//         "doneClassName": "div.css-175oi2r", //
//     }
// }

// const _PATHS_ = {
//     mainLogo: "body > div:nth-child(1) > div.flex.w-full.justify-center > div > div > div.fixed.inset-x-0.bottom-0.z-50.flex.flex-col.md\\:static.md\\:flex-row > div.md\\:max-w-1\\/3.flex.w-full.min-w-full.flex-row.items-start.gap-2.px-2.py-2.md\\:w-auto.md\\:flex-col.md\\:pt-0 > button > img"
// }

// async function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function injectCSS() {
//     if (document.getElementById("modified-styles")) return;
//     let InjectedStyle = document.createElement("style");
//     InjectedStyle.id = "modified-styles";
//     InjectedStyle.textContent = `
// TODO:        !!! Need Documentation of CSS styles !!!
//     `;
//     document.head.appendChild(InjectedStyle);
// }

// async function customLogo() {
//     if(!_CONFIG.customLogo.enabled) {
//         console.log("Logo customization is disabled");
//         return;
//     }
    
//     let logo = document.querySelector(_PATHS_.mainLogo.replace(/\//g, ' > '));
//     if(!logo) {
//         console.log("Logo element not found");
//         return;
//     }
    
//     if(logo.classList.contains(_CONFIG.customLogo.doneClassName)) {
//         console.log("Logo already customized");
//         return;
//     }
    
//     if(logo) {
//         logo.src = _CONFIG.customLogo.logoURL;
//     }
    
//     logo.classList.add(_CONFIG.customLogo.doneClassName);
//     console.log("Logo customization applied successfully");
// }


// (async function __start__() {
//     while (true) {
//         // =================
//         // Inject styles
//         // injectCSS();
//         customLogo();
//         // =================

//         await sleep(250);
//     }
// })();
