const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.bgBlue('hello world'));

const res = validator.isEmail('raghav@gmail.com');
console.log(res);