// Import the Unsplash package from node_modules
import { createApi } from 'https://cdn.jsdelivr.net/npm/unsplash-js@7.0.19/+esm';

// Access the query string parameters
const queryParams = new URLSearchParams(window.location.search);
const numberOfSlides = queryParams.get('slides') || 5; // Default to 5 slides if not provided

// Initialize Unsplash API with your access key
const unsplash = createApi({
  accessKey: 'x5St7Ue7bkkgGlGep21VuD3yD2eN1_jT74fVB3Bhq6w', // Replace with your Unsplash access key
});

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
        unsplash.photos.getRandom({ query: 'funny ai photos', orientation: 'landscape' })
            .then(response => {
                const photo = response.response; // Response data
                const slide = document.createElement('section');
                slide.innerHTML = `<img src="${photo.urls.regular}" alt="${photo.alt_description}" style="width:100%; height:auto;">`;
                document.getElementById('autogen-Slides').appendChild(slide);
                Reveal.sync(); // Sync Reveal.js after dynamically adding content
            })
            .catch(error => console.error("Error fetching image:", error));
    }
}

// Generate the slides based on query parameter
generateSlides();
