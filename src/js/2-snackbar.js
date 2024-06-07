import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.dir(form);

  let delay = Number(form.elements.delay.value);
  createPromise(delay).then(onSuccess).catch(onError);
}

function createPromise(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const promiseState = form.elements.state.value;
      console.log(promiseState === 'fulfilled');
      if (promiseState === 'fulfilled') {
        res({ delay });
      } else {
        rej({ delay });
      }
    }, delay);
  });
}

function onSuccess({ delay }) {
  iziToast.success({
    message: `✅ Fulfilled promise in ${delay}ms`,
  });
}

function onError({ delay }) {
  iziToast.error({
    message: `❌ Rejected promise in ${delay}ms`,
  });
}
