export function createPromise(delay, state) {
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
