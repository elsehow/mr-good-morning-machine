#!/bin/bash
emacs -batch -eval '(org-batch-agenda "a" 
org-agenda-span (quote day) 
org-agenda-files 
(quote ("~/Notes/spring.org"))
)))'
