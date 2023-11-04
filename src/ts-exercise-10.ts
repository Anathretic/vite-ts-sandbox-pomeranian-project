// Promise

const promise = new Promise<string>((res) => {
  setTimeout(() => {
    console.log('promise2 - set Timeout');
    res('success');
  }, 10);
});

promise.then((value) => console.log('On resolve promise returned ', value));

// zwraca Promise<void>
const usePromise = async (): Promise<void> => {
  const result = await promise;
  console.log('usePromise result = ', result);
};

const promiseReturnString = async (): Promise<string> => {
  const result = await promise;
  return 'Hello = ' + result;
};

console.log(usePromise, promiseReturnString);
