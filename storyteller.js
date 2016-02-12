'use strict';
var fs = require('fs')
// parse command line args
var argv = require('minimist')(process.argv.slice(2));
// try reading -s
var story = fs.readFileSync(argv.s, 'utf8')
// create -l if it doesnt exist
try {
  fs.readFileSync(argv.l)
} catch (e) {
  fs.writeFileSync(argv.l, 0)
}
// read -l to get the passage number
var passage_num = parseInt(fs.readFileSync(argv.l, 'utf8'))
// the script prints today's passage from the story over stdout
var passage = story.split('\n\n')[passage_num]
console.log(passage)
// finally, we increment line 
// and write this updated number to the log file passed in as -l
fs.writeFileSync(argv.l, passage_num+1)
