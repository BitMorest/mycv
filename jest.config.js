const path = require('node:path');
process.env.TS_JEST_DISABLE_VER_CHECKER = true;

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],

	coverageDirectory: '../../.coverage/angular',
	coverageReporters: ['json', 'html', 'text'],
};
