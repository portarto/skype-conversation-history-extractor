const args = require('yargs').argv;
const path = require('path');

const username = args.username;
const name = args.name;
const filter = args.filter;
const groups = [];
if (args.groups) {
  groups.push(...args.groups.split(','));
}

const inputFileName = args.inputFileName;
const outputFileName = args.outputFileName ? path.parse(path.basename(args.outputFileName)).name : 'output';


module.exports = {
  get username() {
    return username;
  },
  get name() {
    return name;
  },
  get filter() {
    return filter;
  },
  get groups() {
    return groups;
  },
  get inputFileName() {
    return inputFileName ? inputFileName : 'messages.json';
  },
  get outputFileName() {
    return outputFileName;
  }
}
