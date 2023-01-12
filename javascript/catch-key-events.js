// listen for the keyboard events, when a key is pressed
window.onkeydown = function(event) {

    // prevent multiple repeated inputs, when the key is hold down
    if(event.repeat) return;

    switch(event.key) {

        // scroll to the second page / wrapper, when the arrow down key is pressed
        case "ArrowDown":      
        
            // prevent the default scrolling, when using the arrow keys
            event.preventDefault();

            // call the function to change the page position
            changePagePosition("second");

            break;

        // scroll to the first page / wrapper, when the arrow up key is pressed
        case "ArrowUp":        
        
            // prevent the default scrolling, when using the arrow keys
            event.preventDefault();

            // call the function to change the page position
            changePagePosition("first");

            break;

        case " ":

            // disable scrolling with the spacebar
            event.preventDefault();

            break;

        case "PageUp":

            // prevent the default scrolling, when using the arrow keys
            event.preventDefault();

            // call the function to change the page position
            changePagePosition("first");

            break;

        case "PageDown":

            // prevent the default scrolling, when using the arrow keys
            event.preventDefault();

            // call the function to change the page position
            changePagePosition("second");

            break;

        case "Home":
            
            // prevent the default scrolling, when using the arrow keys
            event.preventDefault();

            // call the function to change the page position
            changePagePosition("first");

            break;

        case "End":

            // prevent the default scrolling, when using the arrow keys
            event.preventDefault();

            // call the function to change the page position
            changePagePosition("second");

            break;

        case "a":                               // key for calling debugging functions
            console.log("a");
            disableScroll();
            break;

        case "b":                               // key for calling debugging functions
            console.log("b");
            enableScroll();
            break;

        case "c":                               // key for calling debugging functions
            console.log("c");
            addWheelListening();
            break;

        case "d":                               // key for calling debugging functions
            console.log("d");
            console.log(isScrolling);
            console.log(pagePosition);
            break;
    };
};