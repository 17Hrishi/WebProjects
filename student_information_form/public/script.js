/*
document.getElementById('simpleForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {
        alert('Form submitted successfully');
    } else {
        alert('Failed to submit form');
    }
});
*/