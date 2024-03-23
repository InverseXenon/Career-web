// script.js

// Function to fetch job listings from the GitHub Jobs API
function fetchJobListings() {
    fetch('https://jobs.github.com/positions.json')
        .then(response => response.json())
        .then(data => {
            // Call function to display job listings
            displayJobListings(data);
        })
        .catch(error => {
            console.error('Error fetching job listings:', error);
        });
}

// Function to display job listings on the webpage
function displayJobListings(listings) {
    // Select the job listings container element
    var jobListingsContainer = document.querySelector('.job-listings');

    // Clear any existing job listings
    jobListingsContainer.innerHTML = '';

    // Loop through the job listings data and create HTML elements for each listing
    listings.forEach(listing => {
        // Create a div element for the job listing
        var listingElement = document.createElement('div');
        listingElement.classList.add('job-listing');

        // Create HTML content for the job listing
        var html = `
            <h3>${listing.title}</h3>
            <p>${listing.company}</p>
            <p>${listing.location}</p>
            <a href="${listing.url}" target="_blank">Learn More</a>
        `;

        // Set the innerHTML of the listing element
        listingElement.innerHTML = html;

        // Append the listing element to the job listings container
        jobListingsContainer.appendChild(listingElement);
    });
}

// Fetch job listings when the webpage loads
window.addEventListener('load', fetchJobListings);
