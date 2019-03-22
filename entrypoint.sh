#!/bin/sh

if [ "$NODE_ENV" == "production" ]; then
	echo "Running Node Production"
  npm run serve
else
	echo "Running Node Development"
  nodemon src/app.js --exec ./node_modules/.bin/babel-node -L
fi
