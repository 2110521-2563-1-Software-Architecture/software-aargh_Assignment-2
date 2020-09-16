const { performance } = require('perf_hooks');
const client = require('./client');
const fs = require('fs');

const BOOK = { id: 1, title: "test", author: "test" };
const n = 100;
let text = ''
const rand = () => {
  const x = (Math.floor(Math.random()*997))%4;
  if(x === 0) client('get', 1);
  else if(x === 1) client('insert', BOOK.id, BOOK.title, BOOK.author);
  else if(x === 2) client('delete', 1);
  else client('list');
}

const main = () => {
  for(let number = 1; number <= n; number++) {
    const t1 = performance.now();
    for (let i = 0; i < number; i++) {
      rand();
    }
    const t2 = performance.now()
    text += `${number} ${t2-t1}\n`
  }
}

main();
fs.writeFile('grpc_scenario_b.txt', text, (err) => {
  if (err) throw err;
  console.log('Saved!');
});
