export const getRandomInt = (min = 0, max = 2) => Math.floor(Math.random() * (max - min + 1)) + min;
export const round = (value, decimals) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
