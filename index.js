// Import the Unsplash package from node_modules
// import { createApi } from 'https://cdn.jsdelivr.net/npm/unsplash-js@7.0.19/+esm';

// Access the query string parameters
const queryParams = new URLSearchParams(window.location.search);
const numberOfSlides = queryParams.get('slides') || 5; // Default to 5 slides if not provided


// Initialize Reveal.js
 Reveal.initialize({
        hash: true,
        controls: true,
        progress: true,
        center: true,
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        slideNumber: 'all',
        hash: true,
        history: true,
        loop: false,
        help: true,
        autoSlide: 15000,
        showNotes: false,
        viewDistance: 5,



        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [ RevealMarkdown, RevealHighlight ]
    });

// Function to generate slides dynamically
function generateSlides() {
    for (let i = 0; i < numberOfSlides; i++) {
        // Fetch the random image data from your Netlify function
        fetch('/.netlify/functions/unsplash')
            .then(response => response.json())
            .then(data => {
                const photo = data; // The data returned by the Unsplash API
                const slide = document.createElement('section');
                slide.innerHTML = `<figure><img src="${photo.urls.regular}" alt="${photo.alt_description}" style="width:100%; height:auto;"><figcaption style="font-size:15px">via <a href="${photo.urls.regular}" target="_blank">Unsplash</a>, Photographer: ${photo.user.name}</figcaption></figure>`;
                document.getElementById('autogen-Slides').appendChild(slide);
                Reveal.sync(); // Sync Reveal.js after dynamically adding content
            })
            .catch(error => console.error("Error fetching image:", error));
    }
}

// Generate the slides based on query parameter
generateSlides();
