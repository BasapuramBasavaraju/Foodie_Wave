document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    let valid = true;

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

    if (valid) {
        alert("Login Successful!");
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
