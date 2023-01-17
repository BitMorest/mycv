/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	plugins: ['@typescript-eslint', 'import', 'unicorn', 'sonarjs'],
	extends: [
		'plugin:unicorn/recommended',
		'plugin:sonarjs/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			typescript: {
				project: 'workspaces/*/tsconfig.json',
			},
		},
	},
	ignorePatterns: [
		'**/.dist/**/*',
		'**/*.js',
		'workspaces/cli/templates/**/*',
		'workspaces/cli/assets/**/*',
	],
	rules: {
		'unicorn/empty-brace-spaces': 'off',
		'unicorn/prefer-module': 'off',
		'import/no-unresolved': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				ignoreRestArgs: true,
			},
		],
		'unicorn/prevent-abbreviations': [
			'error',
			{
				ignore: ['EDizzy*', 'e-dizzy'],
			},
		],
	},
};
