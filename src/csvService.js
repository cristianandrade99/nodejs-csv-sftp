const { stringify } = require('csv-stringify/sync');
const { parse } = require('csv-parse/sync');

const getCSVBufferFromArray = (array, delimiter) => {
  const csvString = stringify(array, { delimiter, header: true });
  return Buffer.from(csvString);
};

const getArrayFromCSVBuffer = (csvBuffer, delimiter) => {
  const csvString = Buffer.from(csvBuffer).toString();
  return parse(csvString, { delimiter, columns: true });
};

exports.getCSVBufferFromArray = getCSVBufferFromArray;
exports.getArrayFromCSVBuffer = getArrayFromCSVBuffer;
