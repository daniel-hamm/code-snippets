// function to change the page position on key press
function changePagePosition(direction) {

    isScrolling = true;

    switch(direction) {

        case "first":

            if(pagePosition != 0) {

                // set global position to 0
                pagePosition = 0;

                // scroll smoothly to the first wrapper
                first_wrapper.scrollIntoView({behavior: 'smooth'});

            }

            break;

        case "second":

            if(pagePosition != 1) {

                // set global position to 1
                pagePosition = 1;

                // scroll smoothly to the second wrapper
                second_wrapper.scrollIntoView({behavior: 'smooth'});

            }

            break;

    }

}

arrow_down.addEventListener('click', () => {
    second_wrapper.scrollIntoView({behavior: 'smooth'});            // scroll to the second page / wrapper, when the arrow down button is clicked
});

arrow_up.addEventListener('click', () => {
    first_wrapper.scrollIntoView({behavior: 'smooth'});             // scroll to the first page / wrapper, when the arrow up button is clicked
});