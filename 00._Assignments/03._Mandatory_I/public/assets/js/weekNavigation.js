// Function to extract the week number from the file name
const getWeekNumberFromFileName = () => {
    // Get the file name of the current page
    const fileName = window.location.pathname.split('/').pop(); // Get the last part of the URL

    // And extract the week number from the file name
    const currentWeek = parseInt(fileName.match(/\d+/)[0]); // Extracts the first sequence of digits from the file name

    return currentWeek;
};

// Define a function to generate previous and next week links
const generateWeekLinks = (currentWeek) => {
    const div = document.getElementById('week-navigation');
    div.classList.add('text-center', 'mt-5');

    // Create previous week link if currentWeek is greater than 1
    if (currentWeek > 1) {
        const previousWeek = currentWeek - 1;
        const previousWeekLink = document.createElement('a');
        previousWeekLink.classList.add('btn', 'btn-primary', 'm-2');
        previousWeekLink.href = `/week${previousWeek}`;
        previousWeekLink.textContent = '← Previous week';
        div.appendChild(previousWeekLink);
    }

    // Create next week link if currentWeek is less than 7
    if (currentWeek < 7) {
        const nextWeek = currentWeek + 1;
        const nextWeekLink = document.createElement('a');
        nextWeekLink.classList.add('btn', 'btn-primary', 'm-2');
        nextWeekLink.href = `/week${nextWeek}`;
        nextWeekLink.textContent = 'Next week →';
        div.appendChild(nextWeekLink);
    }
};

// Get the current week number and call it
const currentWeek = getWeekNumberFromFileName();
generateWeekLinks(currentWeek);
