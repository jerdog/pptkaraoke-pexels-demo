import * as dotenv from 'dotenv'
dotenv.config()
const API_KEY = process.env.PEXELS_KEY;
console.log(process.env.PEXELS_KEY); // remove this after you've confirmed it is working
import { createClient } from 'pexels';
const client = createClient(API_KEY);
const url = "https://api.pexels.com/v1/";

let query = "curated?per_page=20&page=1";   //base query to pull 2 curated images

fetch(url + query, {
    method: 'GET',
    headers: {
        'Authorization': API_KEY
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
