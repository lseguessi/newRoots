module.exports  ={ 
    testTgnorePatterns : ["/node_modules/", "/.next"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEvironment: 'jsdom'
}