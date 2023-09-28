function addingEventListener() {
    const input = document.getElementById('input');

    function alerter() {
        alert("I was clicked");
    }

    input.addEventListener('click', alerter);
}