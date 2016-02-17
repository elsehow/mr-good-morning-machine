#!/bin/bash
emacs -batch -eval '(org-batch-agenda "a" 
org-agenda-span (quote day) 
org-agenda-files 
(quote ("~/Notes/"))
)))' | 
sed -e 's/fun://g' |  # remove fun: bits
sed -e 's/spring://g'  |  # remove spring: bits
sed -e 's/^[ \t]*//' |  # remove trailing whitespace
sed '/now/d' | # remove the line that says now
sed 's/\.\.\.\.\.\.\ /\.\.\./g' # remove extraneous dots
