function call_REST_API_HELLO() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = ('https://localhost:8080/services/hello?' + 
                new URLSearchParams({ myName: username, lastname: password}).toString()
    );

    fetch(url)
    .then(response => response.text())
    .then(text => {
        console.log("Text return from REST API: " + text);
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error: ', error));
}