const { performance } = require('perf_hooks');
const client = require('./client');
const fs = require('fs');

const BOOK = { id: 1, title: "test", author: "test" };
const n = 100;
let text = ''
const insertBook = async () => {
  for(let number = 1; number <= n; number++) {
    const t1 = performance.now();
    for (let i = 0; i < number; i++) {
      await client('insert', BOOK.id, BOOK.title, BOOK.author);
    }
    const t2 = performance.now()
    text += `${number} ${t2-t1}\n`
  }
}
insertBook().then(() =>
  fs.writeFile('rest_scenario_a.txt', text, (err) => {
    if (err) throw err;
    console.log('Saved!');
  })
);
