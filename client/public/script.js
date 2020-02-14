// fetch documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async function happyFunction() {
    let uri = 'http://localhost:5000/mood?face=' + escape(':)');
    await fetch(uri, {    
        method: 'GET',
        //mode: "no-cors",
        //cache: "no-cache"
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        document.getElementById('happy-title').innerHTML = json.face;
    })
    .catch((error) => {
        console.error('Error: ' + error);
    });
}