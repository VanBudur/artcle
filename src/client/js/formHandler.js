function showResult(event) {
    console.log('gg')
    event.preventDefault()
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("Form Submitted")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res.message)
        document.getElementById('results').innerHTML = res.message
    })
}

import { urlCheker } from './urlChecker';
const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formText = document.getElementById('name').value;
    if (urlCheker(formText)) {
    postData('/api', { url: formText })
    .then(response => {
    console.log('Server response:', response);
    document.getElementById('results').innerHTML =
    

    response.score_tag;
    })
    .catch(error => {
    console.error('Error:', error);
    });
    } else {
    alert('Invalid URL');
    console.log('Invalid URL');
    }
    }
    async function postData(url = '', data = {}) {
        try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        });
        return response.json();
        } catch (error) {
        throw error;
        }
        }

export { handleSubmit,showResult }

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("Form Submitted !!")
   }
   export { handleSubmit }
   