// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const initialTime = Date.now();
  return new Promise((resolve, reject) => {
    if (Date.now() - initialTime < time) {
      setInterval(() => resolve(Date.now() - initialTime), 500);
    } else {
      reject(new Error('This time is too much !'));
    }
  });
}

export function asyncDelay(time) {
  return delay(time);
}
