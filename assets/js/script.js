function displayImage() {
    // Get the input value
    var imageUrl = document.getElementById('imageUrl').value;

    // Validate if the input is a valid image URL
    if (isValidImageUrl(imageUrl)) {
        // Display the image
        document.getElementById('border').innerHTML = `<img src="${imageUrl}" alt="User's Image">`;
    } else {
        // Show an error if the URL is not valid
        alert ('Please enter a valid image URL');
    }
}

function isValidImageUrl(url) {
    // A simple validation for demo; integrate more robust validation in the future
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

// Terms and Services Agreement 
function validateAgreement() {
    // Check if the checkbox is checked
    var agreementCheckbox = document.getElementById('termsCheckbox');

    if (agreementCheckbox.checked) {
        alert('Agreement accepted! You can proceed.');
        // Add further logic or form submission here
    } else {
        alert('Please agree to the terms and services before proceeding.');
    }
}
