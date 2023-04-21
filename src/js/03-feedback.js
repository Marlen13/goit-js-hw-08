import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name = "email"]');
const textarea = document.querySelector('[name = "message"]');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const arrForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onInput(evt) {
  arrForm[evt.target.name] = evt.target.value.trim();
  arrForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrForm));
}
checkLocal(arrForm);

function checkLocal({ email, message }) {
  if (email) {
    input.value = email;
  }
  if (message) {
    textarea.value = message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  const arrForm = localStorage.getItem(STORAGE_KEY);
  console.log(arrForm);
  localStorage.removeItem(STORAGE_KEY);
  input.value = '';
  textarea.value = '';
}
