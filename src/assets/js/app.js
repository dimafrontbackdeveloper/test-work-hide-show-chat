import validation from './validation';
import Swal from 'sweetalert2';

const chatToggle = document.querySelector('.chat__toggle'),
  chatWrapper = document.querySelector('.chat__wrapper'),
  chatForm = document.querySelector('.chat__form');

const openChat = () => {
  chatWrapper.classList.add('chat__wrapper--active');
  chatToggle.textContent = 'X';
};

const closeChat = () => {
  chatWrapper.classList.remove('chat__wrapper--active');
  chatToggle.textContent = '?';
};

const toggleChat = () => {
  if (chatWrapper.classList.contains('chat__wrapper--active')) {
    closeChat();
  } else {
    openChat();
  }
};

chatForm.addEventListener('submit', () => {
  if (!document.querySelector('.just-validate-error-label')) {
    Swal.fire('Дякую за повідомлення', '', 'success');
  }
});
chatToggle.addEventListener('click', toggleChat);
