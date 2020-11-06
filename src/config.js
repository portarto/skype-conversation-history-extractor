const args = require('yargs').argv;
const path = require('path');

const username = args.username;
const filter = args.filter;
const groups = [];
if (args.groups) {
  groups.push(...args.groups.split(','));
}

const inputFilename = args.inputFilename;
const outputFilename = args.outputFilename ? path.parse(path.basename(args.outputFilename)).name : 'output';


module.exports = {
  get username() {
    return username;
  },
  get filter() {
    return filter;
  },
  get groups() {
    return groups;
  },
  get inputFilename() {
    return inputFilename ? inputFilename : 'messages.json';
  },
  get outputFilename() {
    return outputFilename;
  }
}
