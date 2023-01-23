const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = async (formData) => {
  await waitFor(1000);
  console.log(formData);
  return true;
};

const seededRandom = (seed) => {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const waitFor = async (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export { fetchAPI, submitAPI };
