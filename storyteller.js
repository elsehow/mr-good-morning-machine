'use strict';
var fs = require('fs')

var argv = require('minimist')(process.argv.slice(2));

var story = fs.readFileSync(argv.s, 'utf8')

try {
  fs.readFileSync(argv.l)
} catch (e) {
  fs.writeFileSync(argv.l, 0)
}

var passage_num = parseInt(fs.readFileSync(argv.l, 'utf8'))

var passage = story.split('\n\n')[passage_num]
console.log(passage)

fs.writeFileSync(argv.l, passage_num++)
