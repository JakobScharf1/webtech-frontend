module.exports = {
    preset: '@vue/cli-plugin-unit-test',
    injectGlobals: true,
    transform: {
        '^.+\\.vue$': 'vue-jest'
    },
    automock: false,
    resetMocks: false,
    setupFiles: [
        './setupJest.js'
    ]
}