function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const allowedNumber = "173527250";
    const phoneError = document.getElementById('phoneError');

    // Validate if the entered phone number matches the allowed number
    if (phoneNumber === allowedNumber) {
        phoneError.style.display = 'none';
        goToPage2();
    } else {
        phoneError.style.display = 'block';
    }
}

function goToPage2() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
}

function goToPage3() {
    // Collect input values and checkboxes
    const name = document.getElementById('name').value.trim();
    const day = document.getElementById('day').value.trim();
    const month = document.getElementById('month').value.trim();
    const year = document.getElementById('year').value.trim();
    const email = document.getElementById('email').value.trim();
    const noEmailChecked = document.getElementById('noEmail').checked;

    let isValid = true; // Flag to track overall form validity

    // Reference to error message elements
    const nameError = document.querySelector('.error-message:nth-of-type(1)');
    const birthdayError = document.querySelector('.error-message:nth-of-type(2)');
    const emailError = document.querySelector('.error-message:nth-of-type(3)');

    // Validate name: it should not be empty
    if (name === "") {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate birthday: all parts must be provided
    if (day === "" || month === "" || year === "") {
        birthdayError.style.display = 'block';
        isValid = false;
    } else {
        birthdayError.style.display = 'none';
    }

    // Validate email: only if the "No email address" checkbox is NOT checked
    if (!noEmailChecked && email === "") {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Proceed only if the form is valid
    if (isValid) {
        const phoneNumber = document.getElementById('phoneNumber').value;
        const birthday = `${day}/${month}/${year}`;

        // Display collected data on Page 3
        document.getElementById('displayPhoneNumber').textContent = `+60 ${phoneNumber}`;
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayEmail').textContent = noEmailChecked ? 'No email provided' : email;
        document.getElementById('displayBirthday').textContent = birthday;

        // Transition to Page 3
        document.getElementById('page2').classList.remove('active');
        document.getElementById('page3').classList.add('active');
    }
}

function restartProcess() {
    document.getElementById('page3').classList.remove('active');
    document.getElementById('page1').classList.add('active');
}
