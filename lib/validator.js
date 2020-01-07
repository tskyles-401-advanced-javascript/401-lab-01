'use strict';

let validator = (module.exports = {});

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  let valid = true;

  for (let fieldName in rules.fields) {
    let field = rules.fields[fieldName];

    let required = field.required;
  }

  return valid;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
validator.isNumber = input => {
  return typeof input === 'number';
};

/**
 * is this a an array?
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input, valueType) => {
  return (
    Array.isArray(input) &&
    (valueType ? input.every(val => typeof val === valueType) : true)
  );
  // Value type ternary grabbed from lecture from Calvin
};
/**
 * is this an object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = input => {
  return typeof input === 'object' && Array.isArray(input) === false;
};
/**
 * is this a boolean?
 * @param input
 * @returns {boolean}
 */
validator.isBoolean = input => {
  return typeof input === 'boolean';
};
/**
 * is this a function?
 * @param input
 * @returns {boolean}
 */
validator.isFunction = input => {
  return typeof input === 'function';
};
