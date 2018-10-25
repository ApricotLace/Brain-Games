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
gcd:
	npx babel-node -- src/bin/brain-gcd.js
progression:
	npx babel-node -- src/bin/brain-progression.js
