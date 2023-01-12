// function to add listening if the mouse wheel is turned
function addWheelListening() {

    // add an event listener to the window
    window.addEventListener('wheel', (event) => {

        // only go further, when we are not already scrolling
        if(!isScrolling) {
            
            // switch trough the deltaY wheel values
            switch(event.deltaY) {

                // if deltaY reaches a positive threshold, start scrolling down, as down scroll Y axis is positive
                case 2:

                    // scroll down to the second page
                    changePagePosition("second");

                    break;

                // if deltaY reaches a negative threshold, start scrolling up, as up scroll Y axis is positive
                case -2:

                    // scroll down to the first page
                    changePagePosition("first");

                    break;

            }
        }
        
    });
};