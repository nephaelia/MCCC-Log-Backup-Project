const events = require('events');
const fs = require('fs');
const readline = require('readline');

fs.readFile('/Users/nephaelia/Documents/Electronic Arts/The Sims 4/Mods/McCmdCenter_AllModules_2022_3_0/mc_cmd_center.log'),
    console.log(line.toString());

    rl.on('line', (line) => {
      console.log(line);
    });
    fs.appendFile('mc_cmd_center log backup test.txt', line, err => { 
        if (err) {
            console.error(err);
        }
    });

  
      await events.once(rl, 'close');


