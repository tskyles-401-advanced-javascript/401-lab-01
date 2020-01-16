'use strict';

const validator = require('./lib/validator.js');

const personRules = {
  fields: {
    id: { type: 'string', required: true },
    name: { type: 'string', required: true },
    age: { type: 'number', required: true },
    children: { type: 'array', valueType: 'string' },
  },
};

const susan = {
  id: '123-45-6789',
  name: 'Susan McDeveloperson',
  age: 37,
  children: [],
};
const fred = {
  id: 38,
  name: 'Freddy McCoder',
  children: [],
};

console.log(validator.isValid(susan, personRules));
console.log(validator.isValid(fred, personRules));
