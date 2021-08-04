const btn = document.querySelector('#btn');
const recipient = document.querySelector('#clicksRecipient');
let clickCount = 0;

btn.addEventListener('click', () => recipient.innerHTML = (clickCount += 1));
