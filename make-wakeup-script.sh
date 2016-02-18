#!/bin/bash
function whitespace () {
  echo ""
  echo ""
}

echo "what did you dream?"
whitespace

echo "what are your goals for the day?"
whitespace

echo "the poetic edda"
node storyteller.js -s havamal.txt -l havamal.log
whitespace

bash org-agenda.sh
whitespace

echo "=weather berkeley ca="
node weather.js
whitespace

echo "the nyt"
node top-nyt.js
whitespace
