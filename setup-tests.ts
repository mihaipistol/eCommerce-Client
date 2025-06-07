import '@testing-library/jest-dom';

const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill for requestAnimationFrame
if (typeof window !== 'undefined') {
  global.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 0);
  };
  global.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}

jest.mock('~/config', () => ({
  DEV: true,
  apiUrl: 'http://localhost:3000',
}));
