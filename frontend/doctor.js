document.getElementById('consultation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simulate API request (replace this with actual API integration)
    // Here, we're just logging the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can display a confirmation message to the user
    alert('Your consultation request has been submitted. A doctor will contact you shortly.');

    // Clear the form fields
    event.target.reset();
});
