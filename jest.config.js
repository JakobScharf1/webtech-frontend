module.exports = {
    preset: '@vue/cli-plugin-unit-test',
    transform: {
        '^.+\\.vue$': 'vue-jest'
    },
    automock: false,
    resetMocks: false,
    setupFiles: [
        './setupJest.js'
    ]
}