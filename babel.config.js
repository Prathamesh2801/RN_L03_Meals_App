// babel.config.js
module.exports = {
  presets: [
    // If you’re on Expo, you almost certainly want to keep the expo preset:
    'babel-preset-expo',
    '@babel/preset-flow',
  ],
  plugins: [
    'react-native-reanimated/plugin',
  ],
};
