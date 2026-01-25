const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;


    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');


    const fields = ['firstName', 'lastName', 'email', 'phone', 'dob', 'course', 'address', 'city', 'zipcode', 'password'];


    fields.forEach(id => {
        const input = document.getElementById(id);
        if (!input.value.trim()) {
            input.classList.add('error');
            document.getElementById(id + 'Error').style.display = 'block';
            isValid = false;
        }
    });


    if (!document.querySelector('input[name="gender"]:checked')) {
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
    }


    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }


    if (!terms.checked) {
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
    }


    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => successMessage.style.display = 'none', 5000);
    }
});