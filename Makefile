brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

install:
	npm ci

lint:
	npx eslint .
