let throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
let email = document.querySelector('input');
let message = document.querySelector('textarea');

console.log(form);

let followe = {};
let storage = {};

// const following = throttle(event => {
//     console.log('followingprzed' + localStorage.getItem('feedback-form-state'));

//     //console.log(event.target);
//     console.log(event.target.name);
//     console.log(event.target.value);
//     follow[event.target.name] = event.target.value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(follow));
//     console.log('followingpooooo' + localStorage.getItem('feedback-form-state'));
// }, 500
// );

const following = throttle(event => {
  console.log('przed' +localStorage.getItem('feedback-form-state'));
    console.log(event.target.name);
  console.log(event.target.value);
      console.log(event.target.attributes[0].textContent);

//  storage[event.target.attributes[0].textContent] = event.target.value;
  storage[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(storage));
  console.log('pooo' +localStorage.getItem('feedback-form-state'));
}, 500);



email.addEventListener('input', following);
message.addEventListener('input', following);



// form.addEventListener('submit', sendMessage);
// function sendMessage(event) {
//     event.preventDefault();
//     console.log(localStorage.getItem('feedback-form-state'));
//     updateOutput();
//     //form.reset();
// }

updateOutput();
function updateOutput() {
    console.log('lS' + localStorage.getItem('feedback-form-state'));
    let update = JSON.parse(localStorage.getItem('feedback-form-state'));
    email.value = update.email || "";
    message.value = update.message || "";
        console.log('lSpo' + localStorage.getItem('feedback-form-state'));

  };