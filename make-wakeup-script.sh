#!/bin/bash
function whitespace () {
  echo ""
  echo ""
}

echo "What did you dream about?"
whitespace

fortune
whitespace

echo "the poetic edda"
echo "---------------"
node storyteller.js -s havamal.txt -l havamal.log
whitespace

bash org-agenda.sh

echo "weather berkeley ca"
echo "~~~~~~~~~~~~~~~~~~~~"
node weather.js
whitespace
