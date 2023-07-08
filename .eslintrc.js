module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest:true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    "semi": "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "comma-spacing": "off",
    "comma-style": "off",
  },
};
