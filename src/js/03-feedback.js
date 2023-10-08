import throttle  from "lodash.throttle";


const DATA_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');
const inputEL = document.querySelector('.js-input');
const messageEL = document.querySelector('.js-message');

//*** Make Object from user data and save to LS

formEl.addEventListener('input', throttle(handleSaveToLS, 500));
const userDate = {};

function handleSaveToLS(evt) {
if (evt.target.classList.contains("js-input")) {
    userDate.email = evt.target.value;
}
if (evt.target.classList.contains("js-message")) {
    userDate.message = evt.target.value;
}

localStorage.setItem(DATA_KEY, JSON.stringify(userDate));
}


//*** Take LS data, parse and fill input fields

const parsedLocalData = JSON.parse(localStorage.getItem(DATA_KEY));
// console.log(parsedLocalData);

if (parsedLocalData) {
    inputEL.value = parsedLocalData.email || "";
    messageEL.value = parsedLocalData.message || "";
}

//*** Submit: show data object and clear all data

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();

    console.log(userDate);
    inputEL.value = "";
    messageEL.value = "";
    userDate.email = "";
    userDate.message = "";
    localStorage.clear();
}

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');

// const {email,message} = form.elements;
// let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// form.addEventListener('input', throttle(saveFormData, 500));
// form.addEventListener('submit', onSubmit);

// dataLocalStorage();

// function saveFormData(e) {
//     formData[e.target.name] = e.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onSubmit(e) {
//     e.preventDefault();
//     if (email.value === "" || message.value === ""){
//         alert("Всі поля повинні бути заповнені");
//         return;
//       } 
//         console.log(formData);
//         localStorage.removeItem('feedbackForm');
//         form.reset();
//         formData = {};
        
// }

// function dataLocalStorage () {
//     const storedData = localStorage.getItem(STORAGE_KEY);
//     if (storedData !== null) {
//         const formData = JSON.parse(storedData);
//         email.value = formData.email || "";
//         message.value = formData.message || ""; 
//     }
// }
// console.log(formData);