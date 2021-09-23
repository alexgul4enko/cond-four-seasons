module.exports = {
    env: {
        es6: true,
        browser: true,
        jest: true
    },
    extends: [
        'conductor',
        'conductor/react'
    ],
    plugins: ['prettier'],
    overrides: [
        {
            files: [
                'cypress/**/*.{ts,tsx}'
            ],
            extends: [
                'conductor/typescript'
            ],
            rules: {
                '@typescript-eslint/no-unsafe-member-access': 'off'
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 2019,
                sourceType: 'module',
                allowImportExportEverywhere: true,
                project: './cypress/tsconfig.json'
            }
        },
        {
            files: [
                'src/**/*.{ts,tsx}',
                'setupTests.ts'
            ],
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
                'prettier/prettier': 'error'
            },
            extends: [
                'conductor/typescript',
                'prettier'
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 2019,
                sourceType: 'module',
                allowImportExportEverywhere: true,
                project: './tsconfig.json'
            }
        },
        {
            files: [
                'src/**/__tests__/*.{ts,tsx}'
            ],
            extends: [
                'conductor/jest'
            ]
        }
    ],

    rules: {
        'import/export': 0,
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off'
    }
};
