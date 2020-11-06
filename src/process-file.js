const fs = require('fs');
const utils = require('./utils');
const config = require('./config');

const processConversations = require('./process-conversations');

const outputFolder = 'output';

const getOutputFilename = (filename) => {
  return `${outputFolder}/${utils.getFileName(filename)}`;
}

const createOutputFolder = () => {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }
}

const writeToFile = (data, filename) => {
  createOutputFolder();
  const outputfilename = getOutputFilename(filename);
  fs.createWriteStream(outputfilename, { overwrite: false });
  fs.appendFileSync(outputfilename, JSON.stringify(data));
}

processMessages = (error, data) => {
  const messagesJson = JSON.parse(data);

  const messages = processConversations(messagesJson.conversations, config);

  writeToFile(messages, config.outputFilename);
  console.log('messages count: ', messages.length);
}

module.exports = () => fs.readFile(config.inputFilename, processMessages);
