const events = require('events');
const fs = require('fs');
const readline = require('readline');

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream('/Users/nephaelia/Documents/GitHub/MCCC-Log-Backup-Project/example mccc logs/mc_cmd_center.log'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        console.log(line);
        var arr = line;
        function join(arr) {
            return [...new Set(arr)];
        }
    fs.appendFile('/Users/nephaelia/Documents/GitHub/MCCC-Log-Backup-Project/example mccc logs/mcbackuptest.txt', "\n" + arr, err => { 
      if (err) {
          console.error(err);
      }
  });
});

await events.once(rl, 'close');

console.log('Reading file line by line with readline done.');
} catch (err) {
console.error(err);
}
})();


