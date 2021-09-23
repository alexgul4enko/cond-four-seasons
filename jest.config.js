module.exports = {
    collectCoverageFrom: [
        '!src/**/index.ts',
        '!src/**/routes.{ts,tsx}',
        '!src/app/bootstrap.tsx'
    ],
    watchPathIgnorePatterns: [
        'src/app/index.tsx',
        'src/app/bootstrap.tsx'
    ]
};
