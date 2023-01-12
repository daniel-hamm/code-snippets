// function to check if the page scrolling has ended 
function checkIfScrollingEnded() {
    
    // create a timeout variable to the timer
    let scrollTimeout;

    // create an event listener for the global scroll event
    window.addEventListener('scroll', function(e) {

        // clear the timeout
        clearTimeout(scrollTimeout);

        // wait 100 milliseconds
        scrollTimeout = setTimeout(function() {

            // return, that scrolling has ended
            isScrolling = false;

        }, 100);

    });
}