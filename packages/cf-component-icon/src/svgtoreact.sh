#!/bin/sh

CYAN='\033[1;36m'
GREEN='\033[1;32m'
NC='\033[0m' 

if [ "$1" != "" ]; then 
  if [ "$2" != "" ]; then
    DIRECTORY="$2"
  else
    DIRECTORY="$1"/reactsvgs
  fi
  rm -r "$DIRECTORY"
  mkdir -pv "$DIRECTORY"

  touch "$DIRECTORY"/index.js

for svg in "$1"/*.svg;
  do 
    NAME="$(basename "$svg" ".svg")"
      arr=(${NAME//-/ }) 
      REACTSANITIZED=''
      # Build react sanitized names (i.e. remove punctuations)
      for NAMECHUNK in "${arr[@]}"
        do
          REACTSANITIZED+="$(tr '[:lower:]' '[:upper:]' <<< ${NAMECHUNK:0:1})${NAMECHUNK:1}"
        done
        echo "import "$REACTSANITIZED" from './"$REACTSANITIZED"';" >> "$DIRECTORY"/index.js
        
        #Build index.js exports
        EXPORT+="'"$NAME"':"$REACTSANITIZED" ,\n"
        CONTENT="$(cat "$svg")"

        #REPLACE <svg> tag
        CONTENT=${CONTENT/<svg/<svg className=\{className\} aria\-label=\{label\}}


        #Output file with svg path
        echo "import React from 'react';
import PropTypes from 'prop-types';

const "$REACTSANITIZED" = ({className, label}) => ("$CONTENT")


"$REACTSANITIZED".propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default "$REACTSANITIZED";" >"$DIRECTORY"/"$REACTSANITIZED".js;



         echo Converted ${CYAN}"$svg"${NC} to ${CYAN}"$DIRECTORY"/"$REACTSANITIZED".js${NC}
         done

         #Output index.js file
         echo "export default {\n"${EXPORT/%",\n"/}"\n};" >> "$DIRECTORY"/index.js
         echo Created ${CYAN}"$DIRECTORY"/index.js${NC}
         echo "Running prettier on files"
         ./node_modules/eslint/bin/eslint.js --fix "$DIRECTORY"

         echo ${GREEN}Done successfully${NC}
         else
         echo "Oops! Please enter a directory"
         fi  



