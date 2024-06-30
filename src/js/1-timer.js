import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import convertMs from '../components/convertTime';
import addLeadingZero from '../components/addLeadingZero';
import { iconSuccess, iconError } from '../components/icons';
import { refs } from '../components/refs';
import '../css/styles.css';

let inputDates = null;
const INTERVAL = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputDates = selectedDates[0];
    onInputData(inputDates);
  },
};

flatpickr(refs.myInput, options);

iziToast.settings({
  timeout: 3000,
  transitionIn: 'fadeInDown',
  position: 'topRight',
});

refs.startBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', onClick);

function onInputData(data) {
  if (data >= Date.now()) {
    refs.startBtn.removeAttribute('disabled');
  } else {
    refs.startBtn.setAttribute('disabled', true);
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      iconUrl: iconError,
      theme: 'dark',
      color: 'rgb(239, 64, 64)',
    });
  }
}

function onClick() {
  refs.myInput.setAttribute('disabled', true);
  refs.startBtn.setAttribute('disabled', true);
  const timerId = setInterval(() => {
    const currentDate = new Date();
    const remainingTime = inputDates - currentDate;

    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    refs.daysSpan.textContent = addLeadingZero(days);
    refs.hoursSpan.textContent = addLeadingZero(hours);
    refs.minutesSpan.textContent = addLeadingZero(minutes);
    refs.secondsSpan.textContent = addLeadingZero(seconds);

    if (remainingTime < INTERVAL) {
      clearInterval(timerId);
      iziToast.success({
        title: 'OK',
        message: `${inputDates} is now`,
        iconUrl: iconSuccess,
        theme: 'dark',
        color: 'rgb(89, 161, 13)',
      });
    }
  }, INTERVAL);
}
