import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input[name="email"]');
const inputMassage = form.querySelector('textarea[name="message"]');
const feedbackForm = 'feedback-form-state';

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', onSubmit);

function saveFormData(e) {
    const formData = {
        email: inputEmail.value,
        message: inputMassage.value,
    }
    localStorage.setItem(feedbackForm, JSON.stringify(formData));
}

function onSubmit(e) {
    e.preventDefault();
    inputEmail.value = '';
    inputMassage.value = '';
    localStorage.removeItem('feedbackForm');
    const formSubmit = {
            email: inputEmail.value,
            massage: inputMassage.value,
        }
    if (inputEmail === "" || inputMassage === ""){
        alert("Всі поля повинні бути заповнені");
        return;
      } else {
        console.log(formSubmit);
        form.reset();
      }

    dataLocalStorage();
}

function dataLocalStorage () {
    const storedData = localStorage.getItem(localStorage.getItem(feedbackForm));
    if (storedData !== null) {
        const formData = JSON.parse(storedData);
        inputEmail.value = formData.email;
        inputMassage.value = formData.message; 
    }
}
// console.log(formData);