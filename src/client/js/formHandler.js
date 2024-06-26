import { urlChecker } from './urlChecker';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const formText = document.getElementById('name').value;
    
    if (urlChecker(formText)) {
        try {
            const response = await postingData('/api', { url: formText });
            console.log('Server response:', response);
            document.getElementById('results').innerHTML = response.score_tag;
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert('Invalid URL');
    }
}

async function postingData(url = '', data = {}) {
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

export { handleSubmit };

function showResult(event) {
    console.log('gg');
    event.preventDefault();
    let formText = document.getElementById('name').value;
    checkForName(formText);

    console.log("Form Submitted");
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res.message);
        document.getElementById('results').innerHTML = res.message;
    });
}
