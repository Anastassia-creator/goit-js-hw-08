import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const {email,message} = form.elements;
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', onSubmit);

dataLocalStorage();


function saveFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
    e.preventDefault();
    
    
    
    if (email.value === "" || message.value === ""){
        alert("Всі поля повинні бути заповнені");
        return;
      } 
        console.log(formData);
        localStorage.removeItem('feedbackForm');
        form.reset();
        formData = {};
        
}

function dataLocalStorage () {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData !== null) {
        const formData = JSON.parse(storedData);
        email.value = formData.email || "";
        imessage.value = formData.message || ""; 
    }
}
// console.log(formData);