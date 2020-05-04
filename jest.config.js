// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	verbose: true,
	displayName: "WEBSITE",
	errorOnDeprecated: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	testRegex: "./tests/(.*)\.(spec|test).js?(x?)", // eslint-disable-line no-useless-escape
	snapshotResolver: "./tests/__snapshots__/snapshotResolver.js",
};

