console.log('utils.js is running');

const square = (x) => x * x;

export const add = (a, b) => a + b;

// const subtract = (a, b) => a - b;

// export { square, subtract as default }
export { square }

// export default subtract;

export default (a, b) => a - b;
