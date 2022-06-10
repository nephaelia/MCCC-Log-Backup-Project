var fs = require('fs');
var string = 
fs.readFile('/Users/nephaelia/Documents/Electronic Arts/The Sims 4/Mods/McCmdCenter_AllModules_2022_3_0/mc_cmd_center.log', function(err, string) {
  console.log(line.toString());
});

fs.writeFile('temp.text', string, (err) => {
    if (err) console.log(err);
    console.log('Successfully Written to File.');
  });
