const axios = require('axios')

const ENDPOINT = 'http://localhost:3000'

const printResponse = response => {
  // const { status, data }= response;
  // console.log('status:', status);
  // console.log('data:', data);
}

const listBooks = async () => {
  const response = await axios.get(ENDPOINT+'/list');
  printResponse(response)
}

const insertBook = async (id, title, author) => {
  const response = await axios.post(ENDPOINT+'/insert', { id, title, author });
  printResponse(response)
}

const getBook = async id => {
  const response = await axios.get(ENDPOINT+`/get?id=${id}`);
  printResponse(response)
}

const deleteBook = async id => {
  const response = await axios.get(ENDPOINT+`/delete?id=${id}`);
  printResponse(response)
}

const watchBooks = async () => {
  // TODO
}

const main = (command, argv_0, argv_1, argv_2) => {
  if (command == 'list')
      listBooks();
  else if (command == 'insert')
      insertBook(argv_0, argv_1, argv_2);
  else if (command == 'get')
      getBook(argv_0);
  else if (command == 'delete')
      deleteBook(argv_0);
  else if (command == 'watch')
      watchBooks();
}

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();
var argv_0 = process.argv[0];
var argv_1 = process.argv[1];
var argv_2 = process.argv[2];
console.log(command)
main(command, argv_0, argv_1, argv_2);

module.exports = main;