const { performance } = require('perf_hooks');
const client = require('./client');
const fs = require('fs');

const n = 4096;
let text = ''
const main = () => {
  for(let number = 1; number <= n; number=number<<1) {
    const t1 = performance.now();
    for (let i = 0; i < number; i++) {
      client('list');
    }
    const t2 = performance.now()
    text += `${number} ${t2-t1}\n`
  }
}
main()
fs.writeFile('grpc_scenario_c_list.txt', text, (err) => {
  if (err) throw err;
  console.log('Saved!');
})
