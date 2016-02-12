#!/bin/bash
function whitespace () {
  echo ""
  echo ""
}
# print a little greeting
echo "good morning nick c:"
echo "---------------------"

echo "What did you dream about?"
whitespace

fortune
whitespace

echo "the poetic edda"
echo "---------------"
node storyteller.js -s havamal.txt -l havamal.log
whitespace

echo "weather berkeley ca"
echo "~~~~~~~~~~~~~~~~~~~~"
node weather.js
whitespace

bash org-agenda.sh
