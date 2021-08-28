const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
      .reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve(sum) : reject(sum);
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .catch((sum) => console.log(`Promise rejeitada ${sum}`));
};

fetchPromise();