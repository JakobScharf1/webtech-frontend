module.exports = {
  preset: '@vue/cli-plugin-unit-test',
  injectGlobals: true,
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },

  jest: {
    automock: false,
    resetMocks: false,
    setupFiles: [
      './setupJest.js',
    ],
  },
}
