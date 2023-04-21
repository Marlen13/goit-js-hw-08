import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name = "email"]');
const textarea = document.querySelector('[name = "message"]');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
// form.addEventListener('submit', onSubmit);

function onInput(evt) {
  const arrForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  arrForm[evt.target.name] = evt.target.value.trim();
  arrForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrForm));
}
checkLocal();
// function onSubmit(evt) {
//   evt.preventDefault();
//   const saveData = localStorage.getItem(STORAGE_KEY);
//   console.log(saveData);
//   if (saveData) {
//     console.log(`clean filds, storage, console obj`);
//   }
// }
function checkLocal() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  console.log(saveData);
  //   if (saveData) {
  //     const { email, message } = saveData;
  //     input.value = email;
  //     textarea.value = message;
  //     console.log(input.value);
  //     console.log(textarea.value);
  //   }
}
