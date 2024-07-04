import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { iconError, iconSuccess } from './icons';
iziToast.settings({
  timeout: 3000,
  transitionIn: 'fadeInDown',
  position: 'topRight',
});

export function onSuccess({ delay }) {
  iziToast.success({
    title: 'OK',
    message: `Fulfilled promise in ${delay} ms`,
    iconUrl: iconSuccess,
    theme: 'dark',
    color: 'rgb(89, 161, 13)',
  });
}

export function onError({ delay }) {
  iziToast.error({
    title: 'Error',
    message: `Rejected promise in ${delay} ms`,
    iconUrl: iconError,
    theme: 'dark',
    color: 'rgb(239, 64, 64)',
  });
}
