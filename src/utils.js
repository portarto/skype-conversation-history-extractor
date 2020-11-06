module.exports = {
  getFileName: (filename) => {
    const date = new Date();
    return `${filename}_${date.getFullYear()}${date.getMonth()}${date.getDate()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}Z${date.getMilliseconds()}.json`;
  }
}
