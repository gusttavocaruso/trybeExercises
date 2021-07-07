// Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);


const sendMarsTemperature = (callback, callbackError) => {
  const messageSuccessfullySent = Math.random() <= 0.6;
  messageSuccessfullySent ? callback(getMarsTemperature()) : callbackError('Robot is busy');
}

setTimeout(() => sendMarsTemperature(temperatureInFahrenheit, handleError), messageDelay());

setTimeout(() => sendMarsTemperature(greet, handleError), messageDelay());
