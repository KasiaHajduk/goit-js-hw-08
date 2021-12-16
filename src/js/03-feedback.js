let throttle = require('lodash.throttle');

let form = document.querySelector('form');
let email = document.querySelector('input');
let message = document.querySelector('textarea');
let btn = document.querySelector('button');


let follow = {};

const following = throttle(event => {
  follow[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(follow));
}, 500);


btn.addEventListener('click', event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.clear();
  updateForm();
  form.reset();
  follow = {};
});


const updateForm = () => {
  let update = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (update) {
    follow = update;
    email.value = follow.email;
    message.value = follow.message;
  }
};
  
updateForm();
email.addEventListener('input', following);
message.addEventListener('input', following);

