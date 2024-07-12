
/* SELECTORS */

/* Select the form */
let form = document.querySelector(".form");

/* Select email input */
let email = document.getElementById("emailAddress");

/* Select error message */
let errorMessage = document.getElementById("errorMessage");

/* Select error message */
let successMessage = document.getElementById("successMessage");


/* VALIDATION FUNCTION */

function validateForm (e) {
    e.preventDefault();

    if (email.value === "") {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    }

    else {
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
    }
}


/* EVENT LISTENER */
form.addEventListener("submit", validateForm);