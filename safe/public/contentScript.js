function injectScript() {
    // Create a div element to serve as the React component's root
    const reactRoot = document.createElement('div');
    reactRoot.id = 'root';
    document.body.appendChild(reactRoot);

    // Create a script element to load the React bundle
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('static/js/main.bb31d919.js');
     // Remove the script tag once loaded
     script.onload = () => {
        console.log('React script loaded successfully.');
        script.remove();
    };

    // Error handling for the script loading
    script.onerror = (event) => {
        console.error('Error loading the React script:', event);
        // The event object should contain the information about why the script failed to load
    };
    (document.head || document.documentElement).appendChild(script);
}

// Check if the document is already loaded
if (document.readyState === "complete" || document.readyState === "interactive") {
    // Document is ready, inject the script
    injectScript();
} else {
    // Wait for the document to be ready
    document.addEventListener("DOMContentLoaded", injectScript);
}






