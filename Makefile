install-deps:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
install: install-deps
	npx simple-git-hooks
