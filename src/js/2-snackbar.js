import { createPromise } from '../components/createPromise';
import { onError, onSuccess } from '../components/resultPromise';
import '../css/styles.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const delay = Number(e.currentTarget.elements.delay.value);
  const promiseState = e.currentTarget.elements.state.value;

  createPromise(delay, promiseState)
    .then(onSuccess)
    .catch(onError)
    .finally(e.currentTarget.reset());
}
