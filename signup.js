document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    
    let valid = true;

    if (username.value.trim() === "") {
        showError(username, "Username cannot be empty");
        valid = false;
    } else {
        clearError(username);
    }

    if (!validateEmail(email.value)) {
        showError(email, "Please enter a valid email");
        valid = false;
    } else {
        clearError(email);
    }

    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        valid = false;
    } else {
        clearError(password);
    }

    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match");
        valid = false;
    } else {
        clearError(confirmPassword);
    }

    if (valid) {
        alert("Sign-Up Successful!");
        this.reset();
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    let errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    input.style.borderColor = "red";
}

function clearError(input) {
    let errorMessage = input.nextElementSibling;
    errorMessage.textContent = "";
    input.style.borderColor = "#ccc";
}
