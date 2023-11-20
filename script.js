const form = document.getElementById('survey-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // You can collect and process the form data here

    // For this basic example, let's just show a thank you message
    const container = document.querySelector('.container');
    container.innerHTML = '<h2>Thank you for completing the survey!</h2>';
});
