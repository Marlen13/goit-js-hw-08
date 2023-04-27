import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name = "email"]');
const textarea = document.querySelector('[name = "message"]');
const btn = document.querySelector('button');
btn.setAttribute('disabled', 'disabled');
const STORAGE_KEY = 'feedback-form-state';
const arrForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
//check localStorage
if (arrForm.email) {
  input.value = arrForm.email;
}
if (arrForm.message) {
  textarea.value = arrForm.message;
}
//listen input event
form.addEventListener('input', throttle(onInput, 500));
function onInput(evt) {
  arrForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrForm));

  if (!evt.target.value) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}
//listen submit event
form.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  arrForm = {};
  btn.disabled = true;
}

// checkLocal(arrForm);

// function checkLocal({ email, message }) {
//   if (email) {
//     input.value = email;
//   }
//   if (message) {
//     textarea.value = message;
//   }
// }
