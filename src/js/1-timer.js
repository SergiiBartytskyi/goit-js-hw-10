import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import convertMs from '../components/convertTime';
import addLeadingZero from '../components/addLeadingZero';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysSpan: document.querySelector('[data-days]'),
  hoursSpan: document.querySelector('[data-hours]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  secondsSpan: document.querySelector('[data-seconds]'),
};

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

iziToast.settings({
  timeout: 3000,
  transitionIn: 'fadeInDown',
  position: 'topRight',
});

refs.startBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', onClick);

const fp = flatpickr(refs.myInput, options);

function onInputData(data) {
  if (data >= Date.now()) {
    refs.startBtn.removeAttribute('disabled');
  } else {
    refs.startBtn.setAttribute('disabled', true);
    iziToast.error({
      message: 'Please choose a date in the future',
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
        message: `${inputDates} is now`,
      });
    }
  }, INTERVAL);
}
