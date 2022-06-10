const events = require('events');
const fs = require('fs');
const readline = require('readline');

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream('/Users/nephaelia/Documents/Electronic Arts/The Sims 4/Mods/McCmdCenter_AllModules_2022_3_0/mc_cmd_center.log'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        console.log(line);
        var arr = line;
        function join(arr) {
            return [...new Set(arr)];
        }
    fs.appendFile('/Users/nephaelia/Documents/Sims 4 CC Mods Data Etc/mccc files/FL_mc_cmd_center_log_20220609.log', "\n" + arr, err => { 
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

