// netlify/functions/unsplash.js

exports.handler = async function(event, context) {
  try {
    // Use dynamic import for ES Module
    const fetch = (await import('node-fetch')).default;

    const ACCESS_KEY = process.env.UNSPLASH_KEY;
    if (!ACCESS_KEY) {
      throw new Error("Unsplash access key is missing");
    }

    const response = await fetch(`https://api.unsplash.com/photos/random?query=funny+photos&orientation=landscape&content_filter=low&client_id=${ACCESS_KEY}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching Unsplash data: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error in Unsplash function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};


