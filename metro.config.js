// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const config = getDefaultConfig(__dirname);

// Point Metro to RN’s AssetRegistry so PNGs in @react-navigation/elements resolve
config.resolver.assetRegistryPath = 
  require.resolve('react-native/Libraries/Image/AssetRegistry');

// Now wrap with Reanimated’s extra bits
module.exports = wrapWithReanimatedMetroConfig(config);
