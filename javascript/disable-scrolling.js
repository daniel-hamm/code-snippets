// function to prevent the default behavior of events
// simplifies the calling
function preventDefault(event) {
    event.preventDefault();
}

// function called once to check if the browser support passive mode on event listeners
function passiveCheck() {

    // try function to check if the users browser supports the passive property on events
    // as it is an requirement to disable user scrolling
    try {

        // create an object with a passive property, so we can attach it to our eventlistener testing
        let options = Object.defineProperty({}, 'passive', {

            // if the passive property is accessed, the getter function will be called
            get: function() {

                // set the global variable true, so we know, that the users browser support the passive property on events
                supportsPassive = true;

            }

        });

        // create a passive test event, which calls our previously created fail check for the passive property
        window.addEventListener("testPassive", null, options);

        // remove the passive test event
        window.removeEventListener("testPassive", null, options);

    } catch (event) {} // we just exit the try function, even if it fails

    // depending on the previous fail check for the passive property
    // we now know which option to set in the wheel event listeners options
    wheelOption = supportsPassive ? { passive: false } : false;
}

// function to disable scrolling
function disableScroll() {
    
    // add event listener for modern browser
    window.addEventListener('wheel', preventDefault, wheelOption);

    // add event listener for mobile devices
    window.addEventListener('touchmove', preventDefault, wheelOption);
}

// function to enable scrolling
function enableScroll() {
    
    // remove event listener for modern browsers
    window.removeEventListener('wheel', preventDefault, wheelOption); 

    // remove event listener for mobile devices
    window.removeEventListener('touchmove', preventDefault, wheelOption);
}