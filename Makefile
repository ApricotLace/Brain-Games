install:
	npm install
publish:
	npm publish
lint:
	npx eslint .
even:
	npx babel-node -- src/bin/brain-even.js
calc:
	npx babel-node -- src/bin/brain-calc.js
