import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { iconSuccess, iconError } from '../components/icons';
import '../css/styles.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

iziToast.settings({
  timeout: 3000,
  transitionIn: 'fadeInDown',
  position: 'topRight',
});

function onSubmit(e) {
  e.preventDefault();

  const delay = Number(form.elements.delay.value);
  const promiseState = form.elements.state.value;
  createPromise(delay, promiseState)
    .then(onSuccess)
    .catch(onError)
    .finally(form.reset());
}

function createPromise(delay, state) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        res({ delay });
      } else {
        rej({ delay });
      }
    }, delay);
  });
}

function onSuccess({ delay }) {
  iziToast.success({
    title: 'OK',
    message: `Fulfilled promise in ${delay}ms`,
    iconUrl: iconSuccess,
    theme: 'dark',
    color: 'rgb(89, 161, 13)',
  });
}

function onError({ delay }) {
  iziToast.error({
    title: 'Error',
    message: `Rejected promise in ${delay}ms`,
    iconUrl: iconError,
    theme: 'dark',
    color: 'rgb(239, 64, 64)',
  });
}
